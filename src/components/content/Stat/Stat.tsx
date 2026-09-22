import type { StatEffect } from '../../../data/hero';
import { cx } from '../../../utils/cx';
import { AnimatedStatValue } from '../AnimatedStatValue/AnimatedStatValue';
import styles from './Stat.module.css';

type StatProps = {
  value: string;
  label: string;
  /** Word set beside the value, e.g. "Years". */
  unit?: string;
  /** `hero`: compact figure. `impact`: large figure with a rule. */
  variant: 'hero' | 'impact';
  /** Entrance for the value, played once `active` turns true. */
  motion?: { effect: StatEffect; active: boolean };
  className?: string;
};

/**
 * A figure with its label. Render inside a `<dl>`: the label is the term and the
 * value its description, with the value shown first visually.
 */
export function Stat({ value, label, unit, variant, motion, className }: StatProps) {
  return (
    <div className={cx(styles.stat, styles[variant], className)}>
      <dt className={styles.label}>{label}</dt>
      <dd className={styles.value}>
        <span className={styles.number}>
          {motion ? <AnimatedStatValue value={value} {...motion} /> : value}
        </span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </dd>
    </div>
  );
}
