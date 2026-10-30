import fencingBout from '../assets/photos/sports/fencing-bout.webp';
import fencingBout640 from '../assets/photos/sports/fencing-bout-640.webp';
import kgTeam from '../assets/photos/sports/kg-team.webp';
import kgTeam640 from '../assets/photos/sports/kg-team-640.webp';
import footballTeams from '../assets/photos/sports/football-league-teams.webp';
import footballTeams640 from '../assets/photos/sports/football-league-teams-640.webp';
import footballKickoff from '../assets/photos/sports/football-league-kickoff.webp';
import footballKickoff640 from '../assets/photos/sports/football-league-kickoff-640.webp';
import sportsDayPodium from '../assets/photos/sports/sports-day-podium.webp';
import sportsDayPodium640 from '../assets/photos/sports/sports-day-podium-640.webp';
import sportsDayPodium2 from '../assets/photos/sports/sports-day-podium-2.webp';
import sportsDayPodium2640 from '../assets/photos/sports/sports-day-podium-2-640.webp';
import kgRace from '../assets/photos/sports/kg-race.webp';
import kgRace640 from '../assets/photos/sports/kg-race-640.webp';
import kgWinners from '../assets/photos/sports/kg-winners-turf.webp';
import kgWinners640 from '../assets/photos/sports/kg-winners-turf-640.webp';
import trophyTable from '../assets/photos/sports/trophy-table.webp';
import trophyTable640 from '../assets/photos/sports/trophy-table-640.webp';
import yogaHall from '../assets/photos/sports/yoga-hall.webp';
import yogaHall640 from '../assets/photos/sports/yoga-hall-640.webp';
import yogaTurf from '../assets/photos/sports/yoga-turf.webp';
import yogaTurf640 from '../assets/photos/sports/yoga-turf-640.webp';
import sportsDayGroup from '../assets/photos/sports/sports-day-group.webp';
import sportsDayGroup640 from '../assets/photos/sports/sports-day-group-640.webp';

export interface SportsPhoto {
  src: string;
  mobile: string;
  alt: string;
  caption: string;
}

/**
 * Sport across the Society's institutions, as the School and the College
 * publish it on siwsschool.edu.in/sports and siwscollege.edu.in/gymkhana.
 * Every figure, name, placing and date below is the institutions' own.
 */
