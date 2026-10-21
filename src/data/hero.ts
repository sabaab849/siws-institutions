export interface StatContent {
  value: string;
  label: string;
  unit?: string;
}

/** How a hero figure enters; see AnimatedStatValue. */
export type StatEffect = 'count' | 'roll' | 'reveal';

interface HeroStatContent extends StatContent {
  effect: StatEffect;
}

/**
 * Wording from the Society's content draft (12 October 2026). The Society was
 * founded on 25 December 1933 and its first school opened on 4 July 1934, so
 * the eyebrow carries both dates rather than "Est. 1934".
 */
export const hero = {
  eyebrow: 'Mumbai · Founded 1933 · Serving since 1934',
  titleLines: ["South Indians'", 'Welfare Society'],
  intro:
    "The South Indians' Welfare Society has served Mumbai through education for over 90 years, guided by one belief: Vidya Dhanam Sarva Dhanat Pradhanam — knowledge is the greatest of all wealth.",
  ctas: {
    primary: { label: 'Our Story', to: '/about/our-story' },
    // Lands on the first institution page, whose hero carries all five
    secondary: { label: 'Our Institutions', to: '/institutions/kindergarten' },
    tertiary: { label: 'Support SIWS', to: '/support-siws' },
  },
  /** The Society's "at a glance" figures; the 150 funds are on the giving page. */
  stats: [
    { value: '1934', label: 'First classes, Shivaji Park', effect: 'roll' },
    { value: '90+', label: 'Years in education', effect: 'count' },
    { value: '4,000+', label: 'Students Enrolled', effect: 'count' },
    { value: 'KG to PhD', label: 'One institutional family', effect: 'reveal' },
    { value: 'NAAC A', label: 'SIWS College, Autonomous · CGPA 3.15', effect: 'reveal' },
  ] satisfies HeroStatContent[],
};
