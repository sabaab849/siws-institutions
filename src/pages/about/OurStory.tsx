import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Prose } from '../../components/ui/Prose/Prose';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Banner } from '../../components/layout/Banner/Banner';
import { heritage } from '../../data/heritage';
import { society } from '../../data/society';
import styles from './About.module.css';

export function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="About the Society"
        title="Our Story"
        intro="From four students in a garage at Shivaji Park to a family of institutions that takes a child from Junior KG to a doctorate."
      />

      <PageSection>
        <Prose size="lead">
          {society.story.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Prose>
      </PageSection>

      <Banner
        eyebrow="Our Motto"
        title={society.motto.sanskrit}
        titleLang="sa-Latn"
        size="statement"
        quoted
        lead={society.motto.translation}
        footnote={heritage.label}
      />

      <PageSection tone="bg">
        <div className={styles.nextLinks}>
          <ButtonLink to="/about/founders" variant="quiet">
            Founders and Legacy
          </ButtonLink>
          <ButtonLink to="/about/milestones" variant="quiet">
            Milestones
          </ButtonLink>
          <ButtonLink to="/about/vision-mission-values" variant="quiet">
            Vision, Mission and Values
          </ButtonLink>
        </div>
      </PageSection>
    </>
  );
}
