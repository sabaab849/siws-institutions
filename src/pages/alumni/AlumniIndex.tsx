import arrowUpRight from '../../assets/icons/arrow-up-right-xs.svg';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Icon } from '../../components/ui/Icon/Icon';
import { alumni } from '../../data/alumni';
import styles from './Alumni.module.css';

export function AlumniIndex() {
  return (
    <>
      <PageHero eyebrow="Alumni" title={alumni.headline} intro={alumni.intro} />

      <PageSection
        eyebrow="The Alumni Association"
        title="What the Association Sets Out to Do"
        lead="Its objectives, as the Association states them."
      >
        <ol role="list" className={styles.objectives}>
          {alumni.objectives.map((objective, index) => (
            <li key={objective} className={styles.objective}>
              <span className={styles.objectiveIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={styles.objectiveText}>{objective}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        tone="bg"
        eyebrow="Take part"
        title="Ways to Stay With SIWS"
        lead="The Society is opening each of these in turn; the College Association is running already."
      >
        <ul role="list" className={styles.ways}>
          {alumni.ways.map((way) => (
            <li key={way.title} className={styles.way}>
              <h3 className={styles.wayTitle}>{way.title}</h3>
              <p className={styles.wayText}>{way.text}</p>
              {way.href ? (
                <a
                  className={styles.wayLink}
                  href={way.href}
                  target={way.external ? '_blank' : undefined}
                  rel={way.external ? 'noreferrer' : undefined}
                >
                  Visit the association
                  <Icon src={arrowUpRight} size={14} />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
