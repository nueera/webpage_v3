'use client';

import { SectionBadge, SectionTitle, FadeUp } from '@/components/ui-extensions';
import { timelineItems } from './data';

export default function AboutTimelineSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background orbs */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue" style={{ opacity: 0.15 }} />
        <div className="orb orb-orange" style={{ opacity: 0.12 }} />
      </div>
      <div className="container-nueera relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <SectionBadge>Our Journey</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">From Idea to <span className="gradient-text">Impact</span></SectionTitle>
          </FadeUp>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)] opacity-30 rounded-full" />
            <div className="grid grid-cols-6 gap-4">
              {timelineItems.map((item, idx) => (
                <FadeUp key={item.title} delay={0.05 + idx * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    {/* Dot */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg shadow-[var(--glow-blue)] mb-6 ring-4 ring-[var(--bg-secondary)]" />
                    {/* Year badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm mb-2">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-5 w-[3px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)] opacity-30 rounded-full" />
          <div className="space-y-10">
            {timelineItems.map((item, idx) => (
              <FadeUp key={item.title} delay={0.05 + idx * 0.06}>
                <div className="flex gap-5 relative">
                  {/* Dot */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg shadow-[var(--glow-blue)] flex-shrink-0 ring-4 ring-[var(--bg-secondary)]" />
                  {/* Content */}
                  <div className="pt-1">
                    <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
