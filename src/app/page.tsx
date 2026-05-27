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
} from '@/components/sections';
import { CustomCursor } from '@/components/effects/custom-cursor';
import { SectionProgress } from '@/components/section-progress';
import { PagePrefetcher } from '@/components/page-prefetcher';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <SectionProgress />
      <PagePrefetcher />
      <Hero />
      <GrowthStory />
      <Welcome />
      <Features />
      <TrustedBy />
      <OurApproach />
      <StrategicArchitecture />
      <Showcase3D />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Blog />
      <CTASection />
    </>
  );
}
