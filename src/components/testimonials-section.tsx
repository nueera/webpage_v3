'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionBadge, SectionTitle, FadeUp } from './ui-extensions';

const TESTIMONIAL_DATA = [
  {
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'FreshBite Organics',
    content: 'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Our online sales grew 4x within three months of launch. Their team understood our vision perfectly and delivered beyond expectations.',
    rating: 5,
    avatar: null,
    companyColor: 'from-[var(--orange-primary)] to-[var(--orange-soft)]',
  },
  {
    name: 'Amit Deshmukh',
    role: 'CEO',
    company: 'UrbanFit Gyms',
    content: 'The growth marketing system NueEra implemented drove a 3x increase in organic traffic and doubled our lead generation. Their data-driven approach and consistent reporting gave us complete confidence in the strategy.',
    rating: 5,
    avatar: null,
    companyColor: 'from-[var(--blue-primary)] to-[var(--blue-soft)]',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'CTO',
    company: 'MediConnect Health',
    content: 'We needed a reliable partner to build our healthcare platform with strict security requirements. NueEra delivered a HIPAA-compliant solution with 99.9% uptime. Their technical expertise and attention to detail are exceptional.',
    rating: 5,
    avatar: null,
    companyColor: 'from-[var(--orange-primary)] to-[var(--orange-soft)]',
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

function CompanyLogo({ name, gradient }: { name: string; gradient: string }) {
  return (
    <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} flex-shrink-0`}>
      <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
    </div>
  );
}

export function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / TESTIMONIAL_DATA.length;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveDot(Math.min(index, TESTIMONIAL_DATA.length - 1));
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = useCallback((index: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / TESTIMONIAL_DATA.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[var(--bg-main)] overflow-hidden">
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

        {/* Mobile: Horizontal snap carousel / Desktop: Grid */}
        <>
          {/* Mobile carousel */}
          <div className="mt-12 md:hidden">
            <div
              ref={carouselRef}
              className="snap-carousel snap-carousel-peek flex gap-4 pb-4"
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials"
            >
              {TESTIMONIAL_DATA.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-[85vw] sm:min-w-[80vw] snap-carousel-item flex-shrink-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${testimonial.name}, ${testimonial.role}`}
                >
                  <div className="testimonial-card text-left h-full flex flex-col p-6">
                    {/* Quote icon and stars */}
                    <div className="mb-4 flex items-center justify-between">
                      <StarRating rating={testimonial.rating} />
                      <Quote className="w-8 h-8 text-[var(--blue-primary)] opacity-20" />
                    </div>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1 relative z-10">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-soft)]">
                      <div className="w-11 h-11 rounded-full ring-2 ring-[var(--border-soft)] bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <CompanyLogo name={testimonial.company} gradient={testimonial.companyColor} />
                      <div>
                        <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-[var(--text-muted)] text-xs">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="carousel-dots md:hidden" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIAL_DATA.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot touch-press ${idx === activeDot ? 'active' : ''}`}
                  onClick={() => scrollToIndex(idx)}
                  role="tab"
                  aria-selected={idx === activeDot}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="mt-12 hidden md:grid md:grid-cols-3 gap-6">
            {TESTIMONIAL_DATA.map((testimonial, idx) => (
              <FadeUp key={testimonial.name} delay={0.1 + idx * 0.1}>
                <div className="testimonial-card text-left h-full flex flex-col p-6">
                  {/* Quote icon and stars */}
                  <div className="mb-4 flex items-center justify-between">
                    <StarRating rating={testimonial.rating} />
                    <Quote className="w-8 h-8 text-[var(--blue-primary)] opacity-20" />
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-soft)]">
                    <div className="w-11 h-11 rounded-full ring-2 ring-[var(--border-soft)] bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <CompanyLogo name={testimonial.company} gradient={testimonial.companyColor} />
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-[var(--text-muted)] text-xs">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </>
      </div>
    </section>
  );
}
