import type { ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  eyebrowTone?: 'brand' | 'muted';
  tone?: 'default' | 'inverse';
  className?: string;
};

/** Eyebrow label stacked above a section title. */
export function SectionHeader({
  eyebrow,
  title,
  titleId,
  eyebrowTone = 'brand',
  tone = 'default',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cx(styles.header, className)}>
      <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      <SectionTitle id={titleId} tone={tone}>
        {title}
      </SectionTitle>
    </div>
  );
}
