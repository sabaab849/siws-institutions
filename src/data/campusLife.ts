// Photos are the client's (assets/images), resized for the web; Figma has grey placeholders.
import classroom from '../assets/photos/classroom.webp';
import cultural from '../assets/photos/cultural.webp';
import hike from '../assets/photos/hike.webp';
import sports from '../assets/photos/sports.webp';

export const campusLife = {
  eyebrow: 'Campus Life',
  title: 'Beyond the classroom.',
  feature: {
    category: 'Academic Development',
    title: 'Fostering Intellectual Discovery & Research',
    image: classroom,
    imageAlt: 'Primary school students in uniform working at their desks in a classroom',
    imagePosition: '50% 70%',
  },
  highlights: [
    {
      category: 'Cultural & Arts',
      title: 'Celebrating Heritage and Artistic Expression',
      image: cultural,
      imageAlt: 'Young students in colourful traditional costume performing a folk dance on stage',
      imagePosition: '50% 60%',
    },
    {
      category: 'Athletics & Sports',
      title: 'Excellence, Teamwork, & Physical Discipline',
      image: sports,
      imageAlt: "Young students in sports kit holding trophies on a winners' podium",
      imagePosition: '50% 30%',
    },
  ],
  // Replaces Figma's "Community & Welfare" caption: none of the photos shows welfare work.
  community: {
    category: 'Outdoor Learning',
    title: 'Into the Field: Discovering the Natural World',
    description:
      'Guided nature trails and field visits where students observe, ask questions, and learn first-hand.',
    image: hike,
    imageAlt: 'Students and teachers on a guided nature trail, examining plants with their guide',
    imagePosition: '50% 35%',
  },
};
