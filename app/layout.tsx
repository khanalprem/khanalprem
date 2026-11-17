import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/instrument-sans';
import './globals.css';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}, ${site.role.toLowerCase()} in Nepal`,
  description: site.description,
  alternates: { canonical: '/' },
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name}, ${site.role.toLowerCase()} in Nepal`,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }], apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2f5f1' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1b1a' },
  ],
};

// Runs before paint so the saved theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  image: `${site.url}/images/prem.webp`,
  address: { '@type': 'PostalAddress', addressLocality: 'Syangja', addressCountry: 'NP' },
  sameAs: site.social.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
