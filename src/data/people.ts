import type { Person } from '../components/content/ProfileCard/ProfileCard';
import ananthasubramanian from '../assets/photos/people/ananthasubramanian.webp';
import gsSubramanian from '../assets/photos/people/gs-subramanian.webp';
import iyengar from '../assets/photos/people/iyengar.webp';
import kashivishvanathan from '../assets/photos/people/kashivishvanathan.webp';
import krishnan from '../assets/photos/people/krishnan.webp';
import radhakrishnan from '../assets/photos/people/radhakrishnan.webp';
import ramachandran from '../assets/photos/people/ramachandran.webp';
import rangaraj from '../assets/photos/people/rangaraj.webp';
import sarma from '../assets/photos/people/sarma.webp';
import srinivasan from '../assets/photos/people/srinivasan.webp';
import swamy from '../assets/photos/people/swamy.webp';
import vasudevRao from '../assets/photos/people/vasudev-rao.webp';
import venkatesh from '../assets/photos/people/venkatesh.webp';

/**
 * Names, roles and biographies from the Society's content draft of 12 October
 * 2026, which corrects the college site: the college lists office bearers under
 * "Board of Trustees" and trustees under "Office Bearers". Photographs are the
 * Society's own, from the college's apex body page.
 */
export const peopleSource = 'https://siwscollege.edu.in/about-us/apex-body/';

export const founders: Person[] = [
  {
    name: 'Shri N.V. Sarma',
    role: 'Founder of the Society, 1933, and its first school, 1934',
    bio: 'He believed education was the surest way for a migrant community to build a secure future in Bombay. With a small group of middle-class friends he founded the Society on 25 December 1933, and on 4 July 1934 opened its first primary school in a garage at Shivaji Park, with four pupils. Under his leadership the Society opened a school at Matunga in 1936 and soon made Wadala its home.',
    photo: sarma,
  },
  {
    name: 'Shri N.R. Swamy',
    role: 'In whose memory the College is named',
    bio: 'He came to Bombay from a small South Indian village in 1929, aged 16, just out of high school and at the start of the Great Depression. He began as a stenographer-typist, educated himself, and by 1938 headed a global trading division of a large multinational chemicals firm. He went on to found Ultramarine & Pigments Ltd and Thirumalai Chemicals Ltd. A lifelong champion of education with deep empathy for the poor, he was a founder-trustee of the Thirumalai Charity Trust and served for many years on the Governing Council of the SIWS School.',
    photo: swamy,
  },
  {
    name: 'Shri N.S. Iyengar',
    role: 'Founder of SIWS College, 1980',
    bio: 'A man of vision, humility and gratitude, with a sharp business sense and a generous hand for education. In 1980 he founded the S.I.W.S. College in memory of his brother, Shri N.R. Swamy. The Science college, opened in 1990, carries the name of Smt. Thirumalai. The family’s support continues through endowments such as the Thirumalai Smt. Vedavalli and Shri N.S. Iyengar Corpus Fund.',
    photo: iyengar,
  },
];

export const officeBearers: Person[] = [
  { name: 'Shri R. Radhakrishnan', role: 'Chairman', photo: radhakrishnan },
  { name: 'Dr. V. Rangaraj', role: 'Vice Chairman', photo: rangaraj },
  { name: 'Shri M. Ananthasubramanian', role: 'Hon. General Secretary', photo: ananthasubramanian },
  { name: 'Shri T.V. Krishnan', role: 'Hon. Joint Secretary', photo: krishnan },
  { name: 'Shri G.S. Subramanian', role: 'Hon. Treasurer', photo: gsSubramanian },
];

export const trustees: Person[] = [
  { name: 'Dr. K.M. Venkatesh', role: 'Vice Chairman Emeritus', photo: venkatesh },
  { name: 'Shri V. Ramachandran', role: 'Trustee', photo: ramachandran },
  { name: 'Shri G. Vasudev Rao', role: 'Trustee', photo: vasudevRao },
  { name: 'Shri T.S. Kashivishvanathan', role: 'Trustee', photo: kashivishvanathan },
  // No photograph published yet for these two; the card falls back to a monogram.
  { name: 'Shri Raghunathan Sundaresan', role: 'Trustee' },
  { name: 'Shri S. Srinivasan', role: 'Trustee', photo: srinivasan },
  { name: 'Shri Shivkumar Ramanathan', role: 'Trustee' },
];

export const coOptedTrustees: Person[] = [
  { name: 'Shri S. Rajan', role: 'Co-opted Member' },
];
