import type { CSSProperties } from 'react';
import arrowUpRight from '../../../assets/icons/arrow-up-right.svg';
import type { InstitutionVisual as Visual } from '../../../data/institutions';
import { Icon } from '../../ui/Icon/Icon';
import { InstitutionVisual } from '../InstitutionVisual/InstitutionVisual';
import styles from './InstitutionRow.module.css';

type InstitutionRowProps = {
  index: string;
  name: string;
  /** Short label before the details, e.g. "Degree College". */
  category?: string;
  details: string;
  href: string;
  /** Shown in the row on phones and tablets; desktop uses the shared hover preview. */
  visual: Visual;
  /** Called when the row is hovered or focused, to drive the shared preview. */
  onActivate?: () => void;
  style?: CSSProperties;
};

/** Numbered, linked row in the institutions list. Render inside a list. */
export function InstitutionRow({
  index,
  name,
  category,
  details,
  href,
  visual,
  onActivate,
  style,
}: InstitutionRowProps) {
  return (
    <li style={style}>
      <a className={styles.row} href={href} onPointerEnter={onActivate} onFocus={onActivate}>
        <span className={styles.index}>{index}</span>
        <div className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.meta}>
            {category && (
              <>
                <span className={styles.category}>{category}</span>
                <span className={styles.divider} aria-hidden="true" />
              </>
            )}
            <span className={styles.details}>{details}</span>
          </p>
        </div>
        <span className={styles.thumb} aria-hidden="true">
          <InstitutionVisual visual={visual} size="thumb" className={styles.thumbVisual} />
        </span>
        <span className={styles.arrow}>
          <Icon src={arrowUpRight} size={15} />
        </span>
      </a>
    </li>
  );
}
