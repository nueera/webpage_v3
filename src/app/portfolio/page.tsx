'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ExternalLink, Eye, TrendingUp, Clock,
  Zap, Globe, Smartphone, BarChart3, Star
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const filters = ['All', 'Web', 'App', 'Marketing', 'Design'];

const projects = [
  { title: 'E-Commerce Platform', cat: 'Web', desc: 'Full-stack e-commerce solution with real-time inventory management.', img: '/assets/images/img1.webp', color: 'blue' },
  { title: 'Health & Fitness App', cat: 'App', desc: 'Cross-platform mobile application with AI-powered workout plans.', img: '/assets/images/img2.webp', color: 'orange' },
  { title: 'SaaS Dashboard', cat: 'Web', desc: 'Analytics dashboard with real-time data visualization and reporting.', img: '/assets/images/img3.webp', color: 'blue' },
  { title: 'Brand Identity System', cat: 'Design', desc: 'Complete brand identity including logo, guidelines, and collateral.', img: '/assets/images/img4.webp', color: 'orange' },
  { title: 'Growth Marketing Campaign', cat: 'Marketing', desc: 'Multi-channel campaign that drove 3x increase in organic traffic.', img: '/assets/images/img5.webp', color: 'blue' },
  { title: 'Real Estate Platform', cat: 'Web', desc: 'Property listing platform with virtual tours and smart search.', img: '/assets/images/img6.webp', color: 'orange' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.cat === activeFilter);

  return (
    <>
      <Breadcrumb items={[{ label: 'Portfolio' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Portfolio</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Our Work Speaks</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across industries and technologies.
          </p>
        </div>
      </section>

      {/* Proof Stats */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '120+', label: 'Projects', icon: Zap },
              { value: '96%', label: 'Retention', icon: Star },
              { value: '3.8x', label: 'ROI', icon: TrendingUp },
              { value: '24h', label: 'Response', icon: Clock },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <s.icon className="w-6 h-6 mx-auto mb-2 text-[var(--blue-primary)]" />
                <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-[var(--text-muted)] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Filter + Projects */}
      <SectionWrapper>
        <div className="container-nueera">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === f
                    ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white'
                    : 'bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)]'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden glass-card">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />
                  {/* Glow overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    project.color === 'blue' ? 'bg-[var(--blue-primary)]/10' : 'bg-[var(--orange-primary)]/10'
                  }`} />
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white inline-flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]'
                      : 'bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]'
                  }`}>{project.cat}</span>
                  <h3 className="font-bold text-[var(--text-primary)] mt-3 mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Case Study Highlights */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Case Studies" title="Featured Case Studies" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform Redesign',
                client: 'RetailMax',
                metrics: [
                  { label: 'Conversion Rate', value: '+42%' },
                  { label: 'Page Load Speed', value: '3x Faster' },
                  { label: 'Revenue Impact', value: '+$250K' },
                ],
                desc: 'A complete redesign and rebuild of an e-commerce platform that resulted in dramatically improved user experience and revenue growth.',
              },
              {
                title: 'SaaS Product Launch',
                client: 'DataFlow Pro',
                metrics: [
                  { label: 'User Signups', value: '5,000+' },
                  { label: 'Active Users', value: '78%' },
                  { label: 'Time to Value', value: '-60%' },
                ],
                desc: 'From concept to launch in 12 weeks — a full-stack SaaS application that achieved rapid user adoption and market traction.',
              },
            ].map((cs, i) => (
              <div key={i} className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-extrabold text-[var(--text-primary)] mb-1">{cs.title}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">Client: {cs.client}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                      <div className="text-xl font-extrabold gradient-text">{m.value}</div>
                      <div className="text-[var(--text-muted)] text-[10px] mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] text-sm">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Start Your Project?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Let&apos;s create something remarkable together. Your project could be our next success story.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
