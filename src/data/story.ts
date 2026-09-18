import type { Milestone } from '../components/content/MilestoneSelector/MilestoneSelector';
import {
  CampusIcon,
  CommunityIcon,
  CompassStarIcon,
  GraduationIcon,
  HeritageIcon,
} from '../components/icons/MilestoneIcons';

export const story = {
  eyebrow: 'Our Story',
  titleLines: ['90 years of learning,', 'growth and opportunity.'],
  intro:
    "Established in 1934, The South Indians' Welfare Society was founded with a singular, noble resolve: to provide affordable, high-quality, and inclusive education. Growing from a modest assembly at Shivaji Park, Dadar, our legacy spans generations of graduates who have built contemporary Mumbai.",
  milestonesLabel: 'Institutional Milestones',
  milestones: [
    {
      year: '1934',
      title: 'Founded at Shivaji Park',
      description: 'The beginning of the SIWS educational journey in Mumbai.',
      icon: HeritageIcon,
    },
    {
      year: '1960s',
      title: 'Campus Expansion',
      description: 'The institution expanded its educational footprint.',
      icon: CampusIcon,
    },
    {
      year: '1980s',
      title: 'Degree Colleges Opened',
      description: 'Higher education became part of the growing academic community.',
      icon: GraduationIcon,
    },
    {
      year: '2000s',
      title: 'Growing Academic Community',
      description: 'New generations of students and educators continued the legacy.',
      icon: CommunityIcon,
    },
    {
      year: 'TODAY',
      title: 'Continuing the Legacy',
      description: '90 years of education, now looking toward the future.',
      icon: CompassStarIcon,
    },
  ] satisfies Milestone[],
};
