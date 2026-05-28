'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, TrendingUp, Clock, Zap, Star } from 'lucide-react';
import { SectionBadge, GlassCard, FadeUp } from '@/components/ui-extensions';

const filters = ['All', 'Web', 'App', 'Marketing', 'Design'];

const projects = [
  { title: 'E-Commerce Platform', cat: 'Web', desc: 'Full-stack e-commerce solution with real-time inventory management.', img: '/assets/images/img1.webp' },
  { title: 'Health & Fitness App', cat: 'App', desc: 'Cross-platform mobile application with AI-powered workout plans.', img: '/assets/images/img2.webp' },
  { title: 'SaaS Dashboard', cat: 'Web', desc: 'Analytics dashboard with real-time data visualization and reporting.', img: '/assets/images/img3.webp' },
  { title: 'Brand Identity System', cat: 'Design', desc: 'Complete brand identity including logo, guidelines, and collateral.', img: '/assets/images/img4.webp' },
  { title: 'Growth Marketing Campaign', cat: 'Marketing', desc: 'Multi-channel campaign that drove 3x increase in organic traffic.', img: '/assets/images/img5.webp' },
  { title: 'Real Estate Platform', cat: 'Web', desc: 'Property listing platform with virtual tours and smart search.', img: '/assets/images/img6.webp' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.cat === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-nueera relative z-10 text-center">
          <FadeUp>
            <SectionBadge>Portfolio</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">Our Work Speaks</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects across industries and technologies.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '16+', label: 'Projects', icon: Zap },
              { value: '100%', label: 'Satisfaction', icon: Star },
              { value: '3.8x', label: 'ROI', icon: TrendingUp },
              { value: '24h', label: 'Response', icon: Clock },
            ].map((s, idx) => (
              <FadeUp key={s.label} delay={idx * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <s.icon className="w-6 h-6 mx-auto mb-2 text-[var(--blue-primary)]" />
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                  <div className="text-[var(--text-muted)] text-xs">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <GlassCard key={project.title} className="group relative overflow-hidden !p-0">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white inline-flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{project.cat}</span>
                  <h3 className="font-bold text-[var(--text-primary)] mt-3 mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{project.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Ready to Start Your Project?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Let&apos;s create something remarkable together. Your project could be our next success story.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
