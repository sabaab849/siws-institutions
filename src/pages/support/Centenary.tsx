import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';
import { site } from '../../data/site';
import { society } from '../../data/society';
import styles from './Support.module.css';

export function Centenary() {
  return (
    <>
      <PageHero
        eyebrow="Road to the Centenary"
        title={society.centenary.headline}
        intro={society.centenary.intro}
      />

      <PageSection eyebrow="Centenary goals" title="What the Next Decade Is For">
        <ul role="list" className={styles.goals}>
          {society.centenary.goals.map((goal) => (
            <li key={goal.name} className={styles.goal}>
              <h3 className={styles.goalName}>{goal.name}</h3>
              <p className={styles.goalText}>{goal.text}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection eyebrow="Share your memory" title="For the Centenary Archive" tone="bg">
        <Prose>
          <p>
            Share your SIWS memory — a photograph, a teacher you remember, a class reunion — for the
            Centenary archive.
          </p>
        </Prose>
        <ButtonLink
          href={`mailto:${site.email}?subject=${encodeURIComponent('My SIWS memory, for the Centenary archive')}`}
          size="lg"
        >
          Share Your Memory
        </ButtonLink>
      </PageSection>
    </>
  );
}
