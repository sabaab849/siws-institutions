import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';

export function AlumniPreview() {
  return (
    <PageSection
      eyebrow="Alumni"
      title="Alumni Who Made Their Mark"
      lead="Students of the Society's institutions have gone on to work across Mumbai and beyond."
    >
      <ButtonLink to="/alumni" size="lg">
        Explore alumni
      </ButtonLink>
    </PageSection>
  );
}
