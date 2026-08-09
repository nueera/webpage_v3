'use client';

import { Quote } from 'lucide-react';
import { SectionBadge, SectionTitle, FadeUp } from '@/components/ui-extensions';
import { testimonials, StarRating } from './data';

export default function AboutTestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-nueera">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Client Love</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">What Our Partners <span className="gradient-text">Say</span></SectionTitle>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <FadeUp key={t.name} delay={0.05 + idx * 0.1}>
              <div className="testimonial-card h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <Quote className="w-5 h-5 text-[var(--orange-primary)] flex-shrink-0" />
                  <StarRating rating={t.rating} />
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</div>
                    <div className="text-[var(--text-muted)] text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
