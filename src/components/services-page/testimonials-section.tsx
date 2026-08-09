'use client';

import { Quote } from 'lucide-react';
import { SectionBadge, SectionTitle, GlassCard, FadeUp } from '@/components/ui-extensions';
import { testimonials } from './data';

export default function ServicesTestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Results</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              The <span className="gradient-text">Impact We Deliver</span>
            </SectionTitle>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <FadeUp key={t.name} delay={0.1 + idx * 0.1}>
              <GlassCard className="text-left h-full flex flex-col">
                {/* Big stat */}
                <div className="mb-4">
                  <div
                    className={`text-4xl font-extrabold ${
                      t.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                    }`}
                  >
                    {t.stat}
                  </div>
                  <p className="text-[var(--text-muted)] text-sm mt-1">{t.statLabel}</p>
                </div>

                {/* Quote */}
                <Quote className={`w-6 h-6 mb-3 opacity-30 ${
                  t.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                }`} />
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--border-soft)]">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      t.color === 'blue'
                        ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                        : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                    }`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
