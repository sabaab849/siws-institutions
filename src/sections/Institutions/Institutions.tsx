import { useState, type CSSProperties } from 'react';
import {
  InstitutionPreviewCard,
  type PreviewCardItem,
} from '../../components/content/InstitutionPreviewCard/InstitutionPreviewCard';
import { InstitutionRow } from '../../components/content/InstitutionRow/InstitutionRow';
import { Container } from '../../components/layout/Container/Container';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { institutionHeroes } from '../../data/institutionHeroes';
import { institutions } from '../../data/institutions';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { withLineBreaks } from '../../utils/withLineBreaks';
import styles from './Institutions.module.css';

/**
 * Where the preview card is shown (matches Institutions.module.css). Below it
 * each row carries its own photograph, so a touch screen downloads thumbnails
 * rather than six full-size pictures.
 */
const PREVIEW_QUERY = '(min-width: 1024px)';

/** The card's content, taken from what the Society already publishes. */
const PREVIEW_ITEMS: PreviewCardItem[] = institutions.items.map((item) => {
  const hero = institutionHeroes[item.slug];
  return {
    key: item.index,
    tag: item.category ?? hero?.type,
    stats: item.details,
    established: hero?.established,
    visual: item.visual,
  };
});

/**
 * The path through the Society's institutions: the list on the right, and the
 * institution under the cursor held in the card on the left. With no cursor on
 * the list it rests on the first institution.
 */
export function Institutions() {
  const [sectionRef, inView] = useInViewOnce<HTMLElement>();
  const [active, setActive] = useState(0);
  const showCard = useMediaQuery(PREVIEW_QUERY);

  return (
    <section
      ref={sectionRef}
      id="institutions"
      className={styles.institutions}
      aria-labelledby="institutions-title"
      data-state={inView ? 'shown' : 'hidden'}
    >
      <Container className={styles.inner}>
        {showCard && (
          <div className={styles.visual}>
            <InstitutionPreviewCard
              className={styles.card}
              items={PREVIEW_ITEMS}
              active={active}
            />
          </div>
        )}

        <div className={styles.column}>
          <div className={styles.introTop}>
            <Eyebrow>{institutions.eyebrow}</Eyebrow>
            <ButtonLink to="/institutions" variant="link">
              View all institutions
            </ButtonLink>
          </div>

          <div className={styles.intro}>
            <SectionTitle id="institutions-title" leading="tight">
              {withLineBreaks(institutions.titleLines)}
            </SectionTitle>
            <p className={styles.lead}>{institutions.intro}</p>
          </div>

          <ol
            role="list"
            className={styles.list}
            // Off the list, the card returns to the first institution
            onPointerLeave={() => setActive(0)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(0);
            }}
          >
            {institutions.items.map((item, index) => (
              <InstitutionRow
                key={item.index}
                {...item}
                active={index === active}
                onActivate={() => setActive(index)}
                style={{ '--row': index } as CSSProperties}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
