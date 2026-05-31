'use client';

import { ArrowRight, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import { FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Premium CTA mesh */}
      <div className="cta-mesh" aria-hidden="true">
        <div className="glow glow-center animate-float-orb" style={{ animationDuration: '25s' }} />
        <div className="glow glow-left animate-float-orb" style={{ animationDelay: '-10s', animationDuration: '30s' }} />
      </div>

      {/* Dot grid */}
      <div className="dot-grid" aria-hidden="true" style={{ opacity: 0.2 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <span className="section-badge">Transform Your Digital Future</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] font-display">
            Ready to Transform <span className="gradient-text">Your Business?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Take the first step toward engineered growth. Book a free strategy call and get a clear roadmap from where you are to where you want to be.
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-8 flex items-center justify-center gap-6">
          {[
            { icon: Rocket, text: 'Strategic Roadmap' },
            { icon: CheckCircle2, text: '30-min Consultation' },
            { icon: Sparkles, text: 'Zero Obligation' },
          ].map((feat) => (
            <div key={feat.text} className="hidden sm:flex items-center gap-2 text-[var(--text-secondary)]">
              <feat.icon className="w-5 h-5 text-[var(--orange-primary)]" />
              <span className="text-sm font-medium">{feat.text}</span>
            </div>
          ))}
        </FadeUp>

        <FadeUp delay={0.4} className="mt-10">
          <PremiumButton
            className="text-lg px-10 py-5"
            onClick={() => window.open('https://wa.me/917066607424', '_blank')}
          >
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </PremiumButton>
          <p className="mt-4 text-[var(--text-muted)] text-sm">We respond within 24 hours</p>
        </FadeUp>
      </div>
    </section>
  );
}
