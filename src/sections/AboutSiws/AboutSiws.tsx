import { PageSection } from '../../components/layout/PageSection/PageSection';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { Prose } from '../../components/ui/Prose/Prose';

export function AboutSiws() {
  return (
    <PageSection
      eyebrow="About SIWS"
      title="Building Education. Shaping Communities."
      action={
        <ButtonLink to="/about/our-story" variant="link">
          Read our story
        </ButtonLink>
      }
    >
      <Prose size="lead">
        <p>
          On Christmas Day 1933, a handful of middle-class families in Bombay came together to found
          a society that would give their children a good education. On 4 July 1934, its first
          school opened in a garage at Shivaji Park with four students.
        </p>
        <p>
          Nine decades later, the Society runs a Kindergarten, Primary and Secondary School, a
          Junior College and an Autonomous Degree College at Wadala and Matunga — and remains a
          not-for-profit trust run by honorary Trustees.
        </p>
      </Prose>
    </PageSection>
  );
}
