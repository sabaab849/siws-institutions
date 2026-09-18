import { ActivityCard } from '../../components/content/ActivityCard/ActivityCard';
import { PressCard } from '../../components/content/PressCard/PressCard';
import { Container } from '../../components/layout/Container/Container';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { inFocus } from '../../data/inFocus';
import styles from './InFocus.module.css';

/** Press coverage above a pair of campus photos. Not part of the Figma file. */
export function InFocus() {
  return (
    <section id="in-focus" className={styles.focus} aria-labelledby="in-focus-title">
      <Container className={styles.inner}>
        <SectionHeader eyebrow={inFocus.eyebrow} title={inFocus.title} titleId="in-focus-title" />

        <div className={styles.grid}>
          <PressCard {...inFocus.press} />
          <div className={styles.photos}>
            {inFocus.photos.map((photo) => (
              <ActivityCard key={photo.title} layout="stacked" {...photo} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
