import { SiteFooter } from './components/layout/SiteFooter/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader/SiteHeader';
import { CampusLife } from './sections/CampusLife/CampusLife';
import { Contact } from './sections/Contact/Contact';
import { HeritageStatement } from './sections/HeritageStatement/HeritageStatement';
import { Hero } from './sections/Hero/Hero';
import { Impact } from './sections/Impact/Impact';
import { InFocus } from './sections/InFocus/InFocus';
import { Institutions } from './sections/Institutions/Institutions';
import { OurStory } from './sections/OurStory/OurStory';
import { QuickGlance } from './sections/QuickGlance/QuickGlance';

export function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HeritageStatement />
        <OurStory />
        <Institutions />
        <CampusLife />
        <QuickGlance />
        <InFocus />
        <Impact />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
