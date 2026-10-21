import { AboutSiws } from '../sections/AboutSiws/AboutSiws';
import { CentenaryTeaser } from '../sections/Centenary/CentenaryTeaser';
import { Hero } from '../sections/Hero/Hero';
import { Institutions } from '../sections/Institutions/Institutions';
import { LatestNews } from '../sections/LatestNews/LatestNews';
import { SupportCta } from '../sections/SupportCta/SupportCta';

/**
 * The home page as the content draft of 12 October 2026 sets it out: hero and
 * figures, the welcome block, the institutions, the Centenary teaser, the
 * latest news, and the call to endow a scholarship.
 */
export function Home() {
  return (
    <>
      <Hero />
      <AboutSiws />
      <Institutions />
      <CentenaryTeaser />
      <LatestNews />
      <SupportCta />
    </>
  );
}
