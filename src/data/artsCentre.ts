/**
 * The SIWS Arts, Fine Arts & Philosophy Centre, as the Society publishes it at
 * siwsschool.edu.in/fine-arts (read 19 October 2026). Subjects, teachers,
 * dates and prizes are the Centre's own; the photographs are its own too.
 */
import danceOurLadys from '../assets/photos/institutions/arts-centre/dance-ourladys-garden.webp';
import danceOurLadys640 from '../assets/photos/institutions/arts-centre/dance-ourladys-garden-640.webp';
import danceRehearsal from '../assets/photos/institutions/arts-centre/dance-rehearsal.webp';
import danceRehearsal640 from '../assets/photos/institutions/arts-centre/dance-rehearsal-640.webp';
import fancyDressEntrants from '../assets/photos/institutions/arts-centre/fancy-dress-entrants.webp';
import fancyDressEntrants640 from '../assets/photos/institutions/arts-centre/fancy-dress-entrants-640.webp';
import janmashtami from '../assets/photos/institutions/arts-centre/janmashtami-costumes.webp';
import janmashtami640 from '../assets/photos/institutions/arts-centre/janmashtami-costumes-640.webp';
import natyaTarangFirstPrize from '../assets/photos/institutions/arts-centre/natya-tarang-first-prize.webp';
import natyaTarangFirstPrize640 from '../assets/photos/institutions/arts-centre/natya-tarang-first-prize-640.webp';
import natyaTarangPerformance from '../assets/photos/institutions/arts-centre/natya-tarang-performance.webp';
import natyaTarangPerformance640 from '../assets/photos/institutions/arts-centre/natya-tarang-performance-640.webp';
import natyaTarangTrophy from '../assets/photos/institutions/arts-centre/natya-tarang-trophy.webp';
import natyaTarangTrophy640 from '../assets/photos/institutions/arts-centre/natya-tarang-trophy-640.webp';
import onamPookalam from '../assets/photos/institutions/arts-centre/onam-pookalam.webp';
import onamPookalam640 from '../assets/photos/institutions/arts-centre/onam-pookalam-640.webp';
import paperCraft from '../assets/photos/institutions/arts-centre/paper-craft-swachh-bharat.webp';
import paperCraft640 from '../assets/photos/institutions/arts-centre/paper-craft-swachh-bharat-640.webp';
import rangoli from '../assets/photos/institutions/arts-centre/rangoli.webp';
import rangoli640 from '../assets/photos/institutions/arts-centre/rangoli-640.webp';
import singingWinners from '../assets/photos/institutions/arts-centre/singing-competition-winners.webp';
import singingWinners640 from '../assets/photos/institutions/arts-centre/singing-competition-winners-640.webp';
import truthAndPeace from '../assets/photos/institutions/arts-centre/truth-and-peace-posters.webp';
import truthAndPeace640 from '../assets/photos/institutions/arts-centre/truth-and-peace-posters-640.webp';

export interface CentreSubject {
  name: string;
  standards: string;
  teacher: string;
  /** Only where the Centre publishes a time of its own. */
  time?: string;
}

export interface CentreStrand {
  title: string;
  summary: string;
  subjects: CentreSubject[];
}

export interface CentreMoment {
  month: string;
  title: string;
  detail: string;
}

export interface CentrePhoto {
  src: string;
  mobile: string;
  alt: string;
  caption: string;
}

