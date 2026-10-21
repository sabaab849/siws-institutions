import { Link } from 'react-router-dom';
import { EventBento } from '../../components/content/EventBento/EventBento';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { eventCategories } from '../../data/events';
import styles from './Activities.module.css';

/** How many of a category's events the overview shows before linking on. */
const PREVIEW = 6;

export function ActivitiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Activities"
        title="Activities & Events"
        intro="Education is the Society's first work, but not its only one. These are the days its four sections keep through the year — festivals and national days, competitions and sport, and the work that goes on beyond the classroom."
      >
        <nav className={styles.jump} aria-label="Event categories">
          {eventCategories.map((category) => (
            <Link key={category.slug} className={styles.chip} to={`/activities/${category.slug}`}>
              {category.title}
            </Link>
          ))}
        </nav>
      </PageHero>

      {eventCategories.map((category, index) => (
        <PageSection
          key={category.slug}
          tone={index % 2 === 0 ? 'default' : 'bg'}
          eyebrow="Activities"
          title={<Link to={`/activities/${category.slug}`}>{category.title}</Link>}
          lead={category.intro}
        >
          <EventBento events={category.events.slice(0, PREVIEW)} />
          {category.events.length > PREVIEW ? (
            <Link className={styles.more} to={`/activities/${category.slug}`}>
              All {category.events.length} in {category.title}
            </Link>
          ) : null}
        </PageSection>
      ))}
    </>
  );
}
