import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';

export function CareersTeaser() {
  return (
    <PageSection eyebrow="Careers" title="Build Your Career With SIWS">
      <Prose>
        <p>
          The Society&rsquo;s institutions are staffed by teachers and administrators who stay for
          decades. Vacancies across the school and the colleges are listed as they arise.
        </p>
      </Prose>
      <ButtonLink to="/careers" size="lg">
        View opportunities
      </ButtonLink>
    </PageSection>
  );
}