export const artsCentre = {
  tagline: 'Where Creativity Finds Its Voice.',
  intro:
    'The Centre has taught at SIWS since the academic year 1997–98: classical languages, music and dance, and the Bhagavad Gita. Classes run every Saturday of the school year, and they are optional and free for SIWS students.',
  facts: [
    { label: 'Since', value: '1997–98' },
    { label: 'Classes', value: 'Saturdays, 10 a.m. to 1 p.m.' },
    { label: 'Fee', value: 'Free for SIWS students' },
    { label: 'Course', value: 'Three years, with a certificate' },
  ],

  strands: [
    {
      title: 'Classical Languages',
      summary: 'Read, write and recite in three classical languages.',
      subjects: [
        { name: 'Tamil', standards: 'Std 3–8', teacher: 'Dr. Mahalakshmi V.' },
        { name: 'Malayalam', standards: 'Std 3–8', teacher: 'Mrs. Rekha Raveendran' },
        { name: 'Sanskrit', standards: 'Std 4–8', teacher: 'Mrs. Priya Rohit Neroy' },
      ],
    },
    {
      title: 'Music & Dance',
      summary: 'Voice, strings and Bharatanatyam, taught to performance standard.',
      subjects: [
        { name: 'Carnatic vocal', standards: 'Std 3–8', teacher: 'Mrs. Ramalakshmi' },
        { name: 'Veena', standards: 'Std 4–8', teacher: 'Mr. Vinit Sawant' },
        { name: 'Violin', standards: 'Std 4–8', teacher: 'Mr. Sekhar Janardhan Tanjorkar' },
        {
          name: 'Bharatanatyam',
          standards: 'Std 4–8',
          teacher: 'Miss Kimaya Shantaram Kamble and Sampada Shivani Rajesh Tambe',
        },
      ],
    },
    {
      title: 'Philosophy',
      summary: 'The Bhagavad Gita: recitation, meaning and the lessons drawn from it.',
      subjects: [
        {
          name: 'Bhagavad Gita',
          standards: 'Std 1–9',
          teacher: 'Mrs. Bhavana Narayanan',
          time: '12 noon to 1 p.m.',
        },
      ],
    },
  ] as CentreStrand[],

  /** Two examinations a year, and the awards the Centre gives at the end of it. */
  course: [
    {
      title: 'Three Years, Then a Certificate',
      text: 'The course is structured over three years and ends in a Centre certificate. Forty-eight students have completed it in full.',
    },
    {
      title: 'Two Examinations a Year',
      text: 'Students sit a terminal examination and an annual examination each year.',
    },
    {
      title: 'Four Scholarships a Year',
      text: 'Four scholarships go to the best outgoing student of each section, sponsored by retired teachers of the Society.',
    },
  ],

  year: [
    {
      month: 'August',
      title: 'Independence Day',
      detail: 'A speech in one of the Centre’s languages, and an instrumental concert.',
    },
    { month: 'October', title: 'Saraswati Pooja', detail: 'Marked with an instrumental concert.' },
    {
      month: 'December',
      title: 'SIWS Annual Programme',
      detail: 'Bharatanatyam, Gita chanting and a live concert.',
    },
    { month: 'January', title: 'Republic Day', detail: 'A speech, and patriotic songs.' },
    {
      month: 'April',
      title: 'Convocation Day',
      detail: 'Certificates and awards, on a Saturday in the second week.',
    },
  ] satisfies CentreMoment[],

  prizes: {
    natyaTarang: {
      title: 'Natya Tarang 2026',
      award: 'First prize in Category A',
      text: 'Pre-Primary to Std 4, at the inter-school group dance competition, with a prize of ₹20,000 and a special prize for costume and props.',
    },
    gita: {
      title: 'Chinmaya Mission Gita Chanting',
      entries: [
        { year: '2024', text: 'First prize, Vihang' },
        { year: '2025', text: 'Second prize, Vihang' },
        { year: '2026', text: 'Second and third prizes, and a consolation prize' },
      ],
    },
  },

  join: {
    steps: [
      {
        title: 'Collect a Form in June',
        text: 'Forms are handed out in school when it reopens for the year.',
      },
      {
        title: 'Return It by Early July',
        text: 'The last date is the first week of July. No class has a limit on seats.',
      },
      {
        title: 'Come Along on Saturdays',
        text: 'Classes run on the ground floor, from 10 a.m. to 1 p.m.',
      },
    ],
    head: {
      name: 'Mrs. Bhavana Narayanan',
      role: 'Head of the Centre',
      phone: '8779616969',
      email: 'bhavana.n@siwsschool.edu.in',
    },
  },

  gallery: [
    {
      src: natyaTarangTrophy,
      mobile: natyaTarangTrophy640,
      alt: 'Children in dance costume and face paint holding a trophy reading “1st in Category A, Pre-Primary to 4th Std”.',
      caption: 'First in Category A at Natya Tarang 2026',
    },
    {
      src: natyaTarangFirstPrize,
      mobile: natyaTarangFirstPrize640,
      alt: 'Staff and children in dance costume on stage with a trophy and a giant cheque for twenty thousand rupees.',
      caption: 'The trophy and the ₹20,000 prize cheque',
    },
    {
      src: natyaTarangPerformance,
      mobile: natyaTarangPerformance640,
      alt: 'Children in bright costume on stage with both arms raised in a dance pose, two teachers among them.',
      caption: 'On stage at Natya Tarang',
    },
    {
      src: danceRehearsal,
      mobile: danceRehearsal640,
      alt: 'Kindergarten children rehearsing a dance in the school hall, barefoot and in school uniform with yellow headbands.',
      caption: 'Rehearsing in the school hall',
    },
    {
      src: danceOurLadys,
      mobile: danceOurLadys640,
      alt: 'Thirteen children in regional Indian costume on stage with three teachers, one child holding a trophy.',
      caption: 'A prize at Our Lady’s Garden, Auxilium Convent',
    },
    {
      src: singingWinners,
      mobile: singingWinners640,
      alt: 'Senior kindergarten children holding certificates after a singing competition.',
      caption: 'Sr. KG singing competition winners',
    },
    {
      src: onamPookalam,
      mobile: onamPookalam640,
      alt: 'Children in cream-and-gold Kerala dress crowded around a large circular flower pookalam.',
      caption: 'The Onam pookalam',
    },
    {
      src: rangoli,
      mobile: rangoli640,
      alt: 'A rangoli laid by students on the floor in coloured powder.',
      caption: 'Rangoli laid by students',
    },
    {
      src: janmashtami,
      mobile: janmashtami640,
      alt: 'Kindergarten children dressed as Krishna and Radha at their classroom tables for Janmashtami.',
      caption: 'Janmashtami in the classroom',
    },
    {
      src: fancyDressEntrants,
      mobile: fancyDressEntrants640,
      alt: 'Six kindergarten children in fancy dress with numbered cards pinned to them — a fruit seller, a pilot and others.',
      caption: 'Fancy dress entrants',
    },
    {
      src: paperCraft,
      mobile: paperCraft640,
      alt: 'A Std 2 paper craft of an iconic face, beside a Swachh Bharat poster made by the class.',
      caption: 'Std 2 paper craft, with a Swachh Bharat poster',
    },
    {
      src: truthAndPeace,
      mobile: truthAndPeace640,
      alt: 'Student posters carrying messages of truth and peace.',
      caption: 'Posters on truth and peace',
    },
  ] satisfies CentrePhoto[],
};
