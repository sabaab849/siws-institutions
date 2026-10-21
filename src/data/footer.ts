export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

/** A system on one of the Society's sub-domains. No href until SIWS supplies it. */
export interface FooterPortal {
  label: string;
  href?: string;
}

/**
 * The institutional footer, following the content draft of 12 October 2026:
 * the Society's own pages, then Portals, and the legal links along the foot.
 */
export const footer = {
  name: 'SIWS Mumbai',
  description:
    "The South Indians' Welfare Society has served Mumbai through education for over 90 years. Founded 1933, serving since 1934.",
  columns: [
    {
      heading: 'About the Society',
      links: [
        { label: 'Our Story', to: '/about/our-story' },
        { label: 'Founders and Legacy', to: '/about/founders' },
        { label: 'Milestones', to: '/about/milestones' },
        { label: 'Vision, Mission and Values', to: '/about/vision-mission-values' },
      ],
    },
    {
      heading: 'Governance',
      links: [
        { label: 'Trustees and Office Bearers', to: '/governance' },
        { label: 'From the Chairman', to: '/governance/chairman' },
        { label: 'How the Society Is Governed', to: '/governance/how-the-society-is-governed' },
      ],
    },
    {
      heading: 'Support SIWS',
      links: [
        { label: 'Scholarships and Endowments', to: '/scholarships-and-endowments' },
        { label: 'Support SIWS', to: '/support-siws' },
        { label: 'Road to the Centenary', to: '/road-to-the-centenary' },
      ],
    },
    {
      heading: 'Explore',
      links: [
        { label: 'Our Institutions', to: '/institutions' },
        { label: 'Alumni', to: '/alumni' },
        { label: 'News and Events', to: '/news-and-events' },
        { label: 'Contact Us', to: '/contact' },
      ],
    },
  ] satisfies FooterColumn[],
  /** The call to action the draft asks for at the foot of the home page. */
  callToAction: {
    title: 'Fund a Scholarship',
    text: 'Many of our 150 funds began with one family remembering someone they loved.',
    to: '/support-siws',
    label: 'Support SIWS',
  },
  /**
   * The portals the draft keeps in the footer. Each stays where it is, on its
   * own sub-domain; the footer only points to it. Addresses are as SIWS gave
   * them, and all are linked.
   *
   * Checked 21 October 2026: koha, kohastaff, lib, kohastaffs and library all
   * resolve to 13.49.250.107, an unrelated Express service answering
   * "HealthTrust Solana Backend", behind a certificate issued for
   * api.dev.healthtrust.app — so those five warn on HTTPS and do not reach
   * Koha. SEMS and the College catalogue, on 13.50.203.187, answer correctly.
   * The links need no change here once SIWS repoints the DNS.
   */
  portals: [
    { label: 'SEMS', href: 'https://sems.siws.in/' },
    { label: 'Koha – College', href: 'https://koha.siws.in/' },
    { label: 'Koha Staff – College', href: 'https://kohastaff.siws.in/' },
    { label: 'Koha – School OPAC', href: 'https://lib.siws.in/' },
    { label: 'Koha Staff – School', href: 'https://kohastaffs.siws.in/' },
    { label: 'SLIMS – College', href: 'https://opac.siws.in/siws_college/' },
    { label: 'SLIMS – School', href: 'https://library.siws.in/' },
    { label: 'Admin Portal' },
    { label: 'Exam Portal' },
    { label: 'Fee Payment' },
  ] satisfies FooterPortal[],
  copyright: "© The South Indians' Welfare Society, Mumbai",
  baseLinks: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
    { label: 'Accessibility', to: '/accessibility' },
    { label: 'Grievance Officer', to: '/grievance-officer' },
    { label: 'Disclosures', to: '/disclosures' },
    { label: 'Terms & Conditions', to: '/terms' },
  ] satisfies FooterLink[],


  /**
   * Accounts the institutions publish themselves. The Degree College links
   * these five from its own site; the school publishes none, and the Society
   * has no page of its own yet.
   */
  social: {
    heading: 'Follow',
    accounts: [
      { label: 'Instagram', href: 'https://www.instagram.com/siwscollegesofficial/' },
      { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61562514952104' },
      { label: 'X', href: 'https://x.com/SIWSColleges' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/siwscollegeofficial/' },
      { label: 'YouTube', href: 'https://www.youtube.com/@SIWSCollegesOfficial' },
    ],
  },
};
