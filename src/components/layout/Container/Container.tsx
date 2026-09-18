import type { HTMLAttributes } from 'react';
import { cx } from '../../../utils/cx';
import styles from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

/** Centres content at the 1280px content width with responsive side gutters. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={cx(styles.container, className)} {...props} />;
}
