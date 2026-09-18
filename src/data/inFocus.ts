// Photos are the client's (assets/images), resized for the web; the clipping is cropped to the SIWS article.
import press from '../assets/photos/press-ashadhi-ekadashi.webp';
import primarySection from '../assets/photos/primary-section.webp';
import yoga from '../assets/photos/yoga.webp';

export const inFocus = {
  eyebrow: 'In Focus',
  title: 'Stories from our campuses.',
  press: {
    label: 'In the News',
    title: 'Ashadhi Ekadashi celebration at SIWS',
    excerpt:
      'SIWS English Primary School, Matunga, marked Ashadhi Ekadashi with a Wari Palkhi procession led by its students, dressed as Warkaris, carrying saffron flags and Tulsi, and singing devotional songs.',
    source: 'Hindustan Times · Kaleidoscope',
    image: press,
    imageWidth: 1400,
    imageHeight: 626,
    imageAlt:
      'Hindustan Times clipping headlined "Ashadhi Ekadashi celebration at SIWS", with photos of students dressed as Warkaris',
  },
  photos: [
    {
      category: 'Teaching & Learning',
      title: 'Focused Learning in Smart Classrooms',
      image: primarySection,
      imageAlt:
        'Students writing at their desks, seen through an open classroom window, as a teacher reviews a lesson on a smart board',
      imagePosition: '50% 60%',
    },
    {
      category: 'Health & Wellness',
      title: 'Mindfulness and Balance Through Yoga',
      image: yoga,
      imageAlt: 'Rows of college students meditating cross-legged on the campus sports court',
      imagePosition: '50% 65%',
    },
  ],
};
