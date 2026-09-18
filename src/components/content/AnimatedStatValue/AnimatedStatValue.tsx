import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { StatEffect } from '../../../data/hero';
import { cx } from '../../../utils/cx';
import { prefersReducedMotion } from '../../../utils/motion';
import styles from './AnimatedStatValue.module.css';

type AnimatedStatValueProps = {
  value: string;
  effect: StatEffect;
  /** Starts the entrance once true; it plays a single time. */
  active: boolean;
};

type Phase = 'idle' | 'playing' | 'done';

/** Shared by counters and odometer reels: a slight run-up, then a long settle. */
const COUNT_TIMING = { duration: 1400, easing: 'cubic-bezier(0.3, 0.05, 0.4, 1)' };

const COUNT_VARS = {
  '--count-duration': `${COUNT_TIMING.duration}ms`,
  '--count-easing': COUNT_TIMING.easing,
} as CSSProperties;

/**
 * A stat figure with an entrance:
 * - `count` counts up from 0 ("90+", "4,000+"), the suffix staying in place.
 * - `roll` turns each digit up from 0 like an odometer ("05").
 * - `reveal` shows the characters left to right, the last one settling in ("NAAC A").
 *
 * The real value always sets the size, so nothing shifts, and stays readable to
 * assistive tech while an aria-hidden overlay animates in its place. The value
 * takes over once the overlay finishes. With reduced motion it simply shows.
 */
export function AnimatedStatValue({ value, effect, active }: AnimatedStatValueProps) {
  const [phase, setPhase] = useState<Phase>(() => (prefersReducedMotion() ? 'done' : 'idle'));
  const overlayRef = useRef<HTMLSpanElement>(null);

  // Waits for web fonts too (up to a second), so figures don't animate in a fallback face.
  useEffect(() => {
    if (!active || phase !== 'idle') return;

    let cancelled = false;
    const fontsLoaded = new Promise((resolve) => {
      document.fonts.ready.then(resolve);
      setTimeout(resolve, 1000);
    });
    fontsLoaded.then(() => {
      if (!cancelled) setPhase(prefersReducedMotion() ? 'done' : 'playing');
    });
    return () => {
      cancelled = true;
    };
  }, [active, phase]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (phase !== 'playing' || !overlay) return;

    const stopCounter = effect === 'count' ? runCounter(overlay, value) : undefined;
    let cancelled = false;
    // The overlay's CSS animations, plus the counter's clock.
    Promise.all(overlay.getAnimations({ subtree: true }).map((animation) => animation.finished)).then(
      () => {
        if (!cancelled) setPhase('done');
      },
      () => {}, // Cancelled by unmounting.
    );
    return () => {
      cancelled = true;
      stopCounter?.();
    };
  }, [phase, effect, value]);

  return (
    <span className={styles.root} data-phase={phase} style={COUNT_VARS}>
      <span className={styles.text}>{value}</span>
      {phase !== 'done' && (
        <span
          ref={overlayRef}
          className={cx(styles.overlay, effect !== 'reveal' && styles.rise)}
          aria-hidden="true"
        >
          {effect === 'roll' && <Odometer value={value} />}
          {effect === 'reveal' && <Reveal value={value} />}
        </span>
      )}
    </span>
  );
}

/**
 * Writes the count into `node` (which React leaves empty) on each frame, driven by
 * a Web Animations clock so it shares COUNT_TIMING's easing. Returns a stop function.
 */
function runCounter(node: HTMLElement, value: string): () => void {
  const [, digits = '0', suffix = ''] = /^([\d,]+)(.*)$/.exec(value) ?? [];
  const target = Number(digits.replaceAll(',', ''));
  const format = new Intl.NumberFormat('en-IN', { useGrouping: digits.includes(',') });
  // Only the three leading digits tick, so "4,000" steps in tens and reads calmly.
  const step = 10 ** Math.max(0, String(target).length - 3);
  const clock = node.animate(null, { ...COUNT_TIMING, fill: 'forwards' });
  let frame = 0;

  const tick = () => {
    const progress = clock.effect?.getComputedTiming().progress ?? 0;
    node.textContent = format.format(Math.round((progress * target) / step) * step) + suffix;
    if (clock.playState === 'running') frame = requestAnimationFrame(tick);
  };

  tick();
  return () => {
    cancelAnimationFrame(frame);
    clock.cancel();
  };
}

/** Puts each non-zero digit on a reel that turns up from 0; the rest stays still. */
function Odometer({ value }: { value: string }) {
  return (
    <>
      {[...value].map((char, index) => {
        if (!/[1-9]/.test(char)) return char;

        const digit = Number(char);
        const reelTo = { '--reel-to': `${(-100 * digit) / (digit + 1)}%` } as CSSProperties;
        return (
          <span key={index} className={styles.wheel}>
            <span className={styles.sizer}>{char}</span>
            <span className={styles.reel} style={reelTo}>
              {Array.from({ length: digit + 1 }, (_, n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
          </span>
        );
      })}
    </>
  );
}

/**
 * One layer per visible character. Each layer holds the whole value with the
 * other characters transparent, so the character keeps its kerned position
 * (split into separate boxes, "NAAC" would lose its kerning and jump at handover).
 */
function Reveal({ value }: { value: string }) {
  const chars = [...value];
  const last = chars.join('').trimEnd().length - 1;
  let order = 0;

  return (
    <>
      {chars.map(
        (char, index) =>
          char.trim() && (
            <span
              key={index}
              className={cx(styles.letter, index === last && styles.letterLast)}
              style={{ '--order': order++ } as CSSProperties}
            >
              <span className={styles.clear}>{chars.slice(0, index).join('')}</span>
              {char}
              <span className={styles.clear}>{chars.slice(index + 1).join('')}</span>
            </span>
          ),
      )}
    </>
  );
}
