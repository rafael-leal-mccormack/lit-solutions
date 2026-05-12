import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Condensed, Instrument_Serif } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
  display: 'swap',
});

const siteUrl = 'https://litsolutions.dev';
const description =
  'Independent full-stack engineering studio in Miami. Fixed-price MVP sprints, AI integrations, custom web apps, Stripe billing, cloud infrastructure, and fractional CTO advisory.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Lit Solutions LLC',
    default: 'Lit Solutions LLC — Full-Stack Engineering Studio',
  },
  description,
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-small.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lit Solutions LLC — Full-Stack Engineering Studio',
    description,
    url: siteUrl,
    siteName: 'Lit Solutions LLC',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Lit Solutions — Engineering for what\'s next',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lit Solutions LLC — Full-Stack Engineering Studio',
    description,
    images: ['/logo.png'],
  },
  keywords: [
    'freelance developer Miami',
    'full-stack engineer for hire',
    'MVP development agency',
    'Next.js developer',
    'React developer for hire',
    'AI integration developer',
    'OpenAI API integration',
    'Stripe payments integration',
    'fractional CTO',
    'fixed price web development',
    'custom web app development',
    'WordPress developer Miami',
  ],
  authors: [{ name: 'Lit Solutions LLC' }],
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lit Solutions LLC',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    email: 'rafael@litsolutions.dev',
    telephone: '+1-305-310-1159',
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Custom Web Application Development',
      'MVP Sprint Development',
      'AI & LLM Integration',
      'Stripe Payments Integration',
      'Cloud & DevOps Engineering',
      'Database Engineering',
      'WordPress Development',
      'Technical Advisory & Fractional CTO',
    ],
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
      'AWS', 'Stripe', 'OpenAI', 'Supabase', 'Vercel',
    ],
    sameAs: [
      'https://github.com/rafael-leal-mccormack',
      'https://www.linkedin.com/in/rafael-leal-mccormack-16b657130/',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable} ${instrumentSerif.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
} 