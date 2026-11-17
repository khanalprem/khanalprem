/**
 * All the words and links on the site live in this file.
 * Edit here; the components only handle layout.
 */

export const site = {
  url: 'https://premkhanal.com.np',
  name: 'Prem Prasad Khanal',
  shortName: 'Prem Khanal',
  role: 'CEO of Nepse Flow Pvt. Ltd.',
  company: { name: 'Nepse Flow Pvt. Ltd.', product: 'NepseFlow', href: 'https://nepseflow.com' },
  description:
    'Prem Prasad Khanal is the CEO of Nepse Flow Pvt. Ltd., a senior software engineer at Danphe Software Labs, and the maker of NepseFlow, GharGuru, Pasalghar and KhelSpot. He has built for the web from Nepal since 2013.',
  intro:
    'I run Nepse Flow Pvt. Ltd., where I build NepseFlow, a market intelligence platform for Nepal’s stock market, and I am a senior software engineer at Danphe Software Labs. I have been making products for the web since 2013.',
  location: {
    label: 'Syangja, Nepal',
    coordinates: '28.10° N, 83.87° E',
    timeZone: 'Asia/Kathmandu',
  },
  startedYear: 2013,
  email: 'khnl.prem@gmail.com',
  phone: { label: '+977 985-6055360', href: 'tel:+9779856055360' },
  // Formspree endpoint carried over from the previous site.
  formEndpoint: 'https://formspree.io/f/xbjwnkkw',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/' },
    { label: 'GitHub', href: 'https://github.com/khanalprem' },
    { label: 'Facebook', href: 'https://www.facebook.com/khnl.prem' },
  ],
};

export const about = [
  'I started as a frontend developer in 2013 and spent most of the years since at Naxa and other Nepali companies, turning dense data into interfaces people can read: maps, survey records, drone imagery, disaster-risk plans.',
  'Since 2022 I have been a senior software engineer at Danphe Software Labs, working with the US company Fluid. I am also the CEO of Nepse Flow Pvt. Ltd. and build products for Nepal across the whole stack: NepseFlow for investors, GharGuru for home services, Pasalghar for online selling and KhelSpot for sports venues. I still care most about the same thing: taking a complicated problem and making the screen in front of it simple.',
];

export type WorkKind = 'React' | 'WordPress' | 'Web';

export type Work = {
  slug: string;
  title: string;
  summary: string;
  kind: WorkKind;
  image: { src: string; width: number; height: number };
  /** Optional link to the live project. Leave out if there isn't one. */
  href?: string;
};

export const work: Work[] = [
  {
    slug: 'geoportal',
    title: 'National Geoportal',
    summary:
      'Update and upgrade of Nepal’s national geoportal, the Survey Department’s clearinghouse for spatial data.',
    kind: 'React',
    image: { src: '/work/geoportal.webp', width: 1400, height: 659 },
  },
  {
    slug: 'fieldsight',
    title: 'FieldSight',
    summary: 'A platform for monitoring projects and field sites remotely.',
    kind: 'Web',
    image: { src: '/work/fieldsight.webp', width: 1292, height: 840 },
  },
  {
    slug: 'geodetic',
    title: 'Geodetic web application',
    summary:
      'Control-point and survey records on a map for the Geodetic Division of the Survey Department.',
    kind: 'React',
    image: { src: '/work/geodetic.webp', width: 1400, height: 670 },
  },
  {
    slug: 'pdra',
    title: 'PDRA tool',
    summary:
      'Participatory Disaster Risk Assessment: a tool for building household preparedness and response plans.',
    kind: 'React',
    image: { src: '/work/pdra.webp', width: 1281, height: 721 },
  },
  {
    slug: 'geonadir',
    title: 'GeoNadir',
    summary: 'A place to store and share drone datasets, browsed on a world map.',
    kind: 'React',
    image: { src: '/work/geonadir.webp', width: 1271, height: 894 },
  },
  {
    slug: 'sakchyam',
    title: 'Sakchyam visualization tool',
    summary: 'Charts and maps for exploring programme data.',
    kind: 'React',
    image: { src: '/work/sakchyam.webp', width: 1292, height: 840 },
  },
  {
    slug: 'zite',
    title: 'Zite',
    summary: 'A remote management and planning platform for teams working across sites.',
    kind: 'React',
    image: { src: '/work/zite.webp', width: 1400, height: 661 },
  },
  {
    slug: 'stunning',
    title: 'Stunning Pro',
    summary: 'A premium WordPress theme for blogging sites.',
    kind: 'WordPress',
    image: { src: '/work/stunning.webp', width: 800, height: 600 },
  },
];