export const sports = {
  motto: 'Healthy Body, Healthy Mind',
  intro:
    'Sport at SIWS is part of the education, not an extra to it. The School runs a Sports for All policy — every child plays — and its fencers now carry the Society’s name to national championships.',

  /** The School's own figures. */
  figures: [
    { value: '15', label: 'Sports to choose from' },
    { value: '85%+', label: 'Of Std 1 to 10 take part' },
    { value: '300+', label: 'In after-school coaching' },
    { value: '8', label: 'Sports coached regularly' },
  ],

  philosophy: [
    'Sport is taught here for what it builds: discipline, teamwork, leadership and resilience. Under the Sports for All policy every child plays, whatever their standard or ability.',
    'Eight sports are coached regularly, seven of them four days a week after school. Fencing is coached at the SIWS Fencing Center with the Elite Fencing Club.',
  ],

  /**
   * The fifteen sports a child may take, each marked as the School marks it:
   * coached through the year, played as a school team, or offered alongside.
   */
  catalogue: [
    {
      name: 'Fencing',
      feature: true,
      tags: ['Champions', 'Coached'],
      text: 'Coached at the SIWS Fencing Center with the Elite Fencing Club. The women’s team are University of Mumbai champions.',
    },
    { name: 'Football', tags: ['Coached', 'School team'] },
    { name: 'Cricket', tags: ['Coached', 'School team'] },
    { name: 'Basketball', tags: ['Coached', 'School team'] },
    { name: 'Athletics', tags: ['Coached', 'School team'] },
    { name: 'Badminton', tags: ['Coached', 'School team'] },
    { name: 'Table Tennis', tags: ['Coached', 'School team'] },
    { name: 'Chess', tags: ['Coached', 'School team'] },
    { name: 'Volleyball', tags: ['School team'] },
    { name: 'Kho-Kho', tags: ['School team'] },
    { name: 'Kabaddi', tags: [] },
    { name: 'Carrom', tags: [] },
    { name: 'Yoga', tags: [] },
    { name: 'Karate', tags: [] },
    { name: 'Skating', tags: [] },
  ] satisfies { name: string; tags: string[]; feature?: boolean; text?: string }[],

  /** What the School offers, in the three groups it lists them in. */
  school: {
    training: [
      { name: 'Evening coaching', text: 'Regular sessions after school, four days a week for seven of the eight coached sports.' },
      { name: 'Summer Sports Camp', text: 'Fifteen days every April.' },
      { name: 'Fitness and conditioning', text: 'Sessions alongside the sport itself.' },
      { name: 'Talent Identification Camp', text: 'From Standard 3 upwards.' },
      { name: 'Team training', text: 'Special preparation for the DSO and MSSA teams.' },
    ],
    competition:
      'School teams play at U-10, U-12, U-14 and U-16 in Inter-House events, MSSA, DSO Raigad and ZP tournaments, and private inter-school tournaments in Navi Mumbai and Panvel.',
    year: [
      {
        name: 'Annual Sports Day',
        text: 'Held every December with full participation — march past, torch lighting, the oath, aerobic dance, pyramid formation, track and field, and the prize distribution.',
      },
      { name: 'Inter-House Sports Championship', text: 'Run through the year between the school houses.' },
      { name: 'Inter-Class Football League', text: 'Class against class, across the school.' },
      { name: 'Cricket Premier League', text: 'The school’s own cricket season.' },
      { name: 'Chess and Carrom Championship', text: 'Indoor games, played out over the year.' },
      { name: 'International Yoga Day', text: 'Marked across the institutions.' },
    ],
    coaches:
      'Three full-time Physical Education Teachers, with external coaches: BCCI-certified for cricket, MSSA-certified for football and basketball, and a FIDE-rated coach for chess.',
  },

  /** The College's gymkhana, as it describes itself. */
  college: {
    intro:
      'The College gymkhana is on the ground floor: a room and a large hall for indoor games, with an office beside it where students enrol for the outdoor games.',
    sports: ['Cricket', 'Football', 'Basketball', 'Kabaddi', 'Table Tennis', 'Chess', 'Carrom'],
    notes: [
      { name: 'Grounds', text: 'The College rents grounds for cricket and football, and buys or rents the rest of the equipment each year.' },
      { name: 'Coaching', text: 'Some games are taken by professional coaches from outside, others by the College’s physical education teachers. A student of exceptional talent in a specialised sport is given expert coaching.' },
      { name: 'Gymkhana Committee', text: 'Required under University rules, convened by Dr. Satish Bhalekar with six members.' },
      { name: 'Annual Athletic Meet', text: 'Held every December on the College playground.' },
    ],
    fencingCourse:
      'At SIWS College fencing is a two-credit co-curricular course on three programmes: B.Com. (Accounting & Finance), B.Sc. (Data Science) and B.Sc. (Artificial Intelligence).',
  },

  /** Facilities, as the School and College list them. The count leads where there is one. */
  facilities: [
    { value: '1', name: 'Football ground' },
    { value: '2', name: 'Basketball courts' },
    { value: '4', name: 'Badminton courts', detail: 'Indoor hall' },
    { value: '6', name: 'Table tennis tables' },
    { value: '200 m', name: 'Athletic track' },
    { name: 'Cricket practice nets', detail: 'On the school ground' },
    { name: 'Yoga room', detail: 'Classes and International Yoga Day' },
    { name: 'Sports room', detail: 'Fully equipped' },
    {
      name: 'SIWS Fencing Center',
      detail: 'Electronic scoring pistes, with kit for épée, sabre and foil',
    },
    { name: 'College gymkhana', detail: 'Carrom, chess and table tennis, with an enrolment office' },
  ] satisfies { value?: string; name: string; detail?: string }[],

  /** Dated points the two institutions publish. */
  history: [
    {
      year: '2016–17',
      title: 'The Athletic Meet Takes Its Present Form',
      description:
        'Air Vice Marshal C. V. Subramaniam administers the oath at the College Athletic Meet on 8 December 2016, and championship trophies go to Mr. Shijo Shaji and Ms. Mayuri Nikam.',
    },
    {
      year: '2017–18',
      title: 'SIWS Hosts the Inter-Collegiate Chess Tournament',
      description:
        'The College hosts Zone 1 of the University of Mumbai Inter-collegiate Chess Tournament from 26 to 28 July 2017.',
    },
    {
      year: '2018–19',
      title: 'Four Championship Trophies',
      description:
        'Trophies to Mr. Selvestor Serrao and Ms. Pooja D. Nagarajan of the Degree College, and Mr. Ankit Gupta and Ms. Simran Yadav of the Junior College.',
    },
    {
      year: '2019–20',
      title: 'The Meet Opened by the Special Inspector General of Police',
      description:
        'Mr. Krishna Prakash opens the Athletic Meet on 6 December 2019, with the 800 metres run for boys and girls and a race for the non-teaching staff.',
    },
    {
      year: '2023–24',
      title: 'DSO Athletics Overall Champions',
      description:
        'The School takes the DSO Athletics overall championship, and the Inter School Football League runs at the S.I.W.S. Sports Academy.',
    },
    {
      year: '2026',
      title: 'Back at a National University Championship',
      description:
        'The Women’s Fencing Team represents the University of Mumbai at the All India University Fencing Championship in Jammu — the College’s first national university appearance in 28 years.',
    },
  ],

  /** This year's results, as published. */
  current: {
    feature: {
      title: 'University of Mumbai Inter-Collegiate Fencing Championship',
      award: 'First overall — SIWS Women’s Fencing Team',
      text: 'Narmatha Ramakrishna Yadav, Anuja Vinod Lad and Raksha led the team, which went on to represent the University of Mumbai at the All India University Fencing Championship in Jammu.',
    },
    results: [
      { name: 'Anuja Vinod Lad', text: 'Gold, Girls’ Épée, Khelo India Youth Games.' },
      { name: 'Narmatha Ramakrishna Yadav', text: 'Silver, Senior State Fencing Championships.' },
      { name: 'DSO Athletics 2023–24', text: 'Overall champions.' },
      { name: 'DSO Basketball, U-16 Girls', text: 'Winners three years running.' },
      { name: 'MSSA Football, U-14', text: 'Runners-up in 2024.' },
      { name: 'MSSA tournaments', text: 'Best Player awards in football and basketball.' },
    ],
    tally: [
      { value: '100+', label: 'Medals in the last three years' },
      { value: '40+', label: 'Individual medals in the last two' },
      { value: '5', label: 'Represented Raigad District or Mumbai Division' },
      { value: '2', label: 'Represented Maharashtra in Chess, 2024' },
    ],
  },

  /** Names the institutions themselves record. */
  hallOfFame: [
    { year: '2016–17', names: 'Mr. Shijo Shaji (M.Com.) · Ms. Mayuri Nikam (S.Y.B.Com.)', text: 'Championship trophies at the College Athletic Meet.' },
    { year: '2018–19', names: 'Mr. Selvestor Serrao · Ms. Pooja D. Nagarajan', text: 'Championship trophies, Degree College.' },
    { year: '2018–19', names: 'Mr. Ankit Gupta · Ms. Simran Yadav', text: 'Championship trophies, Junior College.' },
    { year: '2026', names: 'Anuja Vinod Lad', text: 'Gold in Girls’ Épée at the Khelo India Youth Games.' },
    { year: '2026', names: 'Narmatha Ramakrishna Yadav', text: 'Silver at the Senior State Fencing Championships.' },
  ],

  alumni:
    'Former students have represented the district in U-19 cricket, won medals at state athletics, earned sports scholarships, and two are now certified coaches.',

  ahead: [
    'Lawn tennis to be introduced.',
    'An inter-school basketball tournament to be hosted.',
    'A bowling machine for the cricket nets.',
    'National-level entries in athletics and chess.',
  ],

  gallery: [
    {
      src: sportsDayPodium,
      mobile: sportsDayPodium640,
      alt: 'Three Primary School girls standing on the first, second and third places of a podium with their medals.',
      caption: 'The podium at the Annual Sports Day',
    },
    {
      src: kgRace,
      mobile: kgRace640,
      alt: 'Rows of Kindergarten children in red and white sports uniforms lined up on the ground before a race.',
      caption: 'Kindergarten, before the race',
    },
    {
      src: footballKickoff,
      mobile: footballKickoff640,
      alt: 'Guests seated at a draped table at the opening of the inter-school football league.',
      caption: 'Opening the S.I.W.S. Sports Academy Inter School Football League',
    },
    {
      src: kgWinners,
      mobile: kgWinners640,
      alt: 'Kindergarten children in sports uniforms holding gold trophies on the turf.',
      caption: 'Kindergarten winners on the turf',
    },
    {
      src: trophyTable,
      mobile: trophyTable640,
      alt: 'A table of gold trophies in front of a banner reading SIWS KG Section Sport’s Day.',
      caption: 'The trophies, before Sports Day',
    },
    {
      src: sportsDayPodium2,
      mobile: sportsDayPodium2640,
      alt: 'Primary School children on the podium with their certificates and medals.',
      caption: 'Another podium, the same morning',
    },
    {
      src: yogaTurf,
      mobile: yogaTurf640,
      alt: 'Junior College students sitting cross-legged on the turf with their eyes closed, meditating.',
      caption: 'Junior College, on the turf',
    },
    {
      src: sportsDayGroup,
      mobile: sportsDayGroup640,
      alt: 'A large group of children and teachers with trophies after a sports event.',
      caption: 'After the prize distribution',
    },
  ] satisfies SportsPhoto[],

  photos: {
    fencing: {
      src: fencingBout,
      mobile: fencingBout640,
      alt: 'Two fencers mid-bout on a piste, with officials watching from the side.',
    },
    kgTeam: {
      src: kgTeam,
      mobile: kgTeam640,
      alt: 'Kindergarten girls in sports uniforms with red headbands, arms around one another.',
    },
    football: {
      src: footballTeams,
      mobile: footballTeams640,
      alt: 'Boys in football kit greeting a guest at the inter-school football league.',
    },
    yoga: {
      src: yogaHall,
      mobile: yogaHall640,
      alt: 'Secondary School students in house-colour shirts meditating in the school hall.',
    },
  },
};
