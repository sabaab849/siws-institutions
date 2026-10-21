import { Timeline } from '../../components/content/Timeline/Timeline';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { milestones } from '../../data/society';

export function Milestones() {
  return (
    <>
      <PageHero
        eyebrow="About the Society"
        title="Milestones"
        intro="Ninety years in one line: a garage school in 1934, a college in 1980, autonomy in 2023."
      />

      <PageSection>
        <Timeline entries={milestones} />
      </PageSection>
    </>
  );
}
