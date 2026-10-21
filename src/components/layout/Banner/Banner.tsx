import { useId, type ReactNode } from 'react';
import { cx } from '../../../utils/cx';
import { BandArcs } from '../../ui/BandArcs/BandArcs';
import { Container } from '../Container/Container';
import styles from './Banner.module.css';

type BannerProps = {
  /** Anchor for links into the band, e.g. `/about/vision-mission-values#vision`. */
  id?: string;
  /** `brand`: the Society's blue. `warm`: the light band. */
  tone?: 'brand' | 'warm';
  /** The label at the head of the band, beside the accent dash. */
  eyebrow: string;
  title: ReactNode;
  /**
   * `heading`: a short title, at section-title size.
   * `statement`: a few words that carry the band, such as the motto.
   * `passage`: a sentence or two, held at reading size.
   */
  size?: 'heading' | 'statement' | 'passage';
  /** Set where the title is not English, e.g. `sa-Latn` for the motto. */
  titleLang?: string;
  /** Sets the title in quotation marks drawn in the accent. */
  quoted?: boolean;
  /** The line under the rule. */
  lead?: ReactNode;
  /** The quietest line, at the foot of the band. */
  footnote?: ReactNode;
  /** Buttons or links, under the lead. */
  children?: ReactNode;
  className?: string;
};

/**
 * A full-width band that carries one thought: a label, the thought itself, and
 * a line of support under a rule. The dash, the rule and the arcs running off
 * the right edge are drawn in the Society's accent, so a band reads as more
 * than one flat field of colour.
 */
export function Banner({
  id,
  tone = 'brand',
  eyebrow,
  title,
  size = 'heading',
  titleLang,
  quoted,
  lead,
  footnote,
  children,
  className,
}: BannerProps) {
  const titleId = useId();

  return (
    <section
      id={id}
      className={cx(styles.banner, styles[tone], className)}
      aria-labelledby={titleId}
    >
      <BandArcs tone={tone} />

      <Container className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.dash} aria-hidden="true" />
          {eyebrow}
        </p>

        <h2 id={titleId} className={cx(styles.title, styles[size])} lang={titleLang}>
          {quoted ? (
            <>
              <span className={styles.quote} aria-hidden="true">
                &ldquo;
              </span>
              {title}
              <span className={styles.quote} aria-hidden="true">
                &rdquo;
              </span>
            </>
          ) : (
            title
          )}
        </h2>

        {/* The rule ties the title to what follows, so it goes where nothing does */}
        {lead || children || footnote ? <span className={styles.rule} aria-hidden="true" /> : null}

        {lead ? <p className={styles.lead}>{lead}</p> : null}
        {children ? <div className={styles.actions}>{children}</div> : null}
        {footnote ? <p className={styles.footnote}>{footnote}</p> : null}
      </Container>
    </section>
  );
}
