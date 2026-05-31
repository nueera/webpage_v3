import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact NueEra for IT & digital solutions. Book a strategy call, send us a message, or chat on WhatsApp. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact NueEra for IT & digital solutions. Book a strategy call, send us a message, or chat on WhatsApp. We respond within 24 hours.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
