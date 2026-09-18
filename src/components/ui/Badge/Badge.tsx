import type { ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import styles from './Badge.module.css';

type BadgeProps = {
  children: ReactNode;
  /** `lavender`: tinted pill. `tag`: bordered category tag. */
  variant: 'lavender' | 'tag';
  as?: 'span' | 'p' | 'h3';
  className?: string;
};

/** Short uppercase label in a tinted pill or bordered tag. */
export function Badge({ children, variant, as: Tag = 'span', className }: BadgeProps) {
  return <Tag className={cx(styles.badge, styles[variant], className)}>{children}</Tag>;
}
