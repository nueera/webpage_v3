import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact NueEra for IT & digital solutions. Book a strategy call, send us a message, or chat on WhatsApp. We respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch | NueEra',
    description:
      'Contact NueEra for IT & digital solutions. Book a strategy call, send us a message, or chat on WhatsApp. We respond within 24 hours.',
    url: 'https://nueera.io/contact',
    siteName: 'NueEra',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://nueera.io/assets/images/nueera-logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact NueEra - Get in Touch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch | NueEra',
    description: 'Contact NueEra for IT & digital solutions.',
    images: ['https://nueera.io/assets/images/nueera-logo.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
