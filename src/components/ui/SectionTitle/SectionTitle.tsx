import type { ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  children: ReactNode;
  id?: string;
  /** `lg`: 48px. `xl`: 56px (desktop sizes). */
  size?: 'lg' | 'xl';
  /** `tight`: 1.15 for multi-line titles. `normal`: font default. */
  leading?: 'normal' | 'tight';
  tone?: 'default' | 'inverse';
  className?: string;
};

/** Bold section heading (`<h2>`). */
export function SectionTitle({
  children,
  id,
  size = 'lg',
  leading = 'normal',
  tone = 'default',
  className,
}: SectionTitleProps) {
  return (
    <h2 id={id} className={cx(styles.title, styles[size], styles[leading], styles[tone], className)}>
      {children}
    </h2>
  );
}
