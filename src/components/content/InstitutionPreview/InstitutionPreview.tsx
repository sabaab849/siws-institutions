import type { CSSProperties, Ref } from 'react';
import type { InstitutionVisual as Visual } from '../../../data/institutions';
import { cx } from '../../../utils/cx';
import { InstitutionVisual } from '../InstitutionVisual/InstitutionVisual';
import styles from './InstitutionPreview.module.css';

type PreviewItem = {
  index: string;
  visual: Visual;
};

type InstitutionPreviewProps = {
  items: PreviewItem[];
  /** Item to show; null once the preview has closed and faded out. */
  active: number | null;
  open: boolean;
  /** Slide from the previous row. False when opening afresh, so it appears in place. */
  follow: boolean;
  /** Offset from the top of the list, in px, that lines the preview up with its row. */
  y: number;
  ref?: Ref<HTMLDivElement>;
  className?: string;
};

/**
 * One hover preview shared by the whole list; the section sizes and places it.
 * Every visual is stacked in the frame so a newly hovered one can fade in over
 * the last while the frame slides to its row. Decorative, so hidden from
 * assistive tech.
 */
export function InstitutionPreview({
  items,
  active,
  open,
  follow,
  y,
  ref,
  className,
}: InstitutionPreviewProps) {
  return (
    <div
      ref={ref}
      className={cx(styles.preview, className)}
      data-open={open || undefined}
      data-follow={follow || undefined}
      aria-hidden="true"
      style={{ '--y': `${y}px` } as CSSProperties}
    >
      <div className={styles.frame}>
        {items.map((item, index) => (
          <div key={item.index} className={styles.layer} data-active={index === active || undefined}>
            <InstitutionVisual visual={item.visual} />
          </div>
        ))}
      </div>
    </div>
  );
}
