import type { CSSProperties } from 'react';
import { BandArcs } from '../../components/ui/BandArcs/BandArcs';
import { Container } from '../../components/layout/Container/Container';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';
import { giving } from '../../data/giving';
import { useCountUp } from '../../hooks/useCountUp';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import styles from './Support.module.css';

type FigureProps = {
  value: string;
  label: string;
  /** Position in the row: each figure arrives a beat after the one before it. */
  index: number;
  active: boolean;
};

/**
 * One figure on the band. A plain number counts up the first time the band is
 * seen; anything worded is left exactly as it is written.
 */
function Figure({ value, label, index, active }: FigureProps) {
  const target = /^\d+$/.test(value) ? Number(value) : null;
  const counted = useCountUp(target ?? 0, active && target !== null, { delay: index * 90 });

  return (
    <li
      className={styles.figure}
      style={{ '--figure-delay': `${index * 90}ms` } as CSSProperties}
    >
      <span className={styles.figureValue}>{target === null ? value : counted}</span>
      <span className={styles.figureLabel}>{label}</span>
    </li>
  );
}

export function Scholarships() {
  const [bandRef, bandInView] = useInViewOnce<HTMLElement>();

  return (
    <>
      <PageHero
        eyebrow="Scholarships and Endowments"
        title="A Hundred and Fifty Funds"
        intro={giving.scholarships.intro}
      />

      {/* The figures take the Society's blue, with the accent arcs off the edge */}
      <section className={styles.figuresBand} ref={bandRef} data-in-view={bandInView || undefined}>
        <BandArcs className={styles.figuresArcs} />
        <Container>
          <ul role="list" className={styles.figures}>
            {giving.scholarships.figures.map((figure, index) => (
              <Figure
                key={figure.label}
                value={figure.value}
                label={figure.label}
                index={index}
                active={bandInView}
              />
            ))}
          </ul>
        </Container>
      </section>

      <PageSection className={styles.opening}>
        <Prose>
          {giving.scholarships.detail.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Prose>
        {/* The register itself is published on the School's site, so link to it */}
        <Prose>
          <p>
            The full register names every fund and the purpose its donor chose, grouped by merit,
            open and Arts Centre awards.
          </p>
        </Prose>
        <ButtonLink href="https://www.siwsschool.edu.in/scholarships" variant="link">
          The Full Register of Funds
        </ButtonLink>
      </PageSection>

      <PageSection tone="bg">
        <ButtonLink to="/support-siws" size="lg">
          Fund a Scholarship
        </ButtonLink>
      </PageSection>
    </>
  );
}
