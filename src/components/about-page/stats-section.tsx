'use client';

import { SectionBadge, SectionTitle, FadeUp, AnimatedCounter } from '@/components/ui-extensions';
import { stats } from './data';

export default function AboutStatsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>By The Numbers</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">Impact That <span className="gradient-text">Speaks</span></SectionTitle>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <FadeUp key={s.label} delay={idx * 0.08}>
              <div className="stat-card text-center">
                <s.icon className="w-7 h-7 mx-auto mb-3 text-[var(--blue-primary)]" />
                <div className="text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-semibold text-[var(--text-primary)] text-sm mb-1">{s.label}</div>
                <div className="text-[var(--text-muted)] text-xs">{s.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
