'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SectionBadge, FadeUp, AnimatedCounter } from '@/components/ui-extensions';

export default function ContactHeroSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/images/about.webp" alt="" fill className="object-cover object-center opacity-20" sizes="100vw" />
      </div>
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue" style={{ opacity: 0.3 }} />
        <div className="orb orb-orange" style={{ opacity: 0.25 }} />
      </div>
      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <nav className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--blue-primary)] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[var(--text-primary)]">Contact</span>
          </nav>
        </FadeUp>
        <FadeUp delay={0.05}>
          <SectionBadge className="text-base px-5 py-2">Get In Touch</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">Let&apos;s Build Something Great</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? We&apos;re here to help. Reach out and let&apos;s start the conversation.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10">
            {[
              { value: 50, suffix: '+', label: 'Projects' },
              { value: 98, suffix: '%', label: 'Satisfaction' },
              { value: 24, suffix: 'h', label: 'Response' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-extrabold gradient-text">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
