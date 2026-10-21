/**
 * The Society's information architecture, following the sitemap in the SIWS
 * content draft of 12 October 2026. `primaryNav` drives the header, the mobile
 * drawer and the footer, so a page only has to be added here once.
 *
 * The draft lists Scholarships and Endowments, Support SIWS and Road to the
 * Centenary as three sections; they share one menu here so the bar stays
 * readable, and each keeps its own page.
 */

export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem extends NavChild {
  children?: NavChild[];
}

export const primaryNav: NavItem[] = [
  {
    label: 'About',
    to: '/about/our-story',
    children: [
      { label: 'Our Story', to: '/about/our-story' },
      { label: 'Founders and Legacy', to: '/about/founders' },
      { label: 'Milestones', to: '/about/milestones' },
      { label: 'Vision, Mission and Values', to: '/about/vision-mission-values' },
    ],
  },
  {
    label: 'Governance',
    to: '/governance',
    children: [
      { label: 'Board of Trustees and Office Bearers', to: '/governance' },
      { label: 'From the Chairman', to: '/governance/chairman' },
      { label: 'How the Society Is Governed', to: '/governance/how-the-society-is-governed' },
    ],
  },
  {
    label: 'Institutions',
    to: '/institutions',
    children: [
      { label: 'Kindergarten', to: '/institutions/kindergarten' },
      { label: 'Primary School', to: '/institutions/primary' },
      { label: 'Secondary School', to: '/institutions/secondary' },
      { label: 'Junior College', to: '/institutions/junior-college' },
      { label: 'SIWS College (Autonomous)', to: '/institutions/degree-college' },
      { label: 'Arts, Fine Arts & Philosophy Centre', to: '/institutions/arts-centre' },
    ],
  },
  {
    label: 'Support SIWS',
    to: '/support-siws',
    children: [
      { label: 'Scholarships and Endowments', to: '/scholarships-and-endowments' },
      { label: 'Support SIWS', to: '/support-siws' },
      { label: 'Road to the Centenary', to: '/road-to-the-centenary' },
    ],
  },
  { label: 'Alumni', to: '/alumni' },
  { label: 'News and Events', to: '/news-and-events' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Addresses that have moved. Kept so older links still land on the right page.
 */
export const movedPaths: Array<{ from: string; to: string }> = [
  { from: 'about/office-bearers', to: '/governance' },
  { from: 'about/trustees', to: '/governance' },
  { from: 'about/staff', to: '/governance' },
  { from: 'about/vision', to: '/about/vision-mission-values' },
  { from: 'contributing-to-the-future', to: '/support-siws' },
  { from: 'membership', to: '/support-siws' },
  { from: 'membership/faqs', to: '/support-siws' },
  { from: 'membership/categories', to: '/support-siws' },
  { from: 'membership/life-membership', to: '/support-siws' },
  { from: 'membership/how-to-join', to: '/support-siws' },
];
