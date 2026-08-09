'use client';

import Link from 'next/link';
import { FadeUp, GhostButton } from '@/components/ui-extensions';
import { PremiumButton } from '@/components/premium-button';

export default function ServicesCtaSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="cta-mesh" aria-hidden="true">
        <div className="glow glow-center" />
      </div>
      <div className="container-nueera text-center relative z-10">
        <FadeUp>
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Schedule a free consultation to discuss your project and get a custom proposal.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <PremiumButton
              onClick={() => {
                window.open(
                  'https://wa.me/917066607424?text=Hi%20NueEra%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call',
                  '_blank'
                );
              }}
            >
              Book Strategy Call
            </PremiumButton>
            <Link href="/portfolio">
              <GhostButton>View Our Work</GhostButton>
            </Link>
          </div>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[var(--text-muted)] text-sm">
            🔒 Free consultation &bull; Custom proposal &bull; No hidden fees
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
