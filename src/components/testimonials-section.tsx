'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { SectionBadge, SectionTitle, FadeUp } from './ui-extensions';

const TESTIMONIAL_DATA = [
  {
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'FreshBite Organics',
    content: 'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Our online sales grew 4x within three months of launch. Their team understood our vision perfectly and delivered beyond expectations.',
    rating: 5,
    avatar: '/assets/images/testimonials/priya_mehta.webp',
  },
  {
    name: 'Amit Deshmukh',
    role: 'CEO',
    company: 'UrbanFit Gyms',
    content: 'The growth marketing system NueEra implemented drove a 3x increase in organic traffic and doubled our lead generation. Their data-driven approach and consistent reporting gave us complete confidence in the strategy.',
    rating: 5,
    avatar: '/assets/images/testimonials/amit_deshmukh.webp',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'CTO',
    company: 'MediConnect Health',
    content: 'We needed a reliable partner to build our healthcare platform with strict security requirements. NueEra delivered a HIPAA-compliant solution with 99.9% uptime. Their technical expertise and attention to detail are exceptional.',
    rating: 5,
    avatar: '/assets/images/testimonials/sneha_kulkarni.webp',
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
    <section className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] top-[20%] left-[5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.03] bottom-[10%] right-[5%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
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
              <div className="testimonial-card text-left h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-3 flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <Quote className="w-8 h-8 text-[var(--blue-primary)] opacity-20" />
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-soft)]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)] bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span style="font-size:16px;font-weight:700;color:var(--blue-primary)">${testimonial.name.charAt(0)}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{testimonial.role}, {testimonial.company}</p>
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
