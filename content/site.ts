/**
 * All the words and links on the site live in this file.
 * Edit here; the components only handle layout.
 */

export const site = {
  url: 'https://premkhanal.com.np',
  name: 'Prem Prasad Khanal',
  shortName: 'Prem Khanal',
  role: 'Founder of Nepse Flow Pvt. Ltd.',
  company: { name: 'Nepse Flow Pvt. Ltd.', product: 'NepseFlow', href: 'https://nepseflow.com' },
  description:
    'Prem Prasad Khanal is the founder of Nepse Flow Pvt. Ltd. and a full-stack and AI engineer who turns ideas into products: NepseFlow for investors, BankBI for banks, and the Pasalghar, GharGuru and KhelSpot marketplaces. On the web since 2013.',
  headline: 'I turn ideas into products that make an impact.',
  roles: ['Founder', 'Product Builder', 'Full-Stack & AI Engineer'],
  intro:
    'I build digital products from the ground up — combining technology, product thinking, and business strategy to solve real-world problems. Building for the web since 2013.',
  location: {
    label: 'Syangja, Nepal',
    coordinates: '28.10° N, 83.87° E',
    timeZone: 'Asia/Kathmandu',
  },
  startedYear: 2013,
  email: 'khnl.prem@gmail.com',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/' },
    { label: 'GitHub', href: 'https://github.com/khanalprem' },
    { label: 'Facebook', href: 'https://www.facebook.com/khnl.prem' },
  ],
};

/** A screenshot: the full capture, and an 800px-wide copy in a `small/` folder beside it. */
export type Shot = { src: string; small: string; width: number; height: number };

/** The product shown first and in full. */
export const flagship = {
  slug: 'nepseflow',
  name: 'NepseFlow',
  kind: 'Market intelligence for the Nepal Stock Exchange',
  href: 'https://nepseflow.com',
  summary:
    'A subscription platform for NEPSE investors: live and historical market data, a charting workspace, screeners and ratings, broker flow, alerts, portfolio tools and an AI assistant.',
  problem:
    'Following the Nepal Stock Exchange means stitching together prices, company financials and broker activity from many separate sites. NepseFlow puts them in one workspace built for Nepali investors.',
  role:
    'Founder of Nepse Flow Pvt. Ltd. I designed and built the product myself: the Rails API and data pipeline, the Next.js web app and a React Native app.',
  capabilities: [
    {
      title: 'Live market data',
      detail: 'Live prices during the session and an end-of-day archive, drawn from five data sources.',
    },
    {
      title: 'Charting workspace',
      detail: 'Twenty indicators, with chart-pattern, candlestick, ICT/SMC and Elliott-wave overlays.',
    },
    {
      title: 'Screener and ratings',
      detail: 'A stock screener, transparent ratings and a rules-based scanner checked against backtests.',
    },
    {
      title: 'Broker flow',
      detail: 'Broker leaderboards, accumulation tracking and bulk trades.',
    },
    {
      title: 'Portfolio',
      detail: 'FIFO lots, holdings import, a health report and CSV export.',
    },
    {
      title: 'Flow AI',
      detail: 'An assistant that answers investors’ questions from NepseFlow’s own data through tool calls.',
    },
  ],
  stack: ['Ruby on Rails 8', 'PostgreSQL', 'Redis', 'Solid Queue', 'Next.js', 'TypeScript', 'React Native'],
  shots: {
    primary: {
      src: '/products/nepseflow-market.webp',
      small: '/products/small/nepseflow-market.webp',
      width: 1600,
      height: 1000,
      alt: 'NepseFlow market page: the NEPSE index with a 30-session chart, advancing and declining counts, and a sector heatmap',
    },
    secondary: {
      src: '/products/nepseflow-stock.webp',
      small: '/products/small/nepseflow-stock.webp',
      width: 1300,
      height: 1250,
      alt: 'NepseFlow company page for Nabil Bank: price, peer ranking, technical rating and key statistics',
    },
  } satisfies Record<string, Shot & { alt: string }>,
};

export type Product = {
  slug: string;
  name: string;
  /** What the product is, in two or three words. */
  kind: string;
  summary: string;
  capabilities: string[];
  stack: string[];
  /** App icon in public/products/. */
  icon?: string;
  /** Screenshot in public/products/, with a note on what it shows. */
  shot?: Shot & { alt: string; note?: string };
  /** Public link. Leave out until the product is live. */
  href?: string;
};

