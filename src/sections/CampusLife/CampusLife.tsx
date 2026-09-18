import { ActivityCard } from '../../components/content/ActivityCard/ActivityCard';
import { Container } from '../../components/layout/Container/Container';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { campusLife } from '../../data/campusLife';
import styles from './CampusLife.module.css';

export function CampusLife() {
  const { feature, highlights, community } = campusLife;

  return (
    <section id="activities" className={styles.campus} aria-labelledby="activities-title">
      <Container className={styles.inner}>
        <SectionHeader
          eyebrow={campusLife.eyebrow}
          title={campusLife.title}
          titleId="activities-title"
        />

        <div className={styles.grid}>
          <ActivityCard layout="feature" {...feature} />
          <div className={styles.side}>
            <div className={styles.highlights}>
              {highlights.map((item) => (
                <ActivityCard key={item.title} layout="stacked" {...item} />
              ))}
            </div>
            <ActivityCard layout="horizontal" {...community} />
          </div>
        </div>
      </Container>
    </section>
  );
}
