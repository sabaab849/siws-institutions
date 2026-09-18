import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

type CountUpOptions = {
  /** Wait before counting, in ms. */
  delay?: number;
  duration?: number;
  decimals?: number;
};

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

/**
 * Counts from 0 to `target` once `active` turns true, rounded to `decimals`.
 * Stops as soon as the rounded value reaches the target. Returns the target
 * straight away when motion is reduced.
 */
export function useCountUp(
  target: number,
  active: boolean,
  { delay = 0, duration = 900, decimals = 0 }: CountUpOptions = {},
): number {
  const [current, setCurrent] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (!active || prefersReducedMotion()) {
      return;
    }

    const factor = 10 ** decimals;
    const startTime = performance.now() + delay;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
      const next = Math.round(easeOutQuad(progress) * target * factor) / factor;
      setCurrent(next);
      if (next < target) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, delay, duration, decimals]);

  return current;
}
