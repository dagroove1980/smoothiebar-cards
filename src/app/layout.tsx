import type { Metadata } from 'next';
import { Poppins, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'SmoothieBarGuide — Curated Smoothie & Juice Recipes',
    template: '%s | SmoothieBarGuide',
  },
  description:
    'Curated smoothie and juice recipes with full ingredient lists, nutrition info, and step-by-step blending instructions. Browse by goal, flavor, or diet.',
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://smoothie-bar-guide.com'
  ),
  openGraph: {
    siteName: 'SmoothieBarGuide',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3452665186406442"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
