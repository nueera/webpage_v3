'use client';

import { Star, Quote } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const testimonials = [
  { name: 'Rajesh Kumar', role: 'CEO, TechVentures', text: 'NueEra transformed our outdated website into a modern, high-converting platform. Their attention to detail and strategic approach exceeded our expectations. Revenue increased by 40% within 3 months.', rating: 5 },
  { name: 'Priya Sharma', role: 'Founder, StyleHaven', text: 'The branding and e-commerce solution NueEra delivered was exceptional. They truly understood our vision and brought it to life with precision and creativity. Our customers love the new experience.', rating: 5 },
  { name: 'Amit Patel', role: 'CTO, DataFlow', text: 'Working with NueEra on our SaaS platform was a game-changer. Their technical expertise and agile approach helped us launch on time with a product that our users genuinely enjoy.', rating: 5 },
  { name: 'Sneha Desai', role: 'Marketing Director, GreenLeaf', text: 'The digital marketing campaign NueEra designed for us delivered incredible results. 3x increase in organic traffic and 2x improvement in conversion rates. Highly recommend!', rating: 5 },
  { name: 'Vikram Mehta', role: 'Owner, PropertyHub', text: 'NueEra built our real estate platform from scratch and it\'s been flawless. The virtual tours and smart search features they implemented set us apart from every competitor.', rating: 5 },
  { name: 'Neha Singh', role: 'Product Manager, FitLife', text: 'The mobile app NueEra developed for us is beautifully designed and performs flawlessly. User engagement has been outstanding since launch. They\'re our go-to technology partner.', rating: 5 },
];

const stats = [
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5.0', label: 'Average Rating' },
  { value: '16+', label: 'Projects Delivered' },
  { value: '4+', label: 'Happy Clients' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Testimonials' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Testimonials</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">What Our Clients Say</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
          </p>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <div className="text-3xl font-extrabold gradient-text mb-2">{s.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Grid */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 relative">
                <Quote className="w-8 h-8 text-[var(--blue-primary)] opacity-20 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--orange-primary)] text-[var(--orange-primary)]" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</p>
                    <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Your project could be our next testimonial. Let&apos;s start building something remarkable.
          </p>
          <a href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Start Your Project
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
