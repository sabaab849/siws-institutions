import { useState, type CSSProperties } from 'react';
import { useCountUp } from '../../../hooks/useCountUp';
import { cx } from '../../../utils/cx';
import { prefersReducedMotion } from '../../../utils/motion';
import styles from './StatCard.module.css';

type StatCardProps = {
  label: string;
  value: string;
  description: string;
  /** Short text in the orange corner badge. */
  badge: string;
  /** Badge corner radii (top-left, top-right, bottom-right, bottom-left), as in Figma. */
  badgeShape: string;
  /** Hidden until true, then the entrance plays once. */
  revealed: boolean;
  /** Entrance delay in ms, used to stagger a grid of cards. */
  revealDelay: number;
};

/**
 * Quick Glance figure card. Render inside a list.
 * Numeric values ("90+", "3.15", "4K+") count up on entrance; other values fade up.
 */
export function StatCard({
  label,
  value,
  description,
  badge,
  badgeShape,
  revealed,
  revealDelay,
}: StatCardProps) {
  // Hover effects wait until the entrance has finished; with reduced motion there is none.
  const [entered, setEntered] = useState(prefersReducedMotion);
  const state = !revealed ? 'hidden' : entered ? 'entered' : 'entering';
  const count = parseCount(value);

  return (
    <li
      className={styles.card}
      data-state={state}
      style={{ '--reveal-delay': `${revealDelay}ms` } as CSSProperties}
      onAnimationEnd={(event) => {
        // Ignore the badge and value animations bubbling up.
        if (event.target === event.currentTarget) setEntered(true);
      }}
    >
      <div className={styles.top}>
        <h3 className={styles.label}>{label}</h3>
        <span className={styles.badge} style={{ borderRadius: badgeShape }} aria-hidden="true">
          {badge}
        </span>
      </div>
      {count ? (
        <CountUpValue value={value} count={count} active={revealed} delay={revealDelay} />
      ) : (
        <p className={cx(styles.value, styles.valueReveal)}>{value}</p>
      )}
      <p className={styles.description}>{description}</p>
    </li>
  );
}

type Count = {
  target: number;
  decimals: number;
  /** Text shown after the number while counting, e.g. "K". */
  unit: string;
};

/** Reads "90+", "3.15" or "4K+" as a number to count to. Returns null for text such as "Free". */
function parseCount(value: string): Count | null {
  const match = /^(\d+(?:\.(\d+))?)(\D*)$/.exec(value);
  if (!match) return null;
  return {
    target: Number(match[1]),
    decimals: match[2]?.length ?? 0,
    unit: match[3].replace(/\+$/, ''),
  };
}

type CountUpValueProps = {
  value: string;
  count: Count;
  active: boolean;
  delay: number;
};

function CountUpValue({ value, count, active, delay }: CountUpValueProps) {
  const current = useCountUp(count.target, active, { delay, decimals: count.decimals });

  if (current === count.target) {
    return <p className={styles.value}>{value}</p>;
  }

  // Steps read "0", "1K", "2K"; the "+" arrives with the final value ("4K+").
  const number = current.toFixed(count.decimals);
  const text = current === 0 ? number : `${number}${count.unit}`;

  return (
    <p className={styles.value}>
      <span aria-hidden="true">{text}</span>
      <span className={styles.visuallyHidden}>{value}</span>
    </p>
  );
}