/** Your other products, in the order they appear. */
export const products: Product[] = [
  {
    slug: 'bankbi',
    name: 'BankBI',
    kind: 'Banking analytics',
    summary:
      'A business intelligence platform for banks in Nepal: dashboards and pivot explorers over transactions, loans and deposits.',
    capabilities: [
      'Executive, branch, customer, financial and loan-risk dashboards',
      'Pivot explorer over loans and deposits, with period comparisons',
      'Role-based access scoped to a user’s branches',
    ],
    stack: ['Ruby on Rails 8', 'PostgreSQL', 'Redis', 'Next.js', 'ECharts'],
    shot: {
      src: '/products/bankbi-executive.webp',
      small: '/products/small/bankbi-executive.webp',
      width: 1600,
      height: 1000,
      alt: 'BankBI executive overview: revenue, profit, loan and deposit figures with trend charts and capital ratios',
      note: 'Executive overview from the demo build, with sample data.',
    },
  },
  {
    slug: 'gharguru',
    name: 'GharGuru',
    kind: 'Home services marketplace',
    summary:
      'Customers post a household job, from plumbing to cleaning, and verified providers nearby take it on.',
    capabilities: [
      'Job posts that verified providers accept',
      'Chat between customer and provider',
      'eSewa and Khalti payments with a wallet ledger',
    ],
    stack: ['Django', 'Channels', 'Celery', 'PostGIS', 'Next.js', 'React Native'],
    icon: '/products/gharguru-icon.webp',
  },
  {
    slug: 'pasalghar',
    name: 'Pasalghar',
    kind: 'Multi-vendor marketplace',
    summary: 'Online selling for Nepal with zero commission on sales, in English and Nepali.',
    capabilities: [
      'Storefront, vendor and admin portals',
      'Phone and OTP sign-in',
      'Cash on delivery, eSewa, Khalti and Fonepay',
    ],
    stack: ['Django', 'Celery', 'PostGIS', 'Next.js', 'React Native'],
    icon: '/products/pasalghar-icon.webp',
  },
  {
    slug: 'khelspot',
    name: 'KhelSpot',
    kind: 'Sports venue booking',
    summary: 'Find a venue, book a slot and play, with management tools for the venue’s desk.',
    capabilities: [
      'Slot availability worked out on the server, so a court is never double-booked',
      'eSewa and Khalti checkout, confirmed with the gateway',
      'Desk check-in by booking reference or QR code',
    ],
    stack: ['Django', 'Celery', 'PostgreSQL', 'Next.js', 'React Native'],
    icon: '/products/khelspot-icon.webp',
  },
];

/** Earlier products, mentioned in a line under the others. */
export const themes =
  'Earlier, I made Dashy and Dashy Pro: WordPress blog themes with masonry, grid and list layouts, the Pro edition with WooCommerce support.';

export type WorkKind = 'React' | 'Liquid' | 'WordPress' | 'Web';

export type Work = {
  slug: string;
  title: string;
  summary: string;
  kind: WorkKind;
  /** Screenshot in public/work/. */
  image: Shot;
  /** Optional link to the live project. Leave out if there isn't one. */
  href?: string;
};

export const work: Work[] = [
  {
    slug: 'yoli',
    title: 'Yoli',
    summary:
      'Liquid storefront theme for Yoli, a nutritional supplements brand. Built with the team at Fluid.',
    kind: 'Liquid',
    image: { src: '/work/yoli.webp', small: '/work/small/yoli.webp', width: 1600, height: 1000 },
    href: 'https://yoli.com/',
  },
  {
    slug: 'make-wellness',
    title: 'MAKE Wellness',
    summary:
      'Liquid theme for MAKE Wellness, a peptide supplements and skincare brand. Built with the team at Fluid.',
    kind: 'Liquid',
    image: { src: '/work/make-wellness.webp', small: '/work/small/make-wellness.webp', width: 1600, height: 1000 },
    href: 'https://meet.makewellness.com/?referral=MAKEshop',
  },
  {
    slug: 'zite',
    title: 'Zite',
    summary: 'A remote management and planning platform for teams working across sites.',
    kind: 'React',
    image: { src: '/work/zite.webp', small: '/work/small/zite.webp', width: 1400, height: 661 },
  },
  {
    slug: 'fieldsight',
    title: 'FieldSight',
    summary: 'A platform for monitoring projects and field sites remotely.',
    kind: 'Web',
    image: { src: '/work/fieldsight.webp', small: '/work/small/fieldsight.webp', width: 1292, height: 840 },
  },
  {
    slug: 'geonadir',
    title: 'GeoNadir',
    summary: 'A place to store and share drone datasets, browsed on a world map.',
    kind: 'React',
    image: { src: '/work/geonadir.webp', small: '/work/small/geonadir.webp', width: 1271, height: 894 },
  },
  {
    slug: 'sakchyam',
    title: 'Sakchyam visualization tool',
    summary: 'Charts and maps for exploring programme data.',
    kind: 'React',
    image: { src: '/work/sakchyam.webp', small: '/work/small/sakchyam.webp', width: 1292, height: 840 },
  },
  {
    slug: 'stunning',
    title: 'Stunning Pro',
    summary: 'A premium WordPress theme for blogging sites.',
    kind: 'WordPress',
    image: { src: '/work/stunning.webp', small: '/work/small/stunning.webp', width: 800, height: 600 },
  },
];

