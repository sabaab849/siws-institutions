/**
 * One page per institution: Kindergarten, Primary, Secondary, Junior College and
 * the Degree College. Wording and photographs for the four school sections come
 * from the institutions' own sites — siwsschool.edu.in (read 23 September 2026)
 * and siwscollege.edu.in — so nothing here is invented.
 */
import { institutionGalleries, type InstitutionPhoto } from './institutionGalleries';
import degreeCollege from '../assets/photos/institutions/degree-college.webp';
import kindergartenClassroom from '../assets/photos/institutions/kindergarten-classroom.webp';
import primaryClassroom from '../assets/photos/institutions/primary-classroom.webp';
import secondaryClassroom from '../assets/photos/institutions/secondary-classroom.webp';
import juniorCollegeLibrary from '../assets/photos/institutions/junior-college-library.webp';

export interface InstitutionFact {
  label: string;
  value: string;
}

/** A section of an institution's page, e.g. one school stage. */
export interface InstitutionUnit {
  name: string;
  summary: string;
  image?: string;
  facts: InstitutionFact[];
  website?: string;
  /** Numbers and addresses as published by the institution itself. */
  phone?: string;
  email?: string;
}

/** What the institution says it offers, in its own words. */
export interface InstitutionHighlight {
  title: string;
  text: string;
}

export interface InstitutionPageContent {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  units: InstitutionUnit[];
  highlightsTitle?: string;
  highlights?: InstitutionHighlight[];
  galleryTitle?: string;
  gallery?: InstitutionPhoto[];
  /** What the Society still has to supply for this page. */
  missing?: string;
}

