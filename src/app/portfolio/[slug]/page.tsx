'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2, Award, Zap, Layers, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, getProjectBySlug } from '@/lib/portfolio-data';
import BeforeAfterSlider from '@/components/before-after-slider';
import { PremiumButton } from '@/components/premium-button';
import { TiltCard } from '@/components/ui/tilt-card';

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <div className="bg-[var(--bg-main)] min-h-screen pb-24">
      {/* Top Header Breadcrumb */}
      <div className="border-b border-[var(--border-soft)] bg-[var(--bg-secondary)]/50 py-4">
        <div className="container-nueera flex items-center justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--blue-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <span className="text-xs text-[var(--text-muted)] font-medium">Case Study</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[var(--bg-main)] border-b border-[var(--border-soft)] overflow-hidden">
        <div className="container-nueera relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[var(--blue-primary)] bg-[var(--blue-primary)]/10 border border-[var(--blue-primary)]/20 mb-4">
              {project.category} • {project.client}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] font-display leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-8">
              {project.summary}
            </p>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--blue-primary)] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ROI Metrics Bar */}
      <section className="py-12 bg-[var(--bg-secondary)] border-b border-[var(--border-soft)]">
        <div className="container-nueera">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {project.results.map((res) => (
              <TiltCard key={res.label}>
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] text-center">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 font-display">
                    {res.metric}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">{res.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24">
        <div className="container-nueera max-w-5xl mx-auto space-y-16">
          {/* Interactive Before & After Showcase (if present) */}
          {project.beforeImage && project.afterImage && (
            <div>
              <div className="text-center mb-8">
                <span className="section-badge mb-2">Visual Transformation</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-2">
                  Interactive Before & After Comparison
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-soft)]">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel="Legacy Version"
                  afterLabel="Engineered by NueEra"
                />
              </div>
            </div>
          )}

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="p-8 rounded-3xl bg-[var(--bg-glass)] border border-red-500/20 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4 text-red-500">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The Challenge</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-8 rounded-3xl bg-[var(--bg-glass)] border border-emerald-500/20 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4 text-emerald-500">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">The Solution</h3>
              </div>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6 text-[var(--orange-primary)]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                System Architecture
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.architecture.map((arch) => (
                <TiltCard key={arch.title}>
                  <div className="p-6 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-soft)] h-full">
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                      {arch.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {arch.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Technologies Employed</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-glass)] text-[var(--text-primary)] border border-[var(--border-soft)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 border border-[var(--border-soft)] text-center relative overflow-hidden">
              <Award className="w-10 h-10 text-[var(--orange-primary)] mx-auto mb-4" />
              <blockquote className="text-lg md:text-xl font-medium text-[var(--text-primary)] italic max-w-2xl mx-auto mb-6">
                &quot;{project.testimonial.quote}&quot;
              </blockquote>
              <div className="text-sm font-bold text-[var(--text-primary)]">{project.testimonial.author}</div>
              <div className="text-xs text-[var(--text-muted)]">
                {project.testimonial.role}, {project.testimonial.company}
              </div>
            </div>
          )}

          {/* CTA Banner */}
          <div className="text-center pt-8 border-t border-[var(--border-soft)]">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Want Results Like This For Your Business?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto mb-8">
              Book a free strategy call with NueEra to discuss your project requirements.
            </p>
            <div className="flex justify-center">
              <PremiumButton onClick={() => window.open('https://wa.me/917066607424', '_blank')}>
                Schedule Strategy Call
              </PremiumButton>
            </div>
          </div>

          {/* Next Case Study Nav */}
          <div className="flex justify-end pt-6">
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="inline-flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--blue-primary)] transition-all group"
            >
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[var(--text-muted)]">Next Case Study</span>
                <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--blue-primary)] transition-colors">
                  {nextProject.title}
                </h4>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--blue-primary)] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
