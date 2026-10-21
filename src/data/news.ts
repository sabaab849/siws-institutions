/**
 * News from the institutions' own sites (siwsschool.edu.in, read 19 October
 * 2026), so the Society's news pages are not empty while it decides what it
 * wants to announce itself. Every item is published by the institution named,
 * and links back to the page it came from.
 *
 * When SIWS supplies its own items, add them here: an institution, a date
 * where there is one, a headline, a sentence or two, and the page to link to.
 * Items without a date are shown after the dated ones, in the order below.
 */
import dandiya from '../assets/photos/news/dandiya.webp';
import dandiya384 from '../assets/photos/news/dandiya-384.webp';
import fancyDress from '../assets/photos/news/fancy-dress.webp';
import fancyDress384 from '../assets/photos/news/fancy-dress-384.webp';
import fencingGold from '../assets/photos/news/fencing-gold.webp';
import fencingGold384 from '../assets/photos/news/fencing-gold-384.webp';
import josephitePrizes from '../assets/photos/news/josephite-prizes.webp';
import josephitePrizes384 from '../assets/photos/news/josephite-prizes-384.webp';
import mentalMaths from '../assets/photos/news/mental-maths.webp';
import mentalMaths384 from '../assets/photos/news/mental-maths-384.webp';
import natyaTarangCompany from '../assets/photos/institutions/arts-centre/hero-640.webp';
import natyaTarangFirstPrize from '../assets/photos/institutions/arts-centre/natya-tarang-first-prize.webp';
import natyaTarangFirstPrize640 from '../assets/photos/institutions/arts-centre/natya-tarang-first-prize-640.webp';
import orientation from '../assets/photos/institutions/gallery/jc-orientation.webp';
import orientation640 from '../assets/photos/institutions/gallery/jc-orientation-640.webp';
import sscToppers from '../assets/photos/events/ssc-toppers-2026.webp';
import sscToppers640 from '../assets/photos/events/ssc-toppers-2026-640.webp';
import swachhta from '../assets/photos/events/swachhta-monitor-2023.webp';
import swachhta640 from '../assets/photos/events/swachhta-monitor-2023-640.webp';

export interface NewsImage {
  src: string;
  /** Smaller copy, for phones and tablets. */
  mobile: string;
  alt: string;
  /** object-position, where a square photograph would lose faces to the crop. */
  position?: string;
}

export interface NewsItem {
  /** Which institution published it. */
  institution: string;
  /** ISO date, where the institution publishes one; used only for ordering. */
  date?: string;
  /** The date as it should read on the page. */
  dateLabel?: string;
  /** The institution's own label, where it gives one. */
  category?: string;
  title: string;
  text: string;
  /** The page it was published on. */
  href: string;
  /** The photograph the institution published with it, where there is one. */
  image?: NewsImage;
}

const primaryNews = 'https://siwsschool.edu.in/primary/news';
const kindergartenNews = 'https://siwsschool.edu.in/kindergarten/news';
const secondaryNews = 'https://siwsschool.edu.in/secondary/news';
const juniorCollegeNews = 'https://siwsschool.edu.in/junior-college/news';

