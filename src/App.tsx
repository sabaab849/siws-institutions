import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { movedPaths } from './data/navigation';
import { Home } from './pages/Home';
import { OurStory } from './pages/about/OurStory';
import { Founders } from './pages/about/Founders';
import { Milestones } from './pages/about/Milestones';
import { VisionMissionValues } from './pages/about/VisionMissionValues';
import { Governance } from './pages/governance/Governance';
import { Chairman } from './pages/governance/Chairman';
import { HowGoverned } from './pages/governance/HowGoverned';
import { InstitutionsIndex } from './pages/institutions/InstitutionsIndex';
import { ArtsCentre } from './pages/institutions/ArtsCentre';
import { InstitutionPage } from './pages/institutions/InstitutionPage';
import { ActivitiesIndex } from './pages/activities/ActivitiesIndex';
import { EventCategoryPage } from './pages/activities/EventCategoryPage';
import { AlumniIndex } from './pages/alumni/AlumniIndex';
import { Scholarships } from './pages/support/Scholarships';
import { SupportSiws } from './pages/support/SupportSiws';
import { Centenary } from './pages/support/Centenary';
import { NewsAndEvents } from './pages/NewsAndEvents';
import { Gallery } from './pages/Gallery';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Policy } from './pages/Policy';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />

        <Route path="about">
          <Route index element={<Navigate to="/about/our-story" replace />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="founders" element={<Founders />} />
          <Route path="milestones" element={<Milestones />} />
          <Route path="vision-mission-values" element={<VisionMissionValues />} />
        </Route>

        <Route path="governance">
          <Route index element={<Governance />} />
          <Route path="chairman" element={<Chairman />} />
          <Route path="how-the-society-is-governed" element={<HowGoverned />} />
        </Route>

        {/* Pages that have moved: send their old addresses to the new place. */}
        {movedPaths.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}

        <Route path="institutions">
          <Route index element={<InstitutionsIndex />} />
          <Route path="arts-centre" element={<ArtsCentre />} />
          <Route path=":slug" element={<InstitutionPage />} />
        </Route>

        <Route path="scholarships-and-endowments" element={<Scholarships />} />
        <Route path="support-siws" element={<SupportSiws />} />
        <Route path="road-to-the-centenary" element={<Centenary />} />

        <Route path="alumni">
          <Route index element={<AlumniIndex />} />
          {/* The draft keeps alumni on one page */}
          <Route path="prominent" element={<Navigate to="/alumni" replace />} />
          <Route path="activities" element={<Navigate to="/alumni" replace />} />
        </Route>

        <Route path="news-and-events" element={<NewsAndEvents />} />

        {/* Kept from the earlier build, reachable but not in the draft's sitemap */}
        <Route path="activities">
          <Route index element={<ActivitiesIndex />} />
          <Route path=":slug" element={<EventCategoryPage />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="careers" element={<Careers />} />

        <Route path="contact" element={<Contact />} />
        <Route
          path="privacy-policy"
          element={
            <Policy
              title="Privacy Policy"
              intro="How the Society handles the information people share with it."
            />
          }
        />
        <Route
          path="cookie-policy"
          element={
            <Policy
              title="Cookie Policy"
              intro="The cookies this website sets, and what each one is for."
            />
          }
        />
        <Route
          path="accessibility"
          element={
            <Policy
              title="Accessibility"
              intro="How the Society means this website to work for everyone, and how to report a barrier."
            />
          }
        />
        <Route
          path="grievance-officer"
          element={
            <Policy
              title="Grievance Officer"
              intro="Who to write to about this website or the handling of personal data, and how long a reply takes."
            />
          }
        />
        <Route
          path="disclosures"
          element={
            <Policy
              title="Disclosures"
              intro="Statutory disclosures and the Society's registration details."
            />
          }
        />
        <Route
          path="terms"
          element={
            <Policy
              title="Terms & Conditions"
              intro="The terms on which this website is provided."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
