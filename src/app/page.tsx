import { Hero } from '@/components/hero';
import { VideoSection } from '@/components/video-section';
import { TrustedLogosSection } from '@/components/trusted-logos-section';
import { AboutStorySection } from '@/components/about-story-section';
import { IndustriesSection } from '@/components/industries-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <TrustedLogosSection />
      <AboutStorySection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
