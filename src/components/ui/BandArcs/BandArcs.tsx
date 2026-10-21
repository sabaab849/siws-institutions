import { cx } from '../../../utils/cx';
import styles from './BandArcs.module.css';

type BandArcsProps = {
  /** `warm`: the accent reads stronger on a light band, so it is held back. */
  tone?: 'brand' | 'warm';
  className?: string;
};

/**
 * The accent arcs that mark a full-width band: they open out of its right
 * edge, as knowledge passed on. Decorative, so they carry no label.
 */
export function BandArcs({ tone = 'brand', className }: BandArcsProps) {
  return (
    <span className={cx(styles.arcs, styles[tone], className)} aria-hidden="true">
      <svg viewBox="0 0 200 400" focusable="false">
        <path d="M200 130A70 70 0 0 0 200 270" opacity="0.55" />
        <path d="M200 80A120 120 0 0 0 200 320" opacity="0.4" />
        <path d="M200 30A170 170 0 0 0 200 370" opacity="0.28" />
        <path d="M200 -20A220 220 0 0 0 200 420" opacity="0.18" />
        <circle cx="200" cy="200" r="9" className={styles.core} />
      </svg>
    </span>
  );
}
