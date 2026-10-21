import { Banner } from '../../components/layout/Banner/Banner';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { society } from '../../data/society';
import styles from './About.module.css';

export function VisionMissionValues() {
  return (
    <>
      <PageHero
        eyebrow="About the Society"
        title="Vision, Mission and Values"
        intro="The vision and values are aligned with the school site, so the family speaks with one voice."
      />

      <Banner id="vision" eyebrow="Our Vision" title={society.vision} size="passage" />

      <PageSection id="mission" eyebrow="Our Mission" title="Our Mission">
        <ol role="list" className={styles.mission}>
          {society.mission.map((point, index) => (
            <li key={point.title} className={styles.missionPoint}>
              <span className={styles.missionIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.missionTitle}>{point.title}</h3>
              <p className={styles.missionText}>{point.text}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection id="values" eyebrow="Our Values" title="What It Means at SIWS" tone="bg">
        <ul role="list" className={styles.values}>
          {society.values.map((value) => (
            <li key={value.name} className={styles.value}>
              <h3 className={styles.valueName}>{value.name}</h3>
              <p className={styles.valueText}>{value.text}</p>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
