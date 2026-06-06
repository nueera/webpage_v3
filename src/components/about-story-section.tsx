'use client';

import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from './ui-extensions';
import { Target, Eye } from 'lucide-react';
import Image from 'next/image';

export function AboutStorySection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[10%] right-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[5%] left-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <FadeUp>
          <SectionBadge>Who We Are</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4 text-center">
            We&apos;re More Than Just an <span className="gradient-text">Agency</span>
          </SectionTitle>
        </FadeUp>

        {/* Two-column layout: Text + Image */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <FadeUp delay={0.15}>
            <div className="space-y-5">
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                Founded in Pune, NueEra was born from a simple belief: every ambitious business deserves access to world-class digital solutions without the enterprise price tag. We&apos;re a tight-knit team of developers, designers, and strategists who eat, sleep, and breathe digital growth.
              </p>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                What started as a small operation has grown into a trusted digital partner for businesses across healthcare, e-commerce, fitness, SaaS, and beyond. Our approach is different — we don&apos;t just build websites or run ads. We engineer complete growth systems designed to deliver measurable, scalable results.
              </p>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                With diverse expertise spanning full-stack development, UI/UX design, branding, and performance marketing, we bring a holistic perspective to every project. Every solution we craft is tailored, data-driven, and built to grow with your business.
              </p>
            </div>
          </FadeUp>

          {/* Right: Team Photo with glow */}
          <FadeUp delay={0.25}>
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'var(--gradient-blue-orange)' }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/assets/images/hero1.webp"
                  alt="NueEra Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeUp delay={0.2}>
            <GlassCard className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center bg-[var(--blue-primary)]/10">
                <Target className="w-7 h-7 text-[var(--blue-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Our Mission</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  To engineer digital growth systems that transform ambitious businesses into scalable revenue powerhouses.
                </p>
              </div>
            </GlassCard>
          </FadeUp>
          <FadeUp delay={0.3}>
            <GlassCard className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center bg-[var(--orange-primary)]/10">
                <Eye className="w-7 h-7 text-[var(--orange-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Our Vision</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  To become India&apos;s most trusted digital solutions partner, known for measurable impact and transparent delivery.
                </p>
              </div>
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
