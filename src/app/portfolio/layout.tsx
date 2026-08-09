import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Work & Case Studies',
  description:
    'Explore NueEra\'s portfolio of successful projects across web development, mobile apps, digital marketing, and UI/UX design for businesses in India and globally.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio - Our Work & Case Studies | NueEra',
    description:
      'Explore NueEra\'s portfolio of successful projects across web development, mobile apps, digital marketing, and UI/UX design.',
    url: 'https://nueera.io/portfolio',
    siteName: 'NueEra',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://nueera.io/assets/images/img1.webp',
        width: 1200,
        height: 630,
        alt: 'NueEra Portfolio - Our Work & Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Our Work & Case Studies | NueEra',
    description: 'Explore NueEra\'s portfolio of successful client projects.',
    images: ['https://nueera.io/assets/images/img1.webp'],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
