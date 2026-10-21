import { useId, type ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import { Container } from '../Container/Container';
import { SectionHeader } from '../../ui/SectionHeader/SectionHeader';
import styles from './PageSection.module.css';

type PageSectionProps = {
  /** Anchor for links into the middle of a page, e.g. `/about/our-story#trustees`. */
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  /** Sentence under the title, before the section's content. */
  lead?: ReactNode;
  /** A link out of the section, set beside the title rather than below the content. */
  action?: ReactNode;
  tone?: 'default' | 'bg' | 'warm' | 'brand';
  children?: ReactNode;
  className?: string;
};

/** A titled band of page content, on one of the Society's four backgrounds. */
export function PageSection({
  id,
  eyebrow,
  title,
  lead,
  action,
  tone = 'default',
  children,
  className,
}: PageSectionProps) {
  const titleId = useId();
  const inverse = tone === 'brand';

  return (
    <section
      id={id}
      className={cx(styles.section, styles[tone], className)}
      data-tone={tone}
      aria-labelledby={title ? titleId : undefined}
    >
      <Container className={styles.inner}>
        {title ? (
          <div className={styles.headRow}>
            <SectionHeader
              className={styles.head}
              eyebrow={eyebrow ?? ''}
              title={title}
              titleId={titleId}
              tone={inverse ? 'inverse' : 'default'}
              eyebrowTone={inverse ? 'muted' : 'brand'}
            />
            {action ? <div className={styles.action}>{action}</div> : null}
            {lead ? <p className={styles.lead}>{lead}</p> : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
