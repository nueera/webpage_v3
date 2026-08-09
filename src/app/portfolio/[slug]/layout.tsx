import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/portfolio-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Case Study Not Found | NueEra',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${project.title} - Case Study | NueEra`,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Case Study | NueEra`,
      description: project.summary,
      url: `https://nueera.io/portfolio/${project.slug}`,
      siteName: 'NueEra',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: `https://nueera.io${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study | NueEra`,
      description: project.summary,
      images: [`https://nueera.io${project.image}`],
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
