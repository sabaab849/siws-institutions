import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import portrait from '../../assets/photos/people/radhakrishnan.webp';
import { society } from '../../data/society';
import styles from './Governance.module.css';

export function Chairman() {
  return (
    <>
      <PageHero eyebrow="Governance" title="From the Chairman" />

      {/* The letter at the left, the Chairman's photograph beside it */}
      <PageSection className={styles.chairmanBand}>
        <div className={styles.chairmanLayout}>
          <figure className={styles.chairman}>
            <blockquote className={styles.chairmanQuote}>
              {society.chairman.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </blockquote>
            <figcaption className={styles.chairmanName}>
              {society.chairman.name}
              <span className={styles.chairmanRole}>{society.chairman.role}</span>
            </figcaption>
          </figure>

          <img
            className={styles.chairmanPhoto}
            src={portrait}
            width={254}
            height={294}
            alt={`${society.chairman.name}, ${society.chairman.role} of the Society`}
          />
        </div>
      </PageSection>
    </>
  );
}
