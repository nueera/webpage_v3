import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - IT & Digital Solutions',
  description: 'Explore NueEra\'s comprehensive digital solutions: web development, mobile apps, UI/UX design, growth marketing, branding, software solutions, and more.',
  openGraph: {
    title: 'Our Services - IT & Digital Solutions',
    description: 'Explore NueEra\'s comprehensive digital solutions: web development, mobile apps, UI/UX design, growth marketing, branding, software solutions, and more.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
