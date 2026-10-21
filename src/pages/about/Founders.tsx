import { ProfileGrid } from '../../components/content/ProfileGrid/ProfileGrid';
import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { founders } from '../../data/people';

export function Founders() {
  return (
    <>
      <PageHero
        eyebrow="About the Society"
        title="Founders and Legacy"
        intro="Three men shaped SIWS: one founded the Society and its school, and two brothers gave it a college."
      />

      <PageSection>
        <ProfileGrid people={founders} columns="wide" headingLevel={2} />
      </PageSection>
    </>
  );
}
