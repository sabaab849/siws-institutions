import { MilestoneSelector } from '../../components/content/MilestoneSelector/MilestoneSelector';
import { Container } from '../../components/layout/Container/Container';
import { Badge } from '../../components/ui/Badge/Badge';
import { SectionTitle } from '../../components/ui/SectionTitle/SectionTitle';
import { story } from '../../data/story';
import { cx } from '../../utils/cx';
import { withLineBreaks } from '../../utils/withLineBreaks';
import styles from './OurStory.module.css';

export function OurStory() {
  return (
    <section id="about" className={styles.story} aria-labelledby="story-title">
      <span className={cx(styles.blob, styles.blobTopLeft)} aria-hidden="true" />
      <span className={cx(styles.blob, styles.blobBottomRight)} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Badge variant="lavender">{story.eyebrow}</Badge>
            <SectionTitle id="story-title" leading="tight">
              {withLineBreaks(story.titleLines)}
            </SectionTitle>
          </div>
          <p className={styles.lead}>{story.intro}</p>
        </div>

        <MilestoneSelector label={story.milestonesLabel} milestones={story.milestones} />
      </Container>
    </section>
  );
}
