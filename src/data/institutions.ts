import artsCentre from '../assets/photos/institutions/arts-centre/hero-1920.webp';
import degreeCollege from '../assets/photos/institutions/hero/degree-college.webp';
import juniorCollege from '../assets/photos/institutions/junior-college.webp';
import preSchool from '../assets/photos/institutions/pre-school.webp';
import primarySchool from '../assets/photos/institutions/hero/primary.webp';
import secondarySchool from '../assets/photos/institutions/secondary-school.webp';
// 360px copies for the row thumbnails on phones and tablets
import artsCentreThumb from '../assets/photos/institutions/arts-centre-thumb.webp';
import degreeCollegeThumb from '../assets/photos/institutions/degree-college-thumb.webp';
import juniorCollegeThumb from '../assets/photos/institutions/junior-college-thumb.webp';
import preSchoolThumb from '../assets/photos/institutions/pre-school-thumb.webp';
import primarySchoolThumb from '../assets/photos/institutions/primary-school-thumb.webp';
import secondarySchoolThumb from '../assets/photos/institutions/secondary-school-thumb.webp';

/**
 * Preview for an institution: a real SIWS photo (client's, cropped 3:2), or a
 * typographic tile where no authentic photo exists yet.
 */
export type InstitutionVisual =
  | { kind: 'photo'; src: string; thumb: string }
  | { kind: 'type'; lines: string[] };

interface InstitutionContent {
  index: string;
  /** Key into institutionHeroes, for the type and the year it was founded. */
  slug: string;
  name: string;
  category?: string;
  details: string;
  href: string;
  visual: InstitutionVisual;
}

export const institutions = {
  eyebrow: 'Our Institutions',
  titleLines: ['A Complete Path,', 'From Junior KG to PhD.'],
  intro:
    'SIWS runs its institutions across two campuses, Wadala and Matunga. Each keeps its own website; the Society gives a short profile and a clear link.',
  items: [
    {
      index: '01',
      name: 'S.I.W.S. N.R. Swamy College of Commerce & Economics and Smt. Thirumalai College of Science',
      slug: 'degree-college',
      category: 'Degree College',
      details: 'B.Sc. / M.Sc. / B.Com. / M.Com. / Ph.D. · Autonomous · NAAC A Grade',
      href: 'https://siwscollege.edu.in/',
      visual: { kind: 'photo', src: degreeCollege, thumb: degreeCollegeThumb },
    },
    {
      index: '02',
      name: 'S.I.W.S. Junior College',
      slug: 'junior-college',
      category: 'Junior College',
      details: 'Standards XI and XII · Commerce & Science · HSC',
      href: 'https://siwsschool.edu.in/junior-college',
      visual: { kind: 'photo', src: juniorCollege, thumb: juniorCollegeThumb },
    },
    {
      index: '03',
      name: 'S.I.W.S. Secondary School',
      slug: 'secondary',
      details: 'Standards V to X · Wadala · SSC Board',
      href: 'https://siwsschool.edu.in/secondary',
      visual: { kind: 'photo', src: secondarySchool, thumb: secondarySchoolThumb },
    },
    {
      index: '04',
      name: 'S.I.W.S. Primary School',
      slug: 'primary',
      details: 'Standards I to IV · Wadala and Matunga · SSC Board',
      href: 'https://siwsschool.edu.in/primary',
      visual: { kind: 'photo', src: primarySchool, thumb: primarySchoolThumb },
    },
    {
      index: '05',
      name: 'S.I.W.S. Kindergarten',
      slug: 'kindergarten',
      details: 'Jr. KG and Sr. KG · Wadala and Matunga',
      href: 'https://siwsschool.edu.in/kindergarten',
      visual: { kind: 'photo', src: preSchool, thumb: preSchoolThumb },
    },
    {
      index: '06',
      name: 'SIWS Arts, Fine Arts & Philosophy Centre',
      slug: 'arts-centre',
      details: 'Saturday classes · Three-year certificate · Run by the Society',
      href: 'https://siwsschool.edu.in/fine-arts',
      visual: { kind: 'photo', src: artsCentre, thumb: artsCentreThumb },
    },
  ] satisfies InstitutionContent[],
};