export const newsItems: NewsItem[] = [
  {
    institution: 'Primary School',
    date: '2026-10-17',
    dateLabel: '17 October 2026',
    title: 'Sharad Navratri, Celebrated With Dandiya',
    text: 'The Primary Section marked Sharad Navratri with a dandiya celebration.',
    href: primaryNews,
    image: {
      src: dandiya,
      mobile: dandiya384,
      alt: 'Dandiya at the Primary Section’s Sharad Navratri celebration.',
    },
  },
  {
    institution: 'Kindergarten',
    date: '2026-10-09',
    dateLabel: '9 October 2026',
    category: 'Achievement',
    title: 'First Prize in Fancy Dress at St. Joseph’s High School',
    text: 'Thevar Eniya Subramanian won first prize in the fancy dress competition held at St. Joseph’s High School, Wadala.',
    href: kindergartenNews,
    // The school publishes no photograph of the St. Joseph's competition, so
    // this is its own fancy dress competition, from the Kindergarten gallery.
    image: {
      src: fancyDress,
      mobile: fancyDress384,
      alt: 'Kindergarten children in fancy dress with their entry numbers pinned on, with their teachers.',
    },
  },
  {
    institution: 'Primary School',
    date: '2026-10-09',
    dateLabel: '9 October 2026',
    category: 'Achievement',
    title: 'Prizes at the Josephite Inter-school Competition',
    text: 'Students from Grades 1 to 4 took part in the St. Joseph inter-school competitions and won prizes in several categories.',
    href: primaryNews,
    image: {
      src: josephitePrizes,
      mobile: josephitePrizes384,
      alt: 'Isma Khan with her certificate and trophy for third prize in the greeting card competition at the Josephite Festival, beside her teacher.',
    },
  },
  {
    institution: 'Junior College',
    date: '2026-10-03',
    dateLabel: '3 October 2026',
    category: 'Sport',
    title: 'Gold and Silver at the District Fencing Competition',
    text: 'Devayani Balekar of Standard XI, Commerce won gold in E.P. and silver in Foil at the district-level competition at the Rajiv Gandhi Sports Complex, Dharavi, and is selected for the divisional level.',
    href: juniorCollegeNews,
    image: {
      src: fencingGold,
      mobile: fencingGold384,
      alt: 'Devayani Balekar in fencing whites with three officials, in front of the Mumbai Fencing Association banner at the district competition.',
    },
  },
  {
    institution: 'Primary School',
    date: '2026-07-26',
    dateLabel: '26 July 2026',
    title: 'Special Prize for Costume and Props at Natya Tarang',
    text: 'Twenty children of the Primary Section, Matunga performed the Dangi folk dance. Their costumes and props took a special award and a prize of ₹5,000.',
    href: primaryNews,
    image: {
      src: natyaTarangCompany,
      mobile: natyaTarangCompany,
      alt: 'The full company of child dancers in costume and face paint on stage at Natya Tarang.',
    },
  },
  {
    institution: 'Junior College',
    date: '2026-07-15',
    dateLabel: '15 July 2026',
    title: 'Orientation for the New Intake',
    text: 'The college hall was full for the orientation programme at the start of the academic year: the two years ahead, how the college runs, and who to go to.',
    href: juniorCollegeNews,
    image: {
      src: orientation,
      mobile: orientation640,
      alt: 'The college hall filled with seated students listening to a speaker at the orientation programme.',
    },
  },
  {
    institution: 'Kindergarten',
    date: '2025-12-31',
    dateLabel: '2025',
    title: 'Gold Medals at the Ignited Mind Lab Mental Maths Competition',
    text: 'Eleven children came back with a Certificate of Achievement and a gold medal each, having secured an A grade in the Jr. KG and Sr. KG rounds.',
    href: kindergartenNews,
    image: {
      src: mentalMaths,
      mobile: mentalMaths384,
      alt: 'Eleven Kindergarten children in yellow and green uniform holding their certificates of achievement and gold medals.',
    },
  },
  {
    institution: 'Secondary School',
    title: '99.53% in the S.S.C. Examination 2026',
    text: '215 students appeared and 214 passed: 60 with Distinction, 99 in the First Class and 54 in the Second Class.',
    href: secondaryNews,
    image: {
      src: sscToppers,
      mobile: sscToppers640,
      alt: 'Three SIWS High School students in the school hall, each holding a bouquet and an award after the 2026 SSC results.',
      // A square photograph in a 3:2 frame: hold the crop high so no face is lost
      position: '50% 15%',
    },
  },
  {
    institution: 'Secondary School',
    title: 'Scholarship Examination Qualifiers, 2025–26',
    text: 'Seven students qualified for the Pre-Upper Primary (Standard V) and Pre-Secondary (Standard VIII) Scholarship Examinations — five in Standard V and two in Standard VIII.',
    href: secondaryNews,
  },
  {
    institution: 'Primary School',
    title: 'First Place at Natya Tarang 2026',
    text: 'The Primary Section’s dancers took first place in Category A, Pre-Primary to Standard IV, and came back with a trophy and a cheque for ₹20,000.',
    href: primaryNews,
    image: {
      src: natyaTarangFirstPrize,
      mobile: natyaTarangFirstPrize640,
      alt: 'Staff and children in dance costume on stage with the trophy and a giant cheque for twenty thousand rupees.',
    },
  },
  {
    institution: 'Secondary School',
    title: 'Amongst the 100 Best Schools in Maharashtra',
    text: 'S.I.W.S. High School was certified under #SwachhtaMonitor 2023 by the School Education and Sports Department, Government of Maharashtra.',
    href: secondaryNews,
    image: {
      src: swachhta,
      mobile: swachhta640,
      alt: 'The framed Government of Maharashtra certificate naming S.I.W.S. High School among the 100 best schools under #SwachhtaMonitor.',
    },
  },
];

/**
 * The home page carries the newest item from each section, so all four are
 * represented rather than whichever section posted most often.
 */
export const latestNews: NewsItem[] = Object.values(
  newsItems.reduce<Record<string, NewsItem>>((newest, item) => {
    const held = newest[item.institution];
    if (!held || (item.date ?? '') > (held.date ?? '')) newest[item.institution] = item;
    return newest;
  }, {}),
).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
