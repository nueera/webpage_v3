import ServicesHeroSection from '@/components/services-page/hero-section';
import ServiceCatalogSection from '@/components/services-page/service-catalog';
import { TechOrbitalVisualizer } from '@/components/tech-orbital-visualizer';
import ServicesProcessSection from '@/components/services-page/process-section';
import ServicesIndustriesSection from '@/components/services-page/industries-section';
import ServicesFaqSection from '@/components/services-page/faq-section';
import ServicesTestimonialsSection from '@/components/services-page/testimonials-section';
import ServicesCtaSection from '@/components/services-page/cta-section';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServiceCatalogSection />
      <TechOrbitalVisualizer />
      <ServicesProcessSection />
      <ServicesIndustriesSection />
      <ServicesFaqSection />
      <ServicesTestimonialsSection />
      <ServicesCtaSection />
    </>
  );
}
