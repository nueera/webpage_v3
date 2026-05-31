import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Work & Case Studies',
  description: 'Explore NueEra\'s portfolio of successful projects across web development, mobile apps, digital marketing, and UI/UX design for businesses in India.',
  openGraph: {
    title: 'Portfolio - Our Work & Case Studies',
    description: 'Explore NueEra\'s portfolio of successful projects across web development, mobile apps, digital marketing, and UI/UX design for businesses in India.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
