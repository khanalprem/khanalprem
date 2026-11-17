import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { expertise, site } from '@/content/site';

// One variable file covers every weight and width used on the page. Loading it
// through next/font preloads it and sizes the fallback to match, so the
// headline neither waits for the font nor jumps when it arrives.
const plex = localFont({
  src: '../node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-standard-normal.woff2',
  weight: '100 700',
  display: 'swap',
  variable: '--font-plex',
  declarations: [{ prop: 'font-stretch', value: '75% 100%' }],
  adjustFontFallback: 'Arial',
});

const title = `${site.name}, ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: '/' },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'profile',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    title,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}: ${site.headline}` }],
  },
  twitter: { card: 'summary_large_image', title, description: site.description, images: ['/og.png'] },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }], apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6f9' },
    { media: '(prefers-color-scheme: dark)', color: '#090f1b' },
  ],
};

// Runs before paint so the saved theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')})()`;

const personId = `${site.url}/#person`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profile`,
      url: site.url,
      name: title,
      description: site.description,
      isPartOf: { '@id': `${site.url}/#website` },
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      jobTitle: 'Founder and Chief Executive Officer',
      worksFor: { '@type': 'Organization', name: site.company.name, url: site.company.href },
      email: `mailto:${site.email}`,
      image: `${site.url}/images/prem.webp`,
      address: { '@type': 'PostalAddress', addressLocality: 'Syangja', addressCountry: 'NP' },
      knowsAbout: expertise.map((area) => area.title),
      sameAs: site.social.map((s) => s.href),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plex.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[0.7rem] focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
