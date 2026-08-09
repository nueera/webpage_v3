'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SectionBadge, FadeUp } from '@/components/ui-extensions';

export default function ServicesHeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/images/about.webp" alt="" fill className="object-cover object-center opacity-20" sizes="100vw" />
      </div>
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue" style={{ opacity: 0.3 }} />
        <div className="orb orb-orange" style={{ opacity: 0.25 }} />
      </div>
      <div className="container-nueera relative z-10 text-center">
        {/* Breadcrumb */}
        <FadeUp>
          <nav className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-4">
            <Link href="/" className="hover:text-[var(--blue-primary)] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--text-primary)]">Services</span>
          </nav>
        </FadeUp>

        <FadeUp>
          <SectionBadge>Our Services</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">
            What We <span className="gradient-text">Deliver</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to solve real business problems and deliver measurable results.
          </p>
        </FadeUp>

        {/* Stat pills */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
              7 Core Services
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
              ₹50K Starting Price
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)] text-white">
              Free Strategy Call
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
