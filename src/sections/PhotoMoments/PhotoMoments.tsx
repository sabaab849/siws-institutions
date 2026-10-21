import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { galleryItems } from '../../data/gallery';
import styles from './PhotoMoments.module.css';

/** A short, curated run of photographs; the gallery holds the rest. */
const PREVIEW = galleryItems.filter((item) => item.category !== 'Institutions').slice(0, 5);

export function PhotoMoments() {
  return (
    <PageSection
      tone="bg"
      eyebrow="Gallery"
      title="Moments From SIWS"
      lead="Classrooms, celebrations and the days in between, across the Society's campuses."
      action={
        <ButtonLink to="/gallery" variant="link">
          View gallery
        </ButtonLink>
      }
    >
      <ul role="list" className={styles.grid}>
        {PREVIEW.map((item, index) => (
          <li key={item.src} className={styles.item} data-lead={index === 0 || undefined}>
            <img
              className={styles.image}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
