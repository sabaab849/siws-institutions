import bookSm from '../assets/icons/book-sm.svg';
import calendarSm from '../assets/icons/calendar-sm.svg';
import graduationCapSm from '../assets/icons/graduation-cap-sm.svg';
import shieldSm from '../assets/icons/shield-sm.svg';
import starSm from '../assets/icons/star-sm.svg';

export const glance = {
  eyebrow: 'Society at a Glance',
  title: 'Quick Glance',
  stats: [
    {
      label: 'Years of Service',
      badge: '90+',
      badgeShape: '22px 14px 20px 12px',
      value: '90+',
      description: "Serving Mumbai's educational needs since 1934",
    },
    {
      label: 'NAAC CGPA',
      badge: 'A',
      badgeShape: '12px 20px 14px 22px',
      value: '3.15',
      description: 'A Grade · University of Mumbai affiliated',
    },
    {
      label: 'School Students',
      badge: '4K+',
      badgeShape: '18px 10px 16px 20px',
      value: '4K+',
      description: 'Across Wadala and Matunga campuses',
    },
    {
      label: 'Programmes',
      badge: '20+',
      badgeShape: '14px 22px 10px 16px',
      value: '20+',
      description: 'UG, PG & Diploma at the Degree College',
    },
    {
      label: "Girls' Education",
      badge: 'Free',
      badgeShape: '20px 12px 22px 14px',
      value: 'Free',
      description: 'Junior College girls scheme active',
    },
    {
      label: 'Scholarships',
      badge: '₹+',
      badgeShape: '10px 18px 14px 22px',
      value: '₹+',
      description: 'Minority, Govt. caste & merit schemes available',
    },
  ],
  announcementsLabel: 'Recent Announcements',
  // Placeholder until the announcements page exists.
  viewAllHref: '#',
  announcements: [
    {
      category: 'Admissions',
      title: 'Admissions open for 2025-26 - FYBCom orientation scheduled',
      date: '2025-08-12',
      dateLabel: '12 Aug 2025',
      icon: graduationCapSm,
    },
    {
      category: 'Programme',
      title: "PG Diploma in Digital Marketing (Analytics) launched - Mumbai's first",
      date: '2025-08-08',
      dateLabel: '08 Aug 2025',
      icon: bookSm,
    },
    {
      category: 'Event',
      title: 'International Conference "Industry Academia Connect" - Aug 23-24',
      date: '2025-08-05',
      dateLabel: '05 Aug 2025',
      icon: calendarSm,
    },
    {
      category: 'Welfare',
      title: 'Yuva Raksha student accident insurance scheme implemented',
      date: '2025-08-02',
      dateLabel: '02 Aug 2025',
      icon: shieldSm,
    },
    {
      category: 'Accreditation',
      title: 'SIWS College re-accredited NAAC A Grade with CGPA 3.15',
      date: '2025-07-28',
      dateLabel: '28 Jul 2025',
      icon: starSm,
    },
  ],
};
