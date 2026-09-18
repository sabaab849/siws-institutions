import type { LinkItem } from './site';

// '#' hrefs are placeholders until the real URLs are provided.
export const contact = {
  title: 'Connect with SIWS',
  inquiriesHeading: 'General Inquiries',
  office: 'Admissions & Admin Office',
  resources: {
    heading: 'Quick Resources',
    links: [
      { label: 'SEMS Academic Portal', href: '#', external: true },
      { label: 'Online Fee Payment', href: '#', external: true },
      { label: 'Library OPAC Search', href: '#', external: true },
      { label: 'Careers & Vacancies', href: '#', external: true },
    ] satisfies LinkItem[],
  },
  disclosures: {
    heading: 'Disclosures',
    links: [
      { label: 'RTI Proactive Disclosures', href: '#' },
      { label: 'Mandatory Affiliation Public', href: '#' },
      { label: 'Nirbhaya Committee', href: '#' },
      { label: 'Feedback Desk', href: '#' },
    ] satisfies LinkItem[],
  },
};
