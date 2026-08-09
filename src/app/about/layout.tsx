import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NueEra - Our Story & Team',
  description:
    'Learn about NueEra, a Pune-based IT & digital solutions agency. Meet our team of 11+ professionals dedicated to building your digital empire.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NueEra - Our Story & Team',
    description:
      'Learn about NueEra, a Pune-based IT & digital solutions agency. Meet our team of 11+ professionals dedicated to building your digital empire.',
    url: 'https://nueera.io/about',
    siteName: 'NueEra',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://nueera.io/assets/images/about.webp',
        width: 1200,
        height: 630,
        alt: 'About NueEra - Our Story & Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NueEra - Our Story & Team',
    description: 'Learn about NueEra, a Pune-based IT & digital solutions agency.',
    images: ['https://nueera.io/assets/images/about.webp'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
