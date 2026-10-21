/**
 * The alumni page, in the Society's own words: the welcome, what the Alumni
 * Association sets out to do, and the ways an alumnus can take part.
 */
export interface AlumniWay {
  title: string;
  text: string;
  /** Where it leads, once the Society has it running. */
  href?: string;
  /** Set where the link leaves the Society's site. */
  external?: boolean;
}

export const alumni = {
  headline: 'Once SIWS, always SIWS.',
  intro:
    'Thousands of students who began at SIWS have become professionals, entrepreneurs, teachers and public servants across the world. Many batches still meet — the class of 1970 marked its Silver Jubilee reunion by endowing a scholarship. We want to hear from all of you.',

  /** The objectives of the Alumni Association, as it publishes them. */
  objectives: [
    'To maintain contact with past students and strengthen their bonds with their Alma Mater.',
    'To assist present students, helping them to choose their career path by connecting them to the world of work and preparing them to face the challenges in their work life.',
    'To enhance the skills of students by conducting training programmes, expert lectures and motivational talks on various topics.',
    'To help in the placement of final year students through referrals of our Alumni.',
    'To provide a platform to students to develop their proficiency.',
    'To encourage the Alumni to contribute to the development of their Alma Mater and undertake welfare activities for society.',
  ],

  ways: [
    {
      title: 'Register as an alumnus',
      text: 'Name, institution, batch year, city, profession and email, so the Society can keep in touch.',
    },
    {
      title: 'Find your batch',
      text: 'Links to batch groups and coordinators, shared only with the consent of the people in them.',
    },
    {
      title: 'The notable alumni wall',
      text: 'Alumni whose work the Society wishes to record, named with their agreement.',
    },
    {
      title: 'Give back',
      text: 'Mentor a student, speak at the Society’s institutions, recruit from them, or endow a scholarship.',
    },
    {
      title: 'The College Alumni Association',
      text: 'The Degree College runs its own association, with its own programme and register.',
      href: 'https://siwscollege.edu.in/welfare-activity-alumni-association/',
      external: true,
    },
  ] satisfies AlumniWay[],
};
