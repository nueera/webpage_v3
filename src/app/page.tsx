'use client';

import { Hero } from '@/components/hero';
import {
  GrowthStory,
  Welcome,
  Features,
  Services,
  Testimonials,
  CTASection,
  FAQ,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <GrowthStory />
      <Welcome />
      <Features />
      <Services />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
