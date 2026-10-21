import { Banner } from '../../components/layout/Banner/Banner';
import { ButtonLink } from '../../components/ui/Button/ButtonLink';
import { footer } from '../../data/footer';

/** The call to action the draft places at the foot of the home page. */
export function SupportCta() {
  return (
    <Banner
      tone="warm"
      eyebrow="Support SIWS"
      title={footer.callToAction.title}
      lead={footer.callToAction.text}
    >
      <ButtonLink to={footer.callToAction.to} size="lg">
        {footer.callToAction.label}
      </ButtonLink>
    </Banner>
  );
}
