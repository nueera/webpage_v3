'use client';

import { Hero } from '@/components/hero';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