export const institutionPages: InstitutionPageContent[] = [
  {
    slug: 'kindergarten',
    navLabel: 'Kindergarten',
    title: 'S.I.W.S. Kindergarten',
    intro:
      'Jr. KG and Sr. KG at Wadala and Matunga, following the State Board curriculum with a structured approach to foundational learning.',
    units: [
      {
        name: 'S.I.W.S. Kindergarten',
        summary:
          'A child-friendly campus in Wadala: a pure vegetarian canteen cooking on site, washrooms at child height, and monitored entry throughout the day.',
        image: kindergartenClassroom,
        facts: [
          { label: 'Classes', value: 'Jr. KG & Sr. KG' },
          { label: 'Campus', value: 'Wadala and Matunga' },
          { label: 'Curriculum', value: 'State Board' },
        ],
        website: 'https://siwsschool.edu.in/kindergarten',
        phone: '+91 98927 03893',
        email: 'info@siwsschool.edu.in',
      },
    ],
    highlightsTitle: 'The Kindergarten and Pre-primary Programme',
    highlights: [
      {
        title: 'Early Literacy and Numeracy',
        text: 'Letters, numbers, reading readiness and writing skills.',
      },
      {
        title: 'Creative Expression',
        text: 'Art, music, storytelling and activity-based learning.',
      },
      {
        title: 'Communication and Social Skills',
        text: 'Speaking, listening, sharing and confidence building.',
      },
      {
        title: 'Cognitive and Motor Development',
        text: 'Hands-on activities supporting mental and physical growth.',
      },
      {
        title: 'Physical Activity and Play',
        text: 'Movement, games and structured playtime.',
      },
      {
        title: 'A Safe and Disciplined Environment',
        text: 'CCTV-monitored entry and exit, female staff throughout the section, and teachers with 18 to 30 years of experience with young children.',
      },
    ],
    galleryTitle: 'Life in the Kindergarten',
    gallery: institutionGalleries.kindergarten,
  },
  {
    slug: 'primary',
    navLabel: 'Primary School',
    title: 'S.I.W.S. Primary School',
    intro:
      'Standards I to IV at Wadala and Matunga, on the Maharashtra State Board curriculum, in a caring, inclusive and stimulating school.',
    units: [
      {
        name: 'S.I.W.S. Primary School',
        summary:
          'The school sets out to nurture every child in a caring, inclusive and stimulating environment, with a focus that extends beyond academic excellence to developing confident, responsible and compassionate individuals.',
        image: primaryClassroom,
        facts: [
          { label: 'Standards', value: 'I to IV' },
          { label: 'Board', value: 'Maharashtra State Board' },
        ],
        website: 'https://siwsschool.edu.in/primary',
        phone: '022 2411 4262',
        email: 'admissions@siwsschool.edu.in',
      },
    ],
    highlightsTitle: 'Why Parents Choose SIWS Primary',
    highlights: [
      {
        title: 'Academic Excellence',
        text: 'A strong foundation on the Maharashtra State Board curriculum, with continuous assessment and attention to every child.',
      },
      {
        title: 'Experienced Teachers',
        text: 'Qualified teachers using child-centred, activity-based methods, so lessons are understood rather than memorised.',
      },
      {
        title: 'Smart Classrooms',
        text: 'Interactive smart panels in the classrooms, with multimedia lessons and digital resources.',
      },
      {
        title: 'Holistic Development',
        text: 'Sports, art, music, dance, competitions and leadership, alongside the academic timetable.',
      },
      {
        title: 'Individual Care',
        text: 'Personal attention and remedial support wherever a learner needs it.',
      },
      {
        title: 'A Safe, Secure Campus',
        text: 'Classrooms, corridors, entrances and common areas are monitored by CCTV throughout.',
      },
    ],
    galleryTitle: 'Life in the Primary School',
    gallery: institutionGalleries.primary,
    missing:
      'Photographs of the Primary School beyond the classroom — its competitions, celebrations and sports day. The school’s own site publishes only classroom photographs.',
  },
  {
    slug: 'secondary',
    navLabel: 'Secondary School',
    title: 'S.I.W.S. High School, Wadala',
    intro:
      'Standards V to X on the Maharashtra State Board curriculum, taught in alignment with the National Education Policy 2020.',
    units: [
      {
        name: 'S.I.W.S. High School, Wadala',
        summary:
          'A competency-based approach: lessons are built to develop conceptual understanding rather than recall, and to give every student regular practice in critical thinking, creativity and problem-solving.',
        image: secondaryClassroom,
        facts: [
          { label: 'Standards', value: 'V to X' },
          { label: 'Board', value: 'Maharashtra State Board, aligned with NEP 2020' },
        ],
        website: 'https://siwsschool.edu.in/secondary',
        phone: '022 2418 0877',
        email: 'info@siwsschool.edu.in',
      },
    ],
    highlightsTitle: 'Why Families Choose SIWS High School',
    highlights: [
      {
        title: 'Experienced Faculty',
        text: 'Thirty-nine teachers who upgrade their practice through regular training.',
      },
      {
        title: 'Smart Boards in Every Classroom',
        text: 'Digital learning resources used as part of ordinary lessons rather than as an occasional treat.',
      },
      {
        title: 'Science and Computer Laboratories',
        text: 'Well-equipped laboratories, a library and sports facilities on the Wadala campus.',
      },
      {
        title: 'Sports, Arts and Community Service',
        text: 'Innovation, leadership, environmental awareness and community service run alongside the academic programme.',
      },
      {
        title: 'Where Students Go Next',
        text: 'After the SSC examination, students move on to Junior College in the Science and Commerce streams, and from there to degree colleges and professional courses.',
      },
      {
        title: '92+ Years in Wadala',
        text: 'A student can stay within the Society from Kindergarten to postgraduate study.',
      },
    ],
    galleryTitle: 'Life at the Secondary School',
    gallery: institutionGalleries.secondary,
  },
  {
    slug: 'junior-college',
    navLabel: 'Junior College',
    title: 'S.I.W.S. Junior College',
    intro:
      'Standards XI and XII in the Science and Commerce streams, on the Maharashtra State Board curriculum.',
    units: [
      {
        name: 'S.I.W.S. Junior College',
        summary:
          'Higher secondary education on the Wadala campus, with guidance on streams and courses for students moving up from the secondary school.',
        image: juniorCollegeLibrary,
        facts: [
          { label: 'Streams', value: 'Science & Commerce' },
          { label: 'Board', value: 'Maharashtra State Board' },
        ],
        website: 'https://siwsschool.edu.in/junior-college',
        phone: '+91 98927 03893',
        email: 'info@siwsschool.edu.in',
      },
    ],
    highlightsTitle: 'Two Streams, Standards XI and XII',
    highlights: [
      {
        title: 'Science',
        text: 'Physics, Chemistry, Biology and Mathematics on the Maharashtra State Board syllabus, with Computer Science and Information Technology as bifocal subjects — and preparation for JEE, NEET, MHT-CET and CUET alongside the HSC examination.',
      },
      {
        title: 'Commerce',
        text: 'Accountancy, Economics, Organisation of Commerce and Management, Secretarial Practice, Mathematics and Information Technology — the foundation for CA, CS, CMA, B.Com., BBA and the management courses that follow.',
      },
    ],
    galleryTitle: 'Life at the Junior College',
    gallery: institutionGalleries['junior-college'],
  },
  {
    slug: 'degree-college',
    navLabel: 'Degree College',
    title:
      'S.I.W.S. N. R. Swamy College of Commerce & Economics and Smt. Thirumalai College of Science',
    intro:
      'Opened in 1980, the Society’s degree college teaches Commerce, Economics and Science up to doctoral level.',
    units: [
      {
        name: 'Degree College',
        summary:
          'Undergraduate, postgraduate and doctoral study. Autonomous since 2023, re-accredited by NAAC at A grade in its third cycle, and certified to ISO 9001:2015.',
        image: degreeCollege,
        facts: [
          { label: 'Programmes', value: 'B.Sc. / M.Sc. / B.Com. / M.Com. / Ph.D.' },
          { label: 'Established', value: '1980' },
        ],
        website: 'https://siwscollege.edu.in/',
        phone: '022 2418 0390',
      },
    ],
    missing: 'Departments, courses and the principal’s message for the degree college.',
  },
  {
    slug: 'arts-centre',
    navLabel: 'Arts & Fine Arts Centre',
    title: 'SIWS Arts, Fine Arts & Philosophy Centre',
    intro:
      'Culture, free for every SIWS student. Since 1997–98 the Centre has taught languages, music, dance and philosophy on Saturdays, at no charge.',
    units: [
      {
        name: 'Arts, Fine Arts & Philosophy Centre',
        summary:
          'Tamil, Malayalam and Sanskrit; Carnatic vocal, veena, violin and Bharatanatyam; and the Bhagavad Gita, taught every Saturday and free of charge. Forty-eight students have completed its full three-year certificate.',
        facts: [
          { label: 'Classes', value: 'Saturdays, free of charge' },
          { label: 'Certificate', value: 'Three-year course' },
          { label: 'Since', value: '1997–98' },
          { label: 'Head', value: 'Mrs. Bhavana Narayanan' },
        ],
        website: 'https://siwsschool.edu.in/fine-arts',
      },
    ],
    missing: 'Confirmation of whether children from outside SIWS may join the Centre.',
  },
];

