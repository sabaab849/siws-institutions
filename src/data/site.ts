export interface LinkItem {
  label: string;
  href: string;
  /** Shows the arrow used for portal / outbound links. */
  external?: boolean;
}

// '#' hrefs are placeholders until the real URLs are provided.
export const site = {
  name: "The South Indians' Welfare Society",
  signInHref: '#',
  address: 'Plot 337, Major R. Parameshwaran Marg, Wadala (West), Mumbai 400 031',
  email: 'info@siws.edu',
  phone: '+91 22 2411 2345',
};

export const primaryNav: LinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Institutions', href: '#institutions' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];
