import { Banner } from '../../components/layout/Banner/Banner';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';

/**
 * The Centenary teaser from the content draft. The button follows the line it
 * belongs to rather than floating out at the right of the band.
 */
export function CentenaryTeaser() {
  return (
    <Banner
      eyebrow="Road to the Centenary"
      title="2034 Marks 100 Years of SIWS"
      lead="Join us on the road to the Centenary — as an alumnus, a donor or a volunteer."
    >
      <ButtonLink to="/road-to-the-centenary" size="lg">
        Road to the Centenary
      </ButtonLink>
    </Banner>
  );
}
