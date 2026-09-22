import type { InstitutionVisual as Visual } from '../../../data/institutions';
import { cx } from '../../../utils/cx';
import styles from './InstitutionVisual.module.css';

type InstitutionVisualProps = {
  visual: Visual;
  /** `thumb`: the small row thumbnail file. `full`: the hover-preview size. */
  size?: 'thumb' | 'full';
  className?: string;
};

/**
 * Fills its box with an institution's photo, or with an oversized, low-contrast
 * type composition (scaled to the box) when there is no photo. Decorative: the
 * row it belongs to carries the name, so there is no alt text.
 */
export function InstitutionVisual({ visual, size = 'full', className }: InstitutionVisualProps) {
  if (visual.kind === 'photo') {
    return (
      <img
        className={cx(styles.visual, styles.photo, className)}
        src={size === 'thumb' ? visual.thumb : visual.src}
        alt=""
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <span className={cx(styles.visual, styles.type, className)}>
      <span className={styles.words}>
        {visual.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </span>
    </span>
  );
}
