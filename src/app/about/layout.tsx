import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NueEra - Our Story & Team',
  description: 'Learn about NueEra, a Pune-based IT & digital solutions agency. Meet our team of 11+ professionals dedicated to building your digital empire.',
  openGraph: {
    title: 'About NueEra - Our Story & Team',
    description: 'Learn about NueEra, a Pune-based IT & digital solutions agency. Meet our team of 11+ professionals dedicated to building your digital empire.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
