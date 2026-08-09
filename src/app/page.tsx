import { Hero } from '@/components/hero';
import { VideoSection } from '@/components/video-section';
import { TrustedLogosSection } from '@/components/trusted-logos-section';
import { AboutStorySection } from '@/components/about-story-section';
import { ServicesSection } from '@/components/services-section';
import { IndustriesSection } from '@/components/industries-section';
import { ProcessSection } from '@/components/process-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { ServiceSelector } from '@/components/service-selector';
import { TestimonialsSection } from '@/components/testimonials-section';
import { HomeContactSection } from '@/components/home-contact-section';
import { FAQSection } from '@/components/faq-section';
import { TrustSection } from '@/components/trust-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <TrustedLogosSection />
      <AboutStorySection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <PortfolioSection />
      <ServiceSelector />
      <TestimonialsSection />
      <HomeContactSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
