/**
 * The Society's own words, from its content draft of 12 October 2026: the
 * story, motto, vision, mission and values, the milestone table, how it is
 * governed, the Chairman's message and the Centenary. Facts are kept exactly
 * as the Society states them.
 */

export const society = {
  motto: {
    sanskrit: 'Vidya Dhanam Sarva Dhanat Pradhanam',
    translation: 'Of all forms of wealth, knowledge is the greatest.',
  },

  /** Our Story, in four parts. */
  story: [
    'In the early 1930s, families who had come to Bombay from the South for work faced a simple problem: where could their children study well, affordably, and without losing touch with their roots? Shri N.V. Sarma and a handful of middle-class friends answered it themselves. They founded the South Indians’ Welfare Society on Christmas Day, 1933.',
    'On 4 July 1934, the Society opened a primary school in a garage at Shivaji Park, Dadar. It had four students. Two years later a primary school opened at Matunga, and within a few years Wadala became the centre of the Society’s work.',
    'The school grew into a full Secondary School, and then a Junior College. In 1980, Shri N.S. Iyengar founded the S.I.W.S. College of Commerce & Economics in memory of his brother, Shri N.R. Swamy. Smt. Thirumalai College of Science followed in 1990. The college became Autonomous in 2023 and holds a NAAC A Grade.',
    'Today SIWS is one of the few institutions in Maharashtra where a child can walk in at Junior KG and walk out with a doctorate — within one family of institutions, on one campus at Wadala. The Society remains a not-for-profit, registered public trust. Its Trustees serve without pay.',
  ],

  vision:
    'To be a leading educational institution that nurtures knowledge, character, innovation and lifelong learning, empowering every student to become a responsible global citizen and a catalyst for positive change.',

  /** Each commitment under a short heading, so the six can be read at a glance. */
  mission: [
    {
      title: 'Inclusive education',
      text: 'Provide holistic, inclusive and value-based education in a safe, nurturing environment.',
    },
    {
      title: 'Education for every child',
      text: 'Keep quality education within reach of every deserving child, whatever the family’s means.',
    },
    {
      title: 'Academic excellence',
      text: 'Inspire academic excellence through innovative teaching and continuous learning.',
    },
    {
      title: 'Character and leadership',
      text: 'Build character, integrity, leadership and social responsibility.',
    },
    {
      title: 'A living cultural heritage',
      text: 'Preserve the languages, music and cultural heritage of South India for the next generation.',
    },
    {
      title: 'Tradition meets progress',
      text: 'Honour our heritage while embracing new technology and global best practice.',
    },
  ],

  values: [
    { name: 'Integrity', text: 'Honesty, ethics and accountability in all we do.' },
    { name: 'Excellence', text: 'Every learner encouraged to reach their highest potential.' },
    { name: 'Respect', text: 'Diversity, empathy and mutual respect.' },
    { name: 'Service', text: 'Education that leads to meaningful contribution to society.' },
    { name: 'Heritage', text: 'Pride in our culture, openness to every culture.' },
    { name: 'Lifelong Learning', text: 'Curiosity and continuous growth.' },
  ],

  /** How the Society is governed. */
  governance: [
    {
      term: 'Society and Trust',
      text: 'Registered under the Societies Registration Act, 1860 and the Bombay (Maharashtra) Public Trusts Act, 1950.',
    },
    { term: 'General Body', text: 'Members of the Society, who elect the Trustees.' },
    {
      term: 'Board of Trustees',
      text: 'Sets direction, approves budgets and appointments, and holds the institutions’ assets in trust. Trustees serve in an honorary capacity.',
    },
    {
      term: 'Institution bodies',
      text: 'The College has its own Governing Body, Academic Council, Finance Committee, Board of Studies and College Development Committee, as an Autonomous college requires. The Schools have their School Committees.',
    },
    { term: 'Accountability', text: 'Accounts are audited annually.' },
  ],

  /** Draft supplied by the Society; awaiting the Chairman's approval. */
  chairman: {
    name: 'R. Radhakrishnan',
    role: 'Chairman',
    paragraphs: [
      'Ninety years ago, a few families in a new city decided that their children deserved the best education they could give them. They had little money and no buildings — only conviction. Everything SIWS is today rests on that conviction.',
      'As we approach our Centenary, our task is the same as theirs: to keep good education within reach of every deserving child, to prepare our students for a world our founders could not have imagined, and to keep alive the culture that gave us our name. I invite every alumnus, parent and well-wisher to walk this road with us.',
    ],
  },

  centenary: {
    headline: '100 Years of SIWS. The Next 100 Start Now.',
    intro:
      'In 1934 our founders opened a school for four children. By 2034 we want SIWS to be ready for the century ahead — while staying true to the reason it was founded.',
    goals: [
      {
        name: 'Reach',
        text: 'More scholarships, so no deserving child is turned away for want of fees.',
      },
      {
        name: 'Learning',
        text: 'Modern labs, digital classrooms and teacher development across all institutions.',
      },
      {
        name: 'Technology',
        text: 'Students trained for an AI-driven economy, with alumni and industry mentors.',
      },
      {
        name: 'Heritage',
        text: 'A stronger Arts, Fine Arts & Philosophy Centre, open to the wider community.',
      },
      {
        name: 'Memory',
        text: 'A Centenary history book and digital archive of photographs, magazines and alumni stories.',
      },
    ],
  },
};

