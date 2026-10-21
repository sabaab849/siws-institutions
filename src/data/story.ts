import type { Milestone } from '../components/content/MilestoneSelector/MilestoneSelector';
import {
  CampusIcon,
  CommunityIcon,
  CompassStarIcon,
  GraduationIcon,
  HeritageIcon,
} from '../components/icons/MilestoneIcons';

/**
 * The homepage's short version of the Society's journey. Five moments from the
 * full milestone table in `society.ts`, with the Society's own dates.
 */
export const story = {
  eyebrow: 'Our Legacy',
  titleLines: ['Ninety Years of Learning,', 'Growth and Opportunity.'],
  intro:
    'On Christmas Day 1933, a handful of middle-class families in Bombay came together to found a society that would give their children a good education. On 4 July 1934, its first school opened in a garage at Shivaji Park with four students. Nine decades later, the Society runs a Kindergarten, Primary and Secondary School, a Junior College and an Autonomous Degree College at Wadala and Matunga — and remains a not-for-profit trust run by honorary Trustees.',
  milestonesLabel: 'Institutional Milestones',
  milestones: [
    {
      year: '1933',
      title: 'The Society Is Founded',
      description: 'Shri N.V. Sarma and a group of friends found SIWS on Christmas Day.',
      icon: HeritageIcon,
    },
    {
      year: '1934',
      title: 'Four Students at Shivaji Park',
      description: 'The first school opens in a garage at Shivaji Park, Dadar, on 4 July.',
      icon: CampusIcon,
    },
    {
      year: '1980',
      title: 'The College Is Founded',
      description: 'S.I.W.S. College opens in memory of Shri N.R. Swamy; Science follows in 1990.',
      icon: GraduationIcon,
    },
    {
      year: '2023',
      title: 'Autonomy and NAAC A Grade',
      description: 'The College becomes Autonomous and is re-accredited at A Grade, CGPA 3.15.',
      icon: CommunityIcon,
    },
    {
      year: '2033–34',
      title: 'The Centenary',
      description: 'A hundred years of the Society, and of the school that followed it.',
      icon: CompassStarIcon,
    },
  ] satisfies Milestone[],
};
