import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Zap, Star } from 'lucide-react';
import { SectionBadge, FadeUp, AnimatedCounter } from '@/components/ui-extensions';
import { TestimonialsSection } from '@/components/testimonials-section';
import { PortfolioBlogSection } from '@/components/portfolio-blog-section';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Portfolio & Insights — NueEra Digital Agency',
  description:
    'Discover NueEra’s client testimonials, engineering insights, and technical research benchmarks driving digital growth for modern businesses.',
};

const portfolioStats = [
  { value: 50, suffix: '+', label: 'Projects Completed', icon: Zap },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Star },
  { value: 3.8, suffix: 'x', label: 'Average ROI', icon: TrendingUp, decimals: 1 },
  { value: 24, suffix: 'h', label: 'Support Response', icon: Clock },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/homewallpaper.webp" alt="" fill className="object-cover object-center opacity-30 dark:opacity-20" priority sizes="100vw" />
        </div>
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          <FadeUp>
            <SectionBadge>Client Success & Insights</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">
              Validated by Results
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Explore our client success testimonials, enterprise trust benchmarks, and technical engineering insights powering modern digital growth.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Proof Stats with animated counters */}
      <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-soft)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioStats.map((s, idx) => (
              <FadeUp key={s.label} delay={idx * 0.1}>
                <div className="stat-card">
                  <s.icon className="w-6 h-6 mx-auto mb-2 text-[var(--blue-primary)]" />
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="text-[var(--text-muted)] text-xs">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Client Success Section */}
      <TestimonialsSection />

      {/* Tech & Engineering Insights Blog Section */}
      <PortfolioBlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="cta-mesh" aria-hidden="true">
          <div className="glow glow-center" />
        </div>
        <div className="container-nueera text-center relative z-10">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Start Your Digital Project?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Let&apos;s create something remarkable together. Your brand could be our next success story.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
