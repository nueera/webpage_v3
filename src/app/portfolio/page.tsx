'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Zap, Star, ExternalLink } from 'lucide-react';
import { SectionBadge, FadeUp, AnimatedCounter } from '@/components/ui-extensions';

const filters = ['All', 'Web', 'App', 'Marketing', 'Design'];

const projects = [
  {
    title: 'FreshBite Organics',
    cat: 'Web',
    desc: 'Full-stack e-commerce platform with real-time inventory management, integrated payment gateway, and automated order tracking for a premium organic food brand.',
    tech: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    img: '/assets/images/img1.webp',
    metric: '4x Revenue',
  },
  {
    title: 'UrbanFit Mobile App',
    cat: 'App',
    desc: 'Cross-platform fitness application with AI-powered workout plans, progress tracking, and social features for a growing gym chain across India.',
    tech: ['React Native', 'Firebase', 'TensorFlow Lite'],
    img: '/assets/images/img2.webp',
    metric: '50K+ Users',
  },
  {
    title: 'MediConnect Dashboard',
    cat: 'Web',
    desc: 'Healthcare analytics dashboard with real-time patient monitoring, HIPAA-compliant data handling, and automated reporting for medical professionals.',
    tech: ['React', 'Python', 'AWS', 'Docker'],
    img: '/assets/images/img3.webp',
    metric: '99.9% Uptime',
  },
  {
    title: 'Luxe Interiors Brand',
    cat: 'Design',
    desc: 'Complete brand identity system including logo design, comprehensive brand guidelines, and marketing collateral for a premium interior design firm.',
    tech: ['Figma', 'Illustrator', 'Brand Strategy'],
    img: '/assets/images/img4.webp',
    metric: 'Brand Launch',
  },
  {
    title: 'TechVenture Growth Campaign',
    cat: 'Marketing',
    desc: 'Multi-channel digital marketing campaign that achieved a 3x increase in organic traffic and doubled qualified leads within six months.',
    tech: ['SEO', 'Google Ads', 'Content Strategy', 'Analytics'],
    img: '/assets/images/img5.webp',
    metric: '3x Traffic',
  },
  {
    title: 'PropSearch Platform',
    cat: 'Web',
    desc: 'Real estate listing platform with virtual tours, AI-powered smart search, and neighborhood analytics for property buyers in Maharashtra.',
    tech: ['Next.js', 'MapBox', 'MongoDB', 'WebGL'],
    img: '/assets/images/img6.webp',
    metric: 'Virtual Tours',
  },
];

const portfolioStats = [
  { value: 16, suffix: '+', label: 'Projects', icon: Zap },
  { value: 100, suffix: '%', label: 'Satisfaction', icon: Star },
  { value: 3.8, suffix: 'x', label: 'ROI', icon: TrendingUp, decimals: 1 },
  { value: 24, suffix: 'h', label: 'Response', icon: Clock },
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
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          <FadeUp>
            <SectionBadge>Portfolio</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">Our Work Speaks</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects across industries and technologies. Each project reflects our commitment to quality and measurable results.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Proof Stats with animated counters */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioStats.map((s, idx) => (
              <FadeUp key={s.label} delay={idx * 0.1}>
                <div className="stat-card">
                  <s.icon className="w-6 h-6 mx-auto mb-2 text-[var(--blue-primary)]" />
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text mb-1">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </div>
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
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Project categories">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                role="tab"
                aria-selected={activeFilter === f}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === f
                    ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white shadow-[0_4px_16px_var(--glow-blue)]'
                    : 'glass-card-no-hover rounded-full text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)]'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.title} className="glass-card group relative overflow-hidden !p-0 rounded-2xl">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={`${project.title} - ${project.cat} project by NueEra`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[var(--bg-main)]/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white inline-flex items-center gap-2 shadow-[0_4px_20px_var(--glow-blue)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4" /> View Case Study
                    </span>
                  </div>

                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[var(--bg-glass-strong)] backdrop-blur-md border border-[var(--border-soft)] text-xs font-bold gradient-text">
                    {project.metric}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{project.cat}</span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="cta-mesh" aria-hidden="true">
          <div className="glow glow-center" />
        </div>
        <div className="container-nueera text-center relative z-10">
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
