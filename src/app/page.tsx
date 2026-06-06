'use client';

import { Hero } from '@/components/hero';
import { TrustedLogosSection } from '@/components/trusted-logos-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { ServiceSelector } from '@/components/service-selector';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedLogosSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ServiceSelector />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
