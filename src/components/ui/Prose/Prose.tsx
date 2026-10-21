import type { ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import styles from './Prose.module.css';

type ProseProps = {
  children: ReactNode;
  /** `lead`: slightly larger, for an opening passage. */
  size?: 'default' | 'lead';
  className?: string;
};

/** Running text at a comfortable measure. */
export function Prose({ children, size = 'default', className }: ProseProps) {
  return <div className={cx(styles.prose, styles[size], className)}>{children}</div>;
}
