import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { Prose } from '../../components/ui/Prose/Prose';

export function ProminentAlumni() {
  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title="Prominent Alumni"
        intro="Alumni of the Society's institutions whose work SIWS wishes to recognise."
      />

      <PageSection>
        <Prose>
          <p>
            The Society&rsquo;s institutions do not currently publish the names of distinguished
            alumni, so none are shown here. This page is ready for the profiles SIWS approves.
          </p>
        </Prose>
      </PageSection>
    </>
  );
}
