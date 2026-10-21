export interface Opening {
  position: string;
  institution: string;
  location: string;
  employmentType: string;
  description: string;
  /** The institution's own application page. */
  applyUrl: string;
}

/**
 * Vacancies as advertised by the Degree College on its own careers page
 * (siwscollege.edu.in/careers). Nothing is added that the Society has not
 * published, and applications are made on the college's own form.
 */
export const careers = {
  openings: [
    {
      position: 'IT Administrator',
      institution: 'Degree College · Administration',
      location: 'Wadala, Mumbai',
      employmentType: 'Full time',
      description:
        'Manage ERP and institutional applications, run the IT helpdesk, support faculty, staff and students, and coordinate with software developers and technology vendors.',
      applyUrl: 'https://siwscollege.edu.in/careers/it-administrator/',
    },
    {
      position: 'Manager – Administration',
      institution: 'Degree College · Administration',
      location: 'Wadala, Mumbai',
      employmentType: 'Full time',
      description: 'Administration of the college’s day-to-day operations.',
      applyUrl: 'https://siwscollege.edu.in/careers/manager-administration/',
    },
    {
      position: 'HR Executive',
      institution: 'Degree College · Human Resources',
      location: 'Wadala, Mumbai',
      employmentType: 'Full time',
      description: 'Human resources for the college’s teaching and administrative staff.',
      applyUrl: 'https://siwscollege.edu.in/careers/hr-executive/',
    },
    {
      position: 'Marketing & Brand Building Executive',
      institution: 'Degree College · Marketing',
      location: 'Wadala, Mumbai',
      employmentType: 'Full time',
      description: 'Marketing and brand building for the college.',
      applyUrl: 'https://siwscollege.edu.in/careers/marketing-brand-building-executive/',
    },
  ] satisfies Opening[],
  /** Where the openings above come from, shown under the list. */
  source: {
    label: 'Degree College careers page',
    url: 'https://siwscollege.edu.in/careers/',
  },
};
