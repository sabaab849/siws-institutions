import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { giving } from '../../data/giving';
import styles from './Support.module.css';

export function SupportSiws() {
  return (
    <>
      <PageHero
        eyebrow="Support SIWS"
        title={giving.support.headline}
        intro={giving.support.intro}
      />

      <PageSection eyebrow="Ways to give" title="Six Ways to Take Part">
        <ol role="list" className={styles.ways}>
          {giving.support.ways.map((way, index) => (
            <li key={way.name} className={styles.way}>
              <span className={styles.wayIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.wayName}>{way.name}</h3>
              <p className={styles.wayText}>{way.text}</p>
            </li>
          ))}
        </ol>
      </PageSection>
    </>
  );
}
