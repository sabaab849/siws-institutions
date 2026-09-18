import type { ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import styles from './Eyebrow.module.css';

type EyebrowProps = {
  children: ReactNode;
  /**
   * `section`: 12px label above section headings.
   * `spaced`: 12px label with wide tracking (Quick Glance).
   * `card`: 11px label on cards.
   * `overline`: wide-tracked hero label.
   */
  variant?: 'section' | 'spaced' | 'card' | 'overline';
  tone?: 'brand' | 'muted';
  as?: 'p' | 'span' | 'h2' | 'h3';
  className?: string;
};

/** Small uppercase label that sits above a heading. */
export function Eyebrow({
  children,
  variant = 'section',
  tone = 'brand',
  as: Tag = 'p',
  className,
}: EyebrowProps) {
  return (
    <Tag className={cx(styles.eyebrow, styles[variant], styles[tone], className)}>{children}</Tag>
  );
}
