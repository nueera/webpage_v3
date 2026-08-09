'use client';

import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from '@/components/ui-extensions';
import { industries } from './data';

export default function ServicesIndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Industries</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Solutions Across <span className="gradient-text">Industries</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              We bring deep domain expertise to every sector we serve, delivering solutions that understand your unique challenges.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, idx) => (
            <FadeUp key={industry.name} delay={0.1 + idx * 0.06}>
              <GlassCard className="text-center h-full group">
                <div
                  className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110
                    ${idx % 2 === 0
                      ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                      : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                    }`}
                >
                  <industry.icon
                    className={`w-6 h-6 ${
                      idx % 2 === 0 ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                    }`}
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-1">{industry.name}</h3>
                <p className="text-[var(--text-muted)] text-xs md:text-sm leading-relaxed">{industry.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
