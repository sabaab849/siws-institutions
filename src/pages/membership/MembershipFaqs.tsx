import { PageHero } from '../../components/layout/PageHero/PageHero';
import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';
import { site } from '../../data/site';

export function MembershipFaqs() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership FAQs"
        intro="Common questions about joining and being a member of The South Indians' Welfare Society."
      />

      <PageSection>
        <ButtonLink to="/membership" variant="quiet">
          About membership
        </ButtonLink>
      </PageSection>

      <PageSection tone="bg" title="Still Have a Question?">
        <Prose>
          <p>
            Write to <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
          </p>
        </Prose>
      </PageSection>
    </>
  );
}
