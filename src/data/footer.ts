import type { LinkItem } from './site';

// '#' hrefs are placeholders until the real URLs are provided.
export const footer = {
  name: 'SIWS Mumbai',
  columns: [
    {
      heading: 'Navigation',
      links: [
        { label: 'About SIWS', href: '#about' },
        { label: 'Our Institutions', href: '#institutions' },
        { label: 'Campus Activities', href: '#activities' },
        { label: 'Contact Desk', href: '#contact' },
      ] satisfies LinkItem[],
    },
    {
      heading: 'Student Portals',
      links: [
        { label: 'SEMS Access', href: '#' },
        { label: 'OPAC Library', href: '#' },
        { label: 'Exam Portal', href: '#' },
        { label: 'Online Fee Payment', href: '#' },
      ] satisfies LinkItem[],
    },
  ],
  copyright: "© 2026 The South Indians' Welfare Society, Mumbai. All rights reserved.",
  baseLinks: [
    { label: 'College Website', href: '#' },
    { label: 'Admissions Office', href: '#' },
    { label: 'RTI Disclosures', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ] satisfies LinkItem[],
};
