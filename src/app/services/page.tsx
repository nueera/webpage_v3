'use client';

import Link from 'next/link';
import {
  Layers, Zap, Target, ArrowRight, ChevronRight,
  Video, Palette, Camera, Code2, Megaphone, Star, Wrench, FileText, Settings,
  Rocket, Shield, CheckCircle2,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp, StaggerContainer, StaggerItem } from '@/components/ui-extensions';

const services = [
  { icon: Video, title: 'Video Production', challenge: 'Low engagement and poor brand storytelling', deliverables: ['Promotional videos', 'Social media content', 'Motion graphics', 'Testimonial videos'] },
  { icon: Palette, title: 'UI/UX Design', challenge: 'High bounce rates and poor user experience', deliverables: ['User research & personas', 'Wireframes & prototypes', 'Design systems', 'Usability testing'] },
  { icon: Camera, title: 'Photography', challenge: 'Generic visuals that fail to differentiate', deliverables: ['Product photography', 'Brand shoots', 'Event coverage', 'Editorial content'] },
  { icon: Code2, title: 'Website Development', challenge: 'Slow, outdated websites that lose customers', deliverables: ['Custom web applications', 'E-commerce platforms', 'CMS development', 'Performance optimization'] },
  { icon: Megaphone, title: 'Digital Marketing', challenge: 'Low visibility and poor lead generation', deliverables: ['SEO & SEM strategy', 'Social media marketing', 'Content marketing', 'Analytics & reporting'] },
  { icon: Star, title: 'Branding', challenge: 'Weak brand identity that fails to resonate', deliverables: ['Brand strategy', 'Logo & visual identity', 'Brand guidelines', 'Brand messaging'] },
  { icon: Wrench, title: 'Maintenance & Support', challenge: 'Downtime, bugs, and security vulnerabilities', deliverables: ['24/7 monitoring', 'Regular updates', 'Security patches', 'Performance tuning'] },
  { icon: Settings, title: 'Software Solutions', challenge: 'Manual processes and operational inefficiencies', deliverables: ['Custom software', 'API integrations', 'Automation tools', 'Cloud migration'] },
  { icon: FileText, title: 'Content Strategy', challenge: 'Inconsistent messaging and low content ROI', deliverables: ['Content audits', 'Editorial calendars', 'Copywriting', 'Distribution strategy'] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-nueera relative z-10 text-center">
          <SectionBadge>Our Services</SectionBadge>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">What We Deliver</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to solve real business problems and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <SectionBadge>Values</SectionBadge>
            <SectionTitle className="mt-4">How We Approach <span className="gradient-text">Every Project</span></SectionTitle>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Systems Over Silos', desc: 'We build integrated solutions, not disconnected features that create technical debt.' },
              { icon: Zap, title: 'Execution Discipline', desc: 'Rigorous processes and clear accountability ensure every project delivers on time.' },
              { icon: Target, title: 'Business Outcomes', desc: 'Every technical decision is tied to measurable business impact and ROI.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-20 md:py-28">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <SectionBadge>All Services</SectionBadge>
            <SectionTitle className="mt-4">Our Service <span className="gradient-text">Catalog</span></SectionTitle>
            <SectionDescription className="mx-auto mt-4">Comprehensive solutions across nine key areas of digital excellence.</SectionDescription>
          </div>
          <div className="space-y-8">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.05}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  <div className={`p-6 rounded-2xl border border-red-500/20 bg-red-500/5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/10">
                        <s.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="font-bold text-[var(--text-primary)]">{s.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mb-2">The Challenge</p>
                    <p className="text-[var(--text-secondary)] text-sm">{s.challenge}</p>
                  </div>
                  <div className={`p-6 rounded-2xl border border-green-500/20 bg-green-500/5 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-sm text-[var(--text-muted)] mb-3">What We Deliver</p>
                    <ul className="space-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Get Started?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Schedule a free consultation to discuss your project and find the perfect solution.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
