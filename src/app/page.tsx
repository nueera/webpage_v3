'use client';

import { Hero } from '@/components/hero';
import {
  GrowthStory,
  Welcome,
  Features,
  TrustedBy,
  OurApproach,
  StrategicArchitecture,
  Showcase3D,
  Services,
  WhyChoose,
  Process,
  Testimonials,
  Blog,
  CTASection,
  FAQ,
} from '@/components/sections';
import { CustomCursor } from '@/components/effects/custom-cursor';
import { SectionProgress } from '@/components/section-progress';
import { PagePrefetcher } from '@/components/page-prefetcher';
import { HorizontalScrollPortfolio } from '@/components/horizontal-scroll-portfolio';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <SectionProgress />
      <PagePrefetcher />

      {/* Film Grain + Vignette Overlays */}
      <div className="film-grain-overlay" aria-hidden="true" />
      <div className="vignette-overlay" aria-hidden="true" />

      <Hero enableThreeJS={true} />
      <GrowthStory />
      <Welcome />
      <Features />
      <TrustedBy />
      <OurApproach />
      <StrategicArchitecture />
      <Showcase3D />

      {/* Horizontal Scroll Portfolio Showcase */}
      <HorizontalScrollPortfolio />

      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTASection />
    </>
  );
}
