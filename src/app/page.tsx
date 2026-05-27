"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
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
  HelpCenter,
  CTASection,
} from "@/components/sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-mobile-nav">
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
        <HelpCenter />
        <Blog />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
