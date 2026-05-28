'use client';

import Link from 'next/link';
import {
  Globe, Cpu, Palette, Megaphone, Lightbulb,
  Layers, Zap, Target, ArrowRight, CheckCircle2,
  Code2, Video, Camera, Star, Wrench, FileText, Settings,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from '@/components/ui-extensions';

const services = [
  { icon: Video, title: 'Video Production', description: 'Promotional videos, social media content, motion graphics, and testimonial videos that tell your story.' },
  { icon: Palette, title: 'UI/UX Design', description: 'User research, wireframes, prototypes, design systems, and usability testing for conversion-optimized interfaces.' },
  { icon: Camera, title: 'Photography', description: 'Product photography, brand shoots, event coverage, and editorial content that differentiates your brand.' },
  { icon: Code2, title: 'Website Development', description: 'Custom web applications, e-commerce platforms, CMS development, and performance optimization.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'SEO & SEM strategy, social media marketing, content marketing, and analytics & reporting.' },
  { icon: Star, title: 'Branding', description: 'Brand strategy, logo & visual identity, brand guidelines, and brand messaging.' },
  { icon: Wrench, title: 'Maintenance & Support', description: '24/7 monitoring, regular updates, security patches, and performance tuning.' },
  { icon: Settings, title: 'Software Solutions', description: 'Custom software, API integrations, automation tools, and cloud migration.' },
  { icon: FileText, title: 'Content Strategy', description: 'Content audits, editorial calendars, copywriting, and distribution strategy.' },
];

const values = [
  { icon: Layers, title: 'Systems Over Silos', desc: 'We build integrated solutions, not disconnected features that create technical debt.' },
  { icon: Zap, title: 'Execution Discipline', desc: 'Rigorous processes and clear accountability ensure every project delivers on time.' },
  { icon: Target, title: 'Business Outcomes', desc: 'Every technical decision is tied to measurable business impact and ROI.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-nueera relative z-10 text-center">
          <FadeUp>
            <SectionBadge>Our Services</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">What We Deliver</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              End-to-end digital solutions designed to solve real business problems and deliver measurable results.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Values</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">How We Approach <span className="gradient-text">Every Project</span></SectionTitle>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, idx) => (
              <FadeUp key={item.title} delay={0.1 + idx * 0.1}>
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>All Services</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">Our Service <span className="gradient-text">Catalog</span></SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">Comprehensive solutions across nine key areas of digital excellence.</SectionDescription>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <FadeUp key={s.title} delay={0.05 + idx * 0.05}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--orange-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-6 h-6 text-[var(--orange-primary)]" />
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)]">{s.title}</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{s.description}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Schedule a free consultation to discuss your project and find the perfect solution.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
