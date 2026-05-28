'use client';

import { Star } from 'lucide-react';
import { SectionBadge, SectionTitle, GlassCard, FadeUp } from './ui-extensions';

const TESTIMONIAL_DATA = [
  {
    name: 'Ravi Kambale',
    role: 'Founder',
    company: 'TechVenture',
    content: 'NueEra transformed our digital presence completely. Their systematic approach delivered results beyond our expectations.',
    rating: 5,
    avatar: '/assets/images/profiles/ravi_kambale.webp',
  },
  {
    name: 'Vaibhav Nijampurkar',
    role: 'CEO',
    company: 'GrowthLabs',
    content: 'Working with NueEra was a game-changer for our business. Their growth marketing system helped us achieve 3x revenue growth in just 6 months.',
    rating: 5,
    avatar: '/assets/images/profiles/vaibhav_nijampurkar.webp',
  },
  {
    name: 'Saurabh Shinde',
    role: 'CTO',
    company: 'CloudScale Inc',
    content: 'The technical expertise at NueEra is second to none. They built our entire cloud infrastructure from scratch with 99.99% uptime.',
    rating: 5,
    avatar: '/assets/images/profiles/saurabh_shinde.webp',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[var(--orange-primary)] fill-[var(--orange-primary)]' : 'text-[var(--text-muted)]'}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)]">
      <div className="container-nueera text-center">
        <FadeUp>
          <SectionBadge>Success Stories</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Trusted by <span className="gradient-text">Business Leaders</span>
          </SectionTitle>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_DATA.map((testimonial, idx) => (
            <FadeUp key={testimonial.name} delay={0.1 + idx * 0.1}>
              <GlassCard className="text-left h-full" hover={false}>
                <div className="flex items-center gap-1 mb-3">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)]">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{testimonial.role}, {testimonial.company}</p>
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
