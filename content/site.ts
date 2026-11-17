/**
 * All the words and links on the site live in this file.
 * Edit here; the components only handle layout.
 */

export const site = {
  url: 'https://premkhanal.com.np',
  name: 'Prem Prasad Khanal',
  shortName: 'Prem Khanal',
  role: 'Full-stack developer',
  description:
    'Prem Prasad Khanal is a full-stack developer from Syangja, Nepal. He has built web interfaces since 2013, from national map portals to WordPress themes.',
  intro:
    'I build web interfaces and full-stack products from Nepal. Since 2013 that has meant national map portals, field-monitoring platforms, data dashboards and WordPress themes.',
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
  'These days I work independently across the whole stack, building digital products for the Nepal market with Django, Next.js and React Native. I still care most about the same thing: taking a complicated problem and making the screen in front of it simple.',
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
    slug: 'dashy-pro',
    title: 'Dashy Pro',
    summary: 'A premium WordPress blog theme.',
    kind: 'WordPress',
    image: { src: '/work/dashy-pro.webp', width: 800, height: 600 },
  },
  {
    slug: 'stunning',
    title: 'Stunning Pro',
    summary: 'A premium WordPress theme for blogging sites.',
    kind: 'WordPress',
    image: { src: '/work/stunning.webp', width: 800, height: 600 },
  },
];

/**
 * Products you are building now. Anything added here appears in a
 * "Building now" block above the selected work. Leave empty to hide it.
 */
export const building: { name: string; summary: string; href?: string }[] = [];

export const experience = [
  { period: '2018 – present', org: 'Naxa Pvt. Ltd.', role: 'Senior frontend developer, part-time and full-time' },
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
    items: ['Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Django Channels'],
  },
  { group: 'Mobile', items: ['React Native', 'Expo'] },
  { group: 'Design and CMS', items: ['Figma', 'Adobe XD', 'WordPress'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'GitLab'] },
];

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
];