/**
 * The Society describes its institutions in four parts — the school from KG to
 * Standard X, the Junior College, the Degree College and the Arts Centre. The
 * index page follows that order, in the Society's own words.
 */
export interface InstitutionGroup {
  slug: string;
  /** The name the Society gives this part. */
  name: string;
  /** The line it leads with. */
  tagline: string;
  text: string;
  /** The pages this part covers, in order. */
  pages: string[];
}

export const institutionGroups: InstitutionGroup[] = [
  {
    slug: 'school',
    name: 'SIWS School',
    tagline: 'A strong start, from KG to Standard X',
    text: 'Our school began the Society’s story in 1934 and is still its heart. Children learn in a safe, disciplined and caring setting, with the Maharashtra State Board curriculum delivered the NEP 2020 way — activity-based in the early years and competency-based as they grow. Yoga, sports, green-skills projects, inter-school competitions and cultural festivals fill the year.',
    pages: ['kindergarten', 'primary', 'secondary'],
  },
  {
    slug: 'junior-college',
    name: 'SIWS Junior College',
    tagline: 'Choosing a path with confidence',
    text: 'Students moving up from Standard X choose Commerce or Science, with career guidance to help them decide.',
    pages: ['junior-college'],
  },
  {
    slug: 'degree-college',
    name: 'SIWS College (Autonomous)',
    tagline: 'A college that grew with Mumbai’s economy',
    text: 'Founded in 1980 by Shri N.S. Iyengar, the College offers degrees in commerce, management, science and technology, from BMS and B.Com specialisations to B.Sc IT, Computer Science, Data Science and AI, M.Com, M.Sc and PhD. It is NAAC A Grade (CGPA 3.15), ISO 9001:2015 certified, holds UGC 2(f)/12B status, and became Autonomous in 2023. Recruiters include TCS, Accenture, Axis Bank, ICICI Bank and Aditya Birla.',
    pages: ['degree-college'],
  },
  {
    slug: 'arts-centre',
    name: 'SIWS Arts, Fine Arts & Philosophy Centre',
    tagline: 'Culture, free for every SIWS student',
    text: 'Since 1997–98 the Centre has taught Tamil, Malayalam and Sanskrit; Carnatic vocal, veena, violin and Bharatanatyam; and the Bhagavad Gita, every Saturday and free of charge. Forty-eight students have completed its full three-year certificate. Led by Mrs. Bhavana Narayanan, Head.',
    pages: ['arts-centre'],
  },
];

export function findInstitutionPage(slug?: string) {
  return institutionPages.find((page) => page.slug === slug);
}