export const about = [
  'I started as a frontend developer in 2013 and spent most of the next decade at Naxa and other Nepali companies, turning dense data into interfaces people can read: maps, survey records, drone imagery, disaster-risk plans.',
  'From 2022 to 2026 I was a senior software engineer at Danphe Software Labs, working with the US company Fluid on Liquid themes for its commerce platform.',
  'Today I run Nepse Flow Pvt. Ltd. and work across the whole stack. NepseFlow and BankBI run on Ruby on Rails; GharGuru, Pasalghar and KhelSpot run on Django. I build AI into the products too: Flow AI, NepseFlow’s assistant, answers investors’ questions from the platform’s own data. What I care about has not changed: take a complicated problem and make the screen in front of it simple.',
];

/** Each area is backed by work shown on this page. */
export const expertise = [
  {
    title: 'Product engineering, end to end',
    detail:
      'Rails or Django on the server, Next.js on the web, and React Native where a product needs an app. Five products built this way, from data model to interface.',
  },
  {
    title: 'Financial and market data',
    detail:
      'NepseFlow turns five market data sources into live prices, financials and broker flow. BankBI turns a bank’s transactions, loans and deposits into dashboards.',
  },
  {
    title: 'Applied AI',
    detail:
      'Flow AI answers investors’ questions from NepseFlow’s own data through tool calls, on a provider layer that can switch model vendors. Daily market recaps are drafted by AI and checked by a person before they publish.',
  },
  {
    title: 'Data interfaces and maps',
    detail:
      'Years of putting field surveys, drone imagery and programme data on maps and charts that people can read.',
  },
  {
    title: 'Marketplaces and payments',
    detail:
      'Checkout through eSewa, Khalti and Fonepay, wallets and subscriptions, and storefronts in English and Nepali.',
  },
  {
    title: 'Product strategy',
    detail:
      'As founder of Nepse Flow I decide what gets built, how it is priced and when it ships. NepseFlow runs on four subscription plans, from free to advanced.',
  },
];

export type Entry = { period: string; org: string; role: string };

export const experience: Entry[] = [
  { period: '2026 – present', org: 'Nepse Flow Pvt. Ltd.', role: 'Founder' },
  {
    period: '2022 – 2026',
    org: 'Danphe Software Labs',
    role: 'Senior software engineer with the US company Fluid, building Liquid themes for its platform',
  },
  { period: '2018 – 2022', org: 'Naxa Pvt. Ltd.', role: 'Senior frontend developer, part-time and full-time' },
  { period: '2018 – 2019', org: 'Rillmark Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2018', org: 'Esignature Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2017', org: 'Moonbao Pvt. Ltd.', role: 'Senior frontend developer' },
  { period: '2013 – 2016', org: 'Media Chautari Pvt. Ltd.', role: 'Senior frontend developer' },
];

/** Years are Bikram Sambat, as on the certificates. */
export const education: Entry[] = [
  { period: '2070 BS', org: 'Waling Multiple Campus', role: 'Bachelor’s degree' },
  { period: '2065 BS', org: 'Pioneer HSS', role: 'Higher Secondary Education Board' },
  { period: '2062 BS', org: 'Pakwadi Bhanjyang HSS', role: 'School Leaving Certificate' },
];

export const toolkit = [
  {
    group: 'Interface',
    items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Liquid', 'jQuery'],
  },
  {
    group: 'Server',
    items: ['Ruby on Rails', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Django Channels'],
  },
  { group: 'AI', items: ['LLM APIs', 'Tool calling', 'AI assistants'] },
  { group: 'Mobile', items: ['React Native', 'Expo'] },
  { group: 'Design and CMS', items: ['Figma', 'Adobe XD', 'WordPress'] },
  { group: 'Workflow', items: ['Git', 'GitHub', 'GitLab'] },
];

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Client work', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];
