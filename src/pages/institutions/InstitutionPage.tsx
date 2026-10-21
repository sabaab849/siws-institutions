import { Navigate, useParams } from 'react-router-dom';
import { InstitutionHero } from '../../components/content/InstitutionHero/InstitutionHero';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { InstitutionUnit } from '../../components/content/InstitutionUnit/InstitutionUnit';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Picture } from '../../components/ui/Picture/Picture';
import { institutionHeroes } from '../../data/institutionHeroes';
import { findInstitutionPage } from '../../data/institutionPages';
import styles from './Institutions.module.css';

export function InstitutionPage() {
  const { slug } = useParams();
  const page = findInstitutionPage(slug);

  if (!page) return <Navigate to="/institutions" replace />;

  return (
    <>
      {institutionHeroes[page.slug] ? (
        <InstitutionHero slug={page.slug} />
      ) : (
        <PageHero eyebrow="Institutions" title={page.title} intro={page.intro} />
      )}

      {page.units.length ? (
        <PageSection>
          <div className={styles.units}>
            {page.units.map((unit) => (
              <InstitutionUnit key={unit.name} unit={unit} />
            ))}
          </div>
        </PageSection>
      ) : null}

      {page.highlights?.length ? (
        <PageSection tone="bg" title={page.highlightsTitle}>
          <ul role="list" className={styles.highlights}>
            {page.highlights.map((highlight) => (
              <li key={highlight.title} className={styles.highlight}>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightText}>{highlight.text}</p>
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      {page.gallery?.length ? (
        <PageSection title={page.galleryTitle}>
          <ul role="list" className={styles.gallery}>
            {page.gallery.map((photo) => (
              <li key={photo.src}>
                <figure className={styles.photo}>
                  <span className={styles.photoFrame}>
                    <Picture
                      className={styles.photoImage}
                      src={photo.src}
                      mobile={
                        photo.mobile
                          ? { src: photo.mobile, width: 640, fullWidth: 1024 }
                          : undefined
                      }
                      mobileSizes="(min-width: 640px) 45vw, 100vw"
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <figcaption className={styles.photoCaption}>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}
    </>
  );
}
