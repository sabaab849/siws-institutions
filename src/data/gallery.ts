import classroom from '../assets/photos/classroom.webp';
import cultural from '../assets/photos/cultural.webp';
import hike from '../assets/photos/hike.webp';
import press from '../assets/photos/press-ashadhi-ekadashi.webp';
import primarySection from '../assets/photos/primary-section.webp';
import sports from '../assets/photos/sports.webp';
import yoga from '../assets/photos/yoga.webp';
import juniorCollege from '../assets/photos/institutions/junior-college.webp';
import preSchool from '../assets/photos/institutions/pre-school.webp';
import primarySchool from '../assets/photos/institutions/primary-school.webp';
import secondarySchool from '../assets/photos/institutions/secondary-school.webp';

export const galleryCategories = ['Institutions', 'Campus Life', 'Celebrations', 'Press'] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Taller frames break up the grid; used for portrait-ish photographs. */
  tall?: boolean;
}

/** The Society's own photographs, with the captions already approved for the site. */
export const galleryItems: GalleryItem[] = [
  {
    src: classroom,
    alt: 'Primary school students in uniform working at their desks in a classroom',
    caption: 'Fostering intellectual discovery and research',
    category: 'Campus Life',
    tall: true,
  },
  {
    src: cultural,
    alt: 'Young students in colourful traditional costume performing a folk dance on stage',
    caption: 'Celebrating heritage and artistic expression',
    category: 'Celebrations',
  },
  {
    src: sports,
    alt: "Young students in sports kit holding trophies on a winners' podium",
    caption: 'Excellence, teamwork and physical discipline',
    category: 'Campus Life',
  },
  {
    src: hike,
    alt: 'Students and teachers on a guided nature trail, examining plants with their guide',
    caption: 'Into the field: discovering the natural world',
    category: 'Campus Life',
  },
  {
    src: primarySection,
    alt: 'Students writing at their desks as a teacher reviews a lesson on a smart board',
    caption: 'Focused learning in smart classrooms',
    category: 'Campus Life',
  },
  {
    src: yoga,
    alt: 'Rows of college students meditating cross-legged on the campus sports court',
    caption: 'Mindfulness and balance through yoga',
    category: 'Campus Life',
    tall: true,
  },
  {
    src: press,
    alt: 'Hindustan Times clipping headlined "Ashadhi Ekadashi celebration at SIWS"',
    caption: 'Ashadhi Ekadashi celebration, reported in the Hindustan Times',
    category: 'Press',
  },
  {
    src: juniorCollege,
    alt: 'A laboratory at the Junior College',
    caption: 'Junior College',
    category: 'Institutions',
  },
  {
    src: secondarySchool,
    alt: 'A laboratory at the Secondary School',
    caption: 'Secondary School',
    category: 'Institutions',
  },
  {
    src: primarySchool,
    alt: 'Primary School students at work',
    caption: 'Primary School',
    category: 'Institutions',
  },
  {
    src: preSchool,
    alt: 'Kindergarten children in their classroom',
    caption: 'Kindergarten',
    category: 'Institutions',
  },
];
