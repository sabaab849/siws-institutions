import { cx } from '../../../utils/cx';
import type { InstitutionVisual } from '../../../data/institutions';
import styles from './InstitutionPreviewCard.module.css';

export type PreviewCardItem = {
  /** Shown as the tag: "Degree College", "Kindergarten". */
  tag?: string;
  /** What the Society publishes about the institution: campus, board, awards. */
  stats: string;
  /** The year it was founded, where the Society publishes one. */
  established?: string;
  visual: InstitutionVisual;
  key: string;
};

type InstitutionPreviewCardProps = {
  items: PreviewCardItem[];
  /** Index of the institution being shown. */
  active: number;
  className?: string;
};

/**
 * The card beside the list: the photograph of the institution under the
 * cursor, with its tag and its published details over the foot of the frame.
 * Every photograph is laid in the same frame and faded between, so switching
 * costs nothing after the first paint.
 *
 * It mirrors what the list already says, so it is hidden from screen readers.
 */
export function InstitutionPreviewCard({ items, active, className }: InstitutionPreviewCardProps) {
  const shown = items[active] ?? items[0];

  return (
    <figure className={cx(styles.card, className)} aria-hidden="true">
      <span className={styles.frame}>
        {items.map((item, index) => (
          <span
            key={item.key}
            className={cx(styles.layer, index === active && styles.layerActive)}
          >
            {item.visual.kind === 'photo' ? (
              <img className={styles.photo} src={item.visual.src} alt="" decoding="async" />
            ) : (
              <span className={styles.typeTile}>
                {item.visual.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            )}
          </span>
        ))}
      </span>

      <figcaption className={styles.overlay}>
        {shown.tag ? <span className={styles.tag}>{shown.tag}</span> : null}
        <span className={styles.stats}>{shown.stats}</span>
        {shown.established ? (
          <span className={styles.established}>Est. {shown.established}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
