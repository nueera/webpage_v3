'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Layers, Zap, Target, ArrowRight, ChevronRight,
  Video, Palette, Camera, Code2, Megaphone, Star, Wrench, FileText, Settings,
  Search, PenTool, Rocket, Shield, CheckCircle2
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

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
      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Our Services</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">What We Deliver</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to solve real business problems and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Value Grid */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Values" title="How We Approach Every Project" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Systems Over Silos', desc: 'We build integrated solutions, not disconnected features that create technical debt.' },
              { icon: Zap, title: 'Execution Discipline', desc: 'Rigorous processes and clear accountability ensure every project delivers on time.' },
              { icon: Target, title: 'Business Outcomes', desc: 'Every technical decision is tied to measurable business impact and ROI.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Before/After Proof */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Proof" title="The Difference We Make" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-xl font-bold text-red-400 mb-4">Before NueEra</h3>
              <ul className="space-y-3">
                {['Slow, outdated website', 'No clear brand identity', 'Poor user experience', 'Low search visibility', 'Manual, inefficient processes'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                    <span className="text-red-400 mt-0.5">&#x2717;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold text-green-400 mb-4">After NueEra</h3>
              <ul className="space-y-3">
                {['Blazing-fast, modern web app', 'Compelling, cohesive brand', 'Intuitive, delightful UX', 'Top search rankings & organic traffic', 'Automated, scalable systems'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Engagement Models */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Engagement" title="Choose Your Engagement Model" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Project Sprint', price: 'From $2,500', desc: 'Fixed scope, fixed timeline. Perfect for well-defined projects with clear deliverables.', features: ['Scope-defined delivery', '2-6 week timeline', 'Dedicated project manager', 'Milestone-based payments'] },
              { title: 'Dedicated Pod', price: 'From $4,000/mo', desc: 'A dedicated team embedded in your workflow for ongoing development and support.', features: ['Full-time team allocation', 'Monthly billing', 'Priority support', 'Flexible scope'], featured: true },
              { title: 'Strategic Advisory', price: 'From $1,500/mo', desc: 'Expert guidance on technology strategy, architecture, and digital transformation.', features: ['Monthly strategy sessions', 'Architecture reviews', 'Technology assessments', 'Roadmap planning'] },
            ].map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl p-8 relative ${
                  model.featured
                    ? 'bg-gradient-to-b from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 border-2 border-[var(--blue-primary)]'
                    : 'glass-card'
                }`}
              >
                {model.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{model.title}</h3>
                <div className="text-2xl font-extrabold gradient-text mb-3">{model.price}</div>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{model.desc}</p>
                <ul className="space-y-2 mb-6">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--blue-primary)] flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                    ${model.featured
                      ? 'btn-primary-gradient text-white'
                      : 'border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)]'
                    }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Service Blocks */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="All Services" title="Our Service Catalog" description="Comprehensive solutions across nine key areas of digital excellence." />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Challenge Card */}
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
                {/* Deliverables Card */}
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
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Snapshot */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Process" title="Our Delivery Process" />
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Discovery', desc: 'Understand your needs' },
              { num: '02', title: 'Plan', desc: 'Define scope & timeline' },
              { num: '03', title: 'Build', desc: 'Develop & iterate' },
              { num: '04', title: 'Test', desc: 'Quality assurance' },
              { num: '05', title: 'Launch', desc: 'Deploy & support' },
            ].map((s, i) => (
              <div key={s.num} className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <div className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white font-bold text-sm">
                  {s.num}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{s.title}</h3>
                <p className="text-[var(--text-muted)] text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Qualification */}
      <SectionWrapper>
        <div className="container-nueera text-center">
          <SectionHeader badge="Qualification" title="Is NueEra Right for You?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'You Want Quality', desc: 'You prioritize premium quality over quick fixes.' },
              { icon: Target, title: 'You Have Clear Goals', desc: 'You know what you want to achieve and need a partner to execute.' },
              { icon: Rocket, title: 'You Want to Scale', desc: 'You\'re ready to invest in solutions that grow with your business.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white mt-8">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
