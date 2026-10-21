/**
 * Contact details as published by the Society on its own sites. The Society
 * itself publishes no separate switchboard number or email address, so the
 * offices below are the school and college numbers it lists; the Contact page
 * asks SIWS to confirm a Society line of its own.
 */
export const site = {
  name: "The South Indians' Welfare Society",
  /** One spelling throughout: Parameswaran Marg, as the Society writes it. */
  address: 'Sewree Estate, Plot 337, Major R. Parameswaran Marg, Wadala (West), Mumbai 400 031',
  /** General enquiries, as published on siwsschool.edu.in. */
  email: 'info@siwsschool.edu.in',
  admissionsEmail: 'admissions@siwsschool.edu.in',
  /** The number used where a single one is needed (the school office). */
  phone: '022 2418 0877',
  offices: [
    { label: 'School office (Secondary)', phone: '022 2418 0877' },
    { label: 'Primary School', phone: '022 2411 4262' },
    { label: 'Kindergarten & Junior College', phone: '+91 98927 03893' },
    { label: 'Degree College', phone: '022 2418 0390' },
  ],
  /**
   * Keyless Google Maps embed of the Society's address. The Maps Embed API
   * needs a key; this older endpoint does not, and shows the same place.
   */
  mapsEmbed:
    'https://maps.google.com/maps?q=Sewree%20Estate%2C%20337%2C%20Major%20R%20Parameswaran%20Marg%2C%20Wadala%20West%2C%20Mumbai%2C%20Maharashtra%20400031&z=16&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Sewree%20Estate%2C%20337%2C%20Major%20R%20Parameswaran%20Marg%2C%20Wadala%20West%2C%20Mumbai%2C%20Maharashtra%20400031',
};
