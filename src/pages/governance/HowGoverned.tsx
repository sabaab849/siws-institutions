import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { society } from '../../data/society';
import styles from './Governance.module.css';

export function HowGoverned() {
  return (
    <>
      <PageHero eyebrow="Governance" title="How the Society Is Governed" />

      <PageSection className={styles.governanceSection}>
        <dl className={styles.governance}>
          {society.governance.map((item, index) => (
            <div key={item.term} className={styles.governanceItem}>
              <dt className={styles.governanceTerm}>
                {/* The count is for the eye; the term alone is read out */}
                <span className={styles.governanceIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.term}
              </dt>
              <dd className={styles.governanceText}>{item.text}</dd>
            </div>
          ))}
        </dl>
      </PageSection>
    </>
  );
}
