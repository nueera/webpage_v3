import AboutHeroSection from '@/components/about-page/hero-section';
import DifferentiatorsSection from '@/components/about-page/differentiators-section';
import WhoWeAreSection from '@/components/about-page/who-we-are-section';
import AboutTimelineSection from '@/components/about-page/timeline-section';
import AboutStatsSection from '@/components/about-page/stats-section';
import AboutTeamSection from '@/components/about-page/team-section';
import AboutTestimonialsSection from '@/components/about-page/testimonials-section';
import AboutCtaSection from '@/components/about-page/cta-section';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <DifferentiatorsSection />
      <WhoWeAreSection />
      <AboutTimelineSection />
      <AboutStatsSection />
      <AboutTeamSection />
      <AboutTestimonialsSection />
      <AboutCtaSection />
    </>
  );
}
