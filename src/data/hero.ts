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

export const hero = {
  eyebrow: 'Mumbai · Maharashtra · Est. 1934',
  titleLines: ["The South Indians'", 'Welfare Society'],
  intro: 'A registered educational society nurturing generations across Mumbai.',
  quote: '"Vidya Dhanam Sarva Dhanat Pradhanam"',
  translation: 'Knowledge is the greatest of all wealth.',
  stats: [
    { value: '90+', label: 'Years of Service', effect: 'count' },
    { value: '05', label: 'Institutions', effect: 'roll' },
    { value: '4,000+', label: 'Students Enrolled', effect: 'count' },
    { value: 'NAAC A', label: 'Accredited Status', effect: 'reveal' },
  ] satisfies HeroStatContent[],
};
