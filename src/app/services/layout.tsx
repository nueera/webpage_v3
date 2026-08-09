import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - IT & Digital Solutions',
  description:
    'Explore NueEra\'s comprehensive digital solutions: web development, mobile apps, UI/UX design, growth marketing, branding, software solutions, and tech automation.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services - IT & Digital Solutions | NueEra',
    description:
      'Explore NueEra\'s comprehensive digital solutions: web development, mobile apps, UI/UX design, growth marketing, branding, and software engineering.',
    url: 'https://nueera.io/services',
    siteName: 'NueEra',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://nueera.io/assets/images/hero1.webp',
        width: 1200,
        height: 630,
        alt: 'NueEra Services - IT & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - IT & Digital Solutions | NueEra',
    description: 'Explore NueEra\'s comprehensive IT & digital solutions engineered for growth.',
    images: ['https://nueera.io/assets/images/hero1.webp'],
  },
};

const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'NueEra IT & Digital Services',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'Service',
        'name': 'Web Development',
        'description': 'Custom web applications built with Next.js, React, Node.js, and modern cloud architecture.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'Service',
        'name': 'Mobile App Development',
        'description': 'Cross-platform iOS and Android mobile apps engineered for speed, offline capabilities, and seamless UX.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'item': {
        '@type': 'Service',
        'name': 'UI/UX Design',
        'description': 'User-centric interface design, wireframing, interactive prototyping, and brand design systems.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'item': {
        '@type': 'Service',
        'name': 'Growth Marketing & SEO',
        'description': 'Data-driven SEO, conversion rate optimization, Google Ads management, and social growth strategies.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
    {
      '@type': 'ListItem',
      'position': 5,
      'item': {
        '@type': 'Service',
        'name': 'Branding & Strategy',
        'description': 'Comprehensive brand positioning, identity guidelines, visual assets, and marketing collateral.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
    {
      '@type': 'ListItem',
      'position': 6,
      'item': {
        '@type': 'Service',
        'name': 'Software & Automation Solutions',
        'description': 'Custom ERPs, CRM integrations, API workflow automation, and scalable backend infrastructure.',
        'provider': { '@type': 'Organization', 'name': 'NueEra' },
      },
    },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
      />
      {children}
    </>
  );
}
