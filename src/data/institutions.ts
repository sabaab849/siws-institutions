import degreeCollege from '../assets/photos/institutions/degree-college.webp';
import juniorCollege from '../assets/photos/institutions/junior-college.webp';
import preSchool from '../assets/photos/institutions/pre-school.webp';
import primarySchool from '../assets/photos/institutions/primary-school.webp';
import secondarySchool from '../assets/photos/institutions/secondary-school.webp';

const collegeUrl = 'https://siwscollege.edu.in/';
const schoolUrl = 'https://siwsschool.edu.in/';

/**
 * Preview for an institution: a real SIWS photo (client's, cropped 3:2), or a
 * typographic tile where no authentic photo exists yet.
 */
export type InstitutionVisual =
  | { kind: 'photo'; src: string }
  | { kind: 'type'; lines: string[] };

interface InstitutionContent {
  index: string;
  name: string;
  category?: string;
  details: string;
  href: string;
  visual: InstitutionVisual;
}

export const institutions = {
  eyebrow: 'Our Institutions',
  titleLines: ['Five institutions.', 'One educational legacy.'],
  intro:
    'From early learning to higher education, SIWS continues to create spaces for generations of students across Mumbai.',
  items: [
    {
      index: '01',
      name: 'S.I.W.S. N.R. Swamy College of Commerce & Economics and Smt. Thirumalai College of Science',
      category: 'Degree College',
      details: 'B.Sc. / M.Sc. / B.Com. / M.Com. / Ph.D. · Autonomous · NAAC A Grade',
      href: collegeUrl,
      visual: { kind: 'photo', src: degreeCollege },
    },
    {
      index: '02',
      name: 'S.I.W.S. N.R. Swamy College of Commerce & Economics and Smt. Thirumalai College of Science',
      category: 'Junior College',
      details: 'HSC Commerce & Science · Maharashtra State Board',
      href: collegeUrl,
      visual: { kind: 'photo', src: juniorCollege },
    },
    {
      index: '03',
      name: 'S.I.W.S. Secondary School',
      details: 'Secondary Education · K.G. to Class X · SSC Board',
      href: schoolUrl,
      visual: { kind: 'photo', src: secondarySchool },
    },
    {
      index: '04',
      name: 'S.I.W.S. Primary School',
      details: 'Primary Education · K.G. to Class IV · SSC Board',
      href: schoolUrl,
      visual: { kind: 'photo', src: primarySchool },
    },
    {
      index: '05',
      name: 'S.I.W.S. Pre-School',
      details: 'Early Years · Nursery & Kindergarten · Foundation for Life',
      href: schoolUrl,
      visual: { kind: 'photo', src: preSchool },
    },
  ] satisfies InstitutionContent[],
};