export interface SocietyMilestone {
  year: string;
  title: string;
  description: string;
}

/**
 * The Society's milestone table, oldest first. Dates are the Society's own;
 * college milestones come from siwscollege.edu.in/milestones.
 */
export const milestones: SocietyMilestone[] = [
  {
    year: '1933',
    title: 'The Society Is Founded',
    description: 'Shri N.V. Sarma and a group of friends found the Society on Christmas Day.',
  },
  {
    year: '1934',
    title: 'First Classes at Shivaji Park',
    description:
      'The first primary school opens in a garage at Shivaji Park, Dadar, with four students, on 4 July.',
  },
  { year: '1936', title: 'A Second School', description: 'A primary school opens at Matunga.' },
  {
    year: '1976',
    title: 'Secondary School Established',
    description: 'The school grows to take students through to Standard X.',
  },
  {
    year: '1980',
    title: 'The College Is Founded',
    description:
      'S.I.W.S. College of Commerce & Economics is founded, and the first B.Com batch begins.',
  },
  {
    year: '1990',
    title: 'Science Comes to Wadala',
    description: 'Smt. Thirumalai College of Science opens, with the first B.Sc batch.',
  },
  {
    year: '1994',
    title: 'Permanent Affiliation',
    description: 'B.Com receives permanent affiliation from the University of Mumbai.',
  },
  {
    year: '1997–98',
    title: 'The Arts Centre Begins',
    description: 'The SIWS Arts, Fine Arts & Philosophy Centre opens its Saturday classes.',
  },
  {
    year: '1999–2001',
    title: 'New Degrees',
    description: 'B.Sc Computer Science (1999), BMS (2000) and B.Sc IT (2001) are launched.',
  },
  {
    year: '2002–04',
    title: 'The Postgraduate Era',
    description:
      'M.Com (2002), and M.Sc by Research in Organic Chemistry and M.Sc IT (2004), are introduced.',
  },
  {
    year: '2004',
    title: 'First NAAC Accreditation',
    description: 'The College is accredited by NAAC in its first cycle.',
  },
  { year: '2009', title: 'Platinum Jubilee', description: 'The Society completes 75 years.' },
  {
    year: '2012',
    title: 'NAAC, Second Cycle',
    description: 'The College is re-accredited by NAAC.',
  },
  {
    year: '2013',
    title: 'Doctoral Research Begins',
    description: 'PhD (Commerce) in Business Economics starts at the College.',
  },
  {
    year: '2016',
    title: 'Finance and Media',
    description: 'B.Com Accounting & Finance and BAMMC are launched.',
  },
  {
    year: '2017',
    title: 'Permanent Affiliation for B.Sc',
    description: 'The University of Mumbai grants B.Sc permanent affiliation.',
  },
  {
    year: '2019',
    title: 'UGC Recognition',
    description:
      'The College receives UGC 2(f)/12B status and is appointed Lead College for Cluster 5, University of Mumbai.',
  },
  {
    year: '2021',
    title: 'ISO Certification',
    description: 'The College is certified to ISO 9001:2015.',
  },
  {
    year: '2023',
    title: 'Autonomy and NAAC A Grade',
    description:
      'NAAC A Grade (CGPA 3.15) in the third cycle, Autonomous status, NEP 2020 adopted, and M.Sc Computer Science introduced.',
  },
  {
    year: '2024',
    title: 'Science and Finance Grow',
    description:
      'B.Sc Data Science and AI, M.Sc Microbiology and Chemistry, PhD Chemistry, and B.Com Financial Markets and Financial Management begin.',
  },
  {
    year: '2025',
    title: 'A First for Mumbai',
    description: 'Mumbai’s first PG Diploma in Digital Marketing (Analytics) is introduced.',
  },
  {
    year: '2033–34',
    title: 'The Centenary',
    description: 'A hundred years of the Society, and of the school that followed it.',
  },
];
