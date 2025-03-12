import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Lit Solutions LLC',
    default: 'Lit Solutions LLC',
  },
  description: 'Transform your business with cutting-edge technology solutions. Expert consulting in web development, cloud solutions, and digital transformation.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-small.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Lit Solutions LLC - Tech Consulting',
    description: 'Transform your business with cutting-edge technology solutions. Expert consulting in web development, cloud solutions, and digital transformation.',
    url: 'https://litsolutions-llc.com',
    siteName: 'Lit Solutions LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lit Solutions LLC - Tech Consulting',
    description: 'Transform your business with cutting-edge technology solutions. Expert consulting in web development, cloud solutions, and digital transformation.',
    images: ['/og-image.png'],
  },
  keywords: 'tech consulting, web development, cloud solutions, digital transformation, Miami tech, software development',
  authors: [{ name: 'Lit Solutions LLC' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 