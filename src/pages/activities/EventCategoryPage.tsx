import { Link, Navigate, useParams } from 'react-router-dom';
import { EventBento } from '../../components/content/EventBento/EventBento';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { eventCategories, findEventCategory } from '../../data/events';
import styles from './Activities.module.css';

export function EventCategoryPage() {
  const { slug } = useParams();
  const category = findEventCategory(slug);

  if (!category) return <Navigate to="/activities" replace />;

  return (
    <>
      <PageHero eyebrow="Activities" title={category.title} intro={category.intro}>
        <nav className={styles.jump} aria-label="Event categories">
          {eventCategories.map((item) => {
            const current = item.slug === category.slug;
            return (
              <Link
                key={item.slug}
                className={styles.chip}
                to={`/activities/${item.slug}`}
                data-active={current || undefined}
                aria-current={current ? 'page' : undefined}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </PageHero>

      <PageSection>
        <EventBento events={category.events} />
      </PageSection>
    </>
  );
}
