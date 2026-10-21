import { useMemo, useState } from 'react';
import { PageHero } from '../components/layout/PageHero/PageHero';
import { PageSection } from '../components/layout/PageSection/PageSection';
import { galleryCategories, galleryItems, type GalleryCategory } from '../data/gallery';
import styles from './Gallery.module.css';

type Filter = GalleryCategory | 'All';

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');

  // Only offer a filter for categories that actually have photographs.
  const filters = useMemo<Filter[]>(
    () => ['All', ...galleryCategories.filter((c) => galleryItems.some((i) => i.category === c))],
    [],
  );
  const items = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo Gallery"
        intro="Photographs from the Society's institutions: its campuses, classrooms, celebrations and the moments in between."
      />

      <PageSection>
        <div className={styles.filters} role="group" aria-label="Filter photographs by category">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className={styles.filter}
              data-active={filter === name || undefined}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <ul role="list" className={styles.grid}>
          {items.map((item) => (
            <li key={item.src} className={styles.item} data-tall={item.tall || undefined}>
              <figure className={styles.figure}>
                <img
                  className={styles.image}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className={styles.caption}>
                  <span className={styles.category}>{item.category}</span>
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
