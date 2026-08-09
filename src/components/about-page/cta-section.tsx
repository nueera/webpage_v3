'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui-extensions';
import { PremiumButton } from '@/components/premium-button';

export default function AboutCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="cta-mesh" aria-hidden="true">
        <div className="glow glow-center" />
      </div>
      <div className="container-nueera text-center relative z-10">
        <FadeUp>
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">
            Ready to Build Something <span className="gradient-text">Extraordinary?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Join 50+ businesses that trust NueEra to engineer their digital growth. Book a free strategy call and get your custom roadmap.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/917020810392?text=Hi%20NueEra!%20I%27d%20like%20to%20book%20a%20free%20strategy%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            <PremiumButton>Book Strategy Call</PremiumButton>
          </a>
          <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-base transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] active:scale-[0.98]">
            View Our Work <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[var(--text-muted)] text-xs mt-6">
            🔒 Free consultation • No obligation • NDA protected
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