export type Product = {
  name: string;
  summary: string;
  /** What the product is, in two or three words. */
  kind: string;
  /** Shown beside the name, e.g. a role. Optional. */
  note?: string;
  /** Public link. Leave out until the product is live. */
  href?: string;
};

/** Your own products, shown first on the page. */
export const products: Product[] = [
  {
    name: 'NepseFlow',
    kind: 'Stock market intelligence',
    note: 'CEO',
    summary:
      'Live market data, a stock screener, portfolio tracking, broker flow and charting for investors in Nepal’s stock market.',
    href: 'https://nepseflow.com',
  },
  {
    name: 'GharGuru',
    kind: 'Home services marketplace',
    summary:
      'Customers post a household job, from plumbing to cleaning, and verified providers nearby take it on.',
  },
  {
    name: 'Pasalghar',
    kind: 'Multi-vendor marketplace',
    summary:
      'Online selling for Nepal with zero commission on sales, in English and Nepali.',
  },
  {
    name: 'KhelSpot',
    kind: 'Sports venue booking',
    summary: 'Find a venue, book a slot and play, with management tools for the venue’s desk.',
  },
  {
    name: 'Dashy',
    kind: 'WordPress blog theme',
    summary:
      'A clean blog theme with masonry, grid and list layouts, for personal, magazine and lifestyle blogs.',
    href: 'https://wordpress.org/themes/dashy/',
  },
  {
    name: 'Dashy Pro',
    kind: 'Premium WordPress theme',
    summary:
      'The premium edition of Dashy: Gutenberg-ready, set up through the live customizer, with WooCommerce support.',
  },
];

export const experience = [
  { period: '2026 – present', org: 'Nepse Flow Pvt. Ltd.', role: 'Chief executive officer' },
  {
    period: '2022 – present',
    org: 'Danphe Software Labs',
    role: 'Senior software engineer, working with the US company Fluid',
  },
  { period: '2018 – 2022', org: 'Naxa Pvt. Ltd.', role: 'Senior frontend developer, part-time and full-time' },
  { period: '2018 – 2019', org: 'Rillmark Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2018', org: 'Esignature Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2017', org: 'Moonbao Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2013 – 2016', org: 'Media Chautari Pvt. Ltd.', role: 'Senior frontend developer' },
];

/** Years are Bikram Sambat, as on the certificates. */
export const education = [
  { period: '2070 BS', org: 'Waling Multiple Campus', role: 'Bachelor’s degree' },
  { period: '2065 BS', org: 'Pioneer HSS', role: 'Higher Secondary Education Board' },
  { period: '2062 BS', org: 'Pakwadi Bhanjyang HSS', role: 'School Leaving Certificate' },
];

export const toolkit = [
  {
    group: 'Interface',
    items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'jQuery'],
  },
  {
    group: 'Server',
    items: ['Django', 'Django REST Framework', 'Ruby on Rails', 'PostgreSQL', 'Celery', 'Redis', 'Django Channels'],
  },
  { group: 'Mobile', items: ['React Native', 'Expo'] },
  { group: 'Design and CMS', items: ['Figma', 'Adobe XD', 'WordPress'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'GitLab'] },
];

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
];
