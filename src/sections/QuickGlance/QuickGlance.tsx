import { AnnouncementItem } from '../../components/content/AnnouncementItem/AnnouncementItem';
import { StatCard } from '../../components/content/StatCard/StatCard';
import { Container } from '../../components/layout/Container/Container';
import { Button } from '../../components/ui/Button/Button';
import { Eyebrow } from '../../components/ui/Eyebrow/Eyebrow';
import { glance } from '../../data/glance';
import { useInViewOnce } from '../../hooks/useInViewOnce';
import styles from './QuickGlance.module.css';

/** Cards enter in reading order: across the first row, then the second. */
const CARD_STAGGER_MS = 115;

export function QuickGlance() {
  const [cardsRef, cardsInView] = useInViewOnce<HTMLUListElement>();

  return (
    <section className={styles.glance} aria-labelledby="glance-title">
      <Container className={styles.inner}>
        <div className={styles.overview}>
          <div className={styles.header}>
            <Eyebrow variant="spaced">{glance.eyebrow}</Eyebrow>
            <h2 id="glance-title" className={styles.title}>
              {glance.title}
            </h2>
          </div>
          <ul ref={cardsRef} role="list" className={styles.cards}>
            {glance.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                revealed={cardsInView}
                revealDelay={index * CARD_STAGGER_MS}
              />
            ))}
          </ul>
        </div>

        <div className={styles.announcements}>
          <div className={styles.announcementsHeader}>
            <Eyebrow as="h3" variant="spaced">
              {glance.announcementsLabel}
            </Eyebrow>
            <Button variant="accent" href={glance.viewAllHref}>
              View all
            </Button>
          </div>
          <ul role="list" className={styles.list}>
            {glance.announcements.map((item) => (
              <AnnouncementItem key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
