'use client';

import { SectionBadge, SectionTitle, FadeUp, GlassCard } from '@/components/ui-extensions';
import { differentiators } from './data';

export default function DifferentiatorsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>The NueEra Difference</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">Why Teams <span className="gradient-text">Choose Us</span></SectionTitle>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <FadeUp key={item.title} delay={0.05 + idx * 0.06}>
              <GlassCard className="h-full text-center group">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110
                  ${item.color === 'blue'
                    ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-soft)]'
                    : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                  }`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
