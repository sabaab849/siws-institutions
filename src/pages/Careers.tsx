import { PageHero } from '../components/layout/PageHero/PageHero';
import { PageSection } from '../components/layout/PageSection/PageSection';
import { careers } from '../data/careers';
import styles from './Careers.module.css';

export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Careers at SIWS"
        intro="Teaching and administrative roles across the Society's institutions in Mumbai."
      />

      <PageSection eyebrow="Openings" title="Current Opportunities">
        {careers.openings.length ? (
          <>
            <ul role="list" className={styles.openings}>
              {careers.openings.map((opening) => (
                <li key={opening.position} className={styles.opening}>
                  <h3 className={styles.position}>{opening.position}</h3>
                  <p className={styles.meta}>
                    {[opening.institution, opening.location, opening.employmentType].join(' · ')}
                  </p>
                  <p className={styles.description}>{opening.description}</p>
                  <a
                    className={styles.apply}
                    href={opening.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply on the college site
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.source}>
              Vacancies as advertised on the{' '}
              <a href={careers.source.url} target="_blank" rel="noreferrer">
                {careers.source.label}
              </a>
              .
            </p>
          </>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No current opportunities</p>
            <p className={styles.emptyText}>Please check back for future openings.</p>
          </div>
        )}
      </PageSection>
    </>
  );
}
