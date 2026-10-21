/**
 * The hero for one institution page. Every field is drawn from what the
 * institutions publish themselves; anything they do not publish (a founding
 * year for the school sections, for instance) is simply left out.
 */
import artsCentre from '../assets/photos/institutions/arts-centre/hero-1920.webp';
import artsCentre800 from '../assets/photos/institutions/arts-centre/hero-640.webp';
import degreeCollege from '../assets/photos/institutions/hero/degree-college.webp';
import degreeCollege800 from '../assets/photos/institutions/hero/degree-college-800.webp';
import juniorCollege from '../assets/photos/institutions/hero/junior-college.webp';
import juniorCollege800 from '../assets/photos/institutions/hero/junior-college-800.webp';
import kindergarten from '../assets/photos/institutions/hero/kindergarten.webp';
import kindergarten800 from '../assets/photos/institutions/hero/kindergarten-800.webp';
import primary from '../assets/photos/institutions/hero/primary.webp';
import primary800 from '../assets/photos/institutions/hero/primary-800.webp';
import secondary from '../assets/photos/institutions/hero/secondary.webp';
import secondary800 from '../assets/photos/institutions/hero/secondary-800.webp';

export interface InstitutionHeroContent {
  /** Name as the institution gives it, without the place it stands in. */
  name: string;
  /** Short factual line: what is taught, and on which curriculum. */
  descriptor: string;
  type: string;
  /** Only where the institution publishes one. */
  established?: string;
  image: string;
  imageMobile: string;
  alt: string;
}

export const institutionHeroes: Record<string, InstitutionHeroContent> = {
  kindergarten: {
    name: 'S.I.W.S. Kindergarten',
    descriptor: 'Jr. KG and Sr. KG, at Wadala and Matunga.',
    type: 'Kindergarten',
    image: kindergarten,
    imageMobile: kindergarten800,
    alt: 'Kindergarten children in sports uniform spread across the green artificial-turf play area.',
  },
  primary: {
    name: 'S.I.W.S. Primary School',
    descriptor: 'Standards I to IV, at Wadala and Matunga.',
    type: 'Primary School',
    image: primary,
    imageMobile: primary800,
    alt: 'A Primary classroom of children writing at wooden bench desks, subject charts along the wall behind them.',
  },
  secondary: {
    name: 'S.I.W.S. High School',
    descriptor:
      'Standards V to X, on the Maharashtra State Board curriculum, aligned with NEP 2020.',
    type: 'Secondary School',
    image: secondary,
    imageMobile: secondary800,
    alt: 'Students in football kit lined up on the turf pitch before an inter-school match.',
  },
  'junior-college': {
    name: 'S.I.W.S. Junior College',
    descriptor: 'Standards XI and XII, in the Science and Commerce streams.',
    type: 'Junior College',
    image: juniorCollege,
    imageMobile: juniorCollege800,
    alt: 'The college library, book stacks running down one side of the reading room.',
  },
  'degree-college': {
    name: 'S.I.W.S. N. R. Swamy College of Commerce & Economics and Smt. Thirumalai College of Science',
    descriptor: 'Commerce, Economics and Science, from undergraduate to doctoral study.',
    type: 'Degree College',
    established: '1980',
    image: degreeCollege,
    imageMobile: degreeCollege800,
    alt: 'Students sitting together on the college steps with books and laptops, the brick building behind them.',
  },
  'arts-centre': {
    name: 'SIWS Arts, Fine Arts & Philosophy Centre',
    descriptor: 'Classical languages, music, dance and philosophy, taught on Saturdays.',
    type: 'Arts Centre',
    established: '1997',
    image: artsCentre,
    imageMobile: artsCentre800,
    alt: 'The full company of child dancers in costume and face paint on stage after their Natya Tarang performance.',
  },
};
