import AboutHeroSection from '@/components/about-page/hero-section';
import WhoWeAreSection from '@/components/about-page/who-we-are-section';
import AboutTimelineSection from '@/components/about-page/timeline-section';
import AboutTeamSection from '@/components/about-page/team-section';
import AboutTestimonialsSection from '@/components/about-page/testimonials-section';
import AboutCtaSection from '@/components/about-page/cta-section';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <WhoWeAreSection />
      <AboutTimelineSection />
      <AboutTeamSection />
      <AboutTestimonialsSection />
      <AboutCtaSection />
    </>
  );
}
