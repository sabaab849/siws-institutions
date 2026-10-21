import { PageHero } from '../components/layout/PageHero/PageHero';
import { PageSection } from '../components/layout/PageSection/PageSection';
import { ButtonLink } from '../components/ui/Button/ButtonLink';

export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This Page Isn't Here"
        intro="The page you asked for may have moved, or the address may be mistyped."
      />
      <PageSection>
        <ButtonLink to="/" size="lg">
          Back to the homepage
        </ButtonLink>
      </PageSection>
    </>
  );
}
