'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionBadge, FadeUp } from '@/components/ui-extensions';

export default function WhoWeAreSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-nueera">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeUp>
              <SectionBadge>Who We Are</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6 mt-4">A Team That Cares About Your Success</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[var(--text-secondary)] text-lg mb-4">
                NueEra was founded with a singular vision — to make premium digital solutions accessible to businesses of all sizes. Based in Pune, India, we&apos;ve grown from a two-person startup into a trusted, full-service digital partner.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-[var(--text-secondary)]">
                Our 11-member team brings together diverse expertise in software engineering, design, marketing, video production, and business strategy. We believe the best solutions emerge at the intersection of creativity and technical excellence — and that&apos;s exactly where we operate.
              </p>
            </FadeUp>
            <FadeUp delay={0.4} className="mt-6">
              <Link href="/services" className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white">
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 blur-2xl" aria-hidden="true" />
              <Image src="/assets/images/hero1.webp" alt="NueEra team" width={600} height={400} className="rounded-2xl object-cover relative z-10 border border-[var(--border-soft)]" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
