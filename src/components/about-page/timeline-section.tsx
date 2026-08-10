'use client';

import { useState } from 'react';
import { SectionBadge, SectionTitle, FadeUp, GlassCard } from '@/components/ui-extensions';
import { timelineItems, TimelineItem } from './data';
import { ArrowRight, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

const yearsList = ['All', '2025', '2026', '2027'];

export default function AboutTimelineSection() {
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const filteredItems = selectedYear === 'All'
    ? timelineItems
    : timelineItems.filter((item) => item.year === selectedYear);

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background ambient mesh and glow */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="orb orb-blue" style={{ opacity: 0.15, top: '20%', left: '10%' }} />
        <div className="orb orb-orange" style={{ opacity: 0.15, bottom: '20%', right: '10%' }} />
      </div>

      <div className="container-nueera relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Our Journey</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              From Idea to <span className="gradient-text">Impact</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore how NueEra grew from a bold vision in 2025 into a full-service agency in 2026 — with even greater milestones coming in 2027 and beyond.
            </p>
          </FadeUp>

          {/* Interactive Year Filter Tabs */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {yearsList.map((year) => {
                const isActive = selectedYear === year;
                const label = year === 'All' ? 'Full Roadmap' : year === '2027' ? '2027 (Future)' : year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white shadow-lg shadow-[var(--glow-blue)] scale-105'
                        : 'bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-soft)] hover:border-[var(--orange-primary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {year === '2027' && <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />}
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* Summary Stats Overview Pills */}
        <FadeUp delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16">
            <div className="glass-card-no-hover p-4 rounded-xl border border-[var(--border-soft)] text-center">
              <span className="text-xs text-[var(--text-muted)] font-medium block mb-1">FOUNDED</span>
              <span className="text-lg font-bold text-[var(--blue-primary)]">2025 (Pune)</span>
            </div>
            <div className="glass-card-no-hover p-4 rounded-xl border border-[var(--border-soft)] text-center">
              <span className="text-xs text-[var(--text-muted)] font-medium block mb-1">FIRST WIN</span>
              <span className="text-lg font-bold text-[var(--orange-primary)]">4x Sales Growth</span>
            </div>
            <div className="glass-card-no-hover p-4 rounded-xl border border-[var(--border-soft)] text-center">
              <span className="text-xs text-[var(--text-muted)] font-medium block mb-1">2026 OFFERINGS</span>
              <span className="text-lg font-bold text-emerald-400">Full-Service Suite</span>
            </div>
            <div className="glass-card-no-hover p-4 rounded-xl border border-[var(--border-soft)] text-center">
              <span className="text-xs text-[var(--text-muted)] font-medium block mb-1">NEXT HORIZON</span>
              <span className="text-lg font-bold text-purple-400">2027 Vision</span>
            </div>
          </div>
        </FadeUp>

        {/* Desktop Timeline (Alternating Center Spine Layout) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Central Glowing Gradient Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] via-emerald-400 to-purple-500 rounded-full opacity-40 shadow-[0_0_15px_var(--blue-primary)]" />

          <div className="space-y-12 relative">
            {filteredItems.map((item: TimelineItem, idx: number) => {
              const isEven = idx % 2 === 0;
              const IconComp = item.icon;

              return (
                <FadeUp key={`${item.year}-${item.title}`} delay={0.05 + idx * 0.08}>
                  <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content Card (Half Width) */}
                    <div className={`w-1/2 ${isEven ? 'text-right pr-4' : 'text-left pl-4'}`}>
                      <GlassCard
                        hover
                        className={`relative overflow-hidden group transition-all duration-300 border ${
                          item.isFuture
                            ? 'border-purple-500/40 bg-gradient-to-br from-purple-950/20 via-[var(--bg-glass)] to-indigo-950/20 shadow-[0_0_25px_rgba(168,85,247,0.15)]'
                            : 'border-[var(--border-soft)] hover:border-[var(--orange-primary)]'
                        }`}
                      >
                        {/* Glow accent bar on hover */}
                        <div
                          className={`absolute top-0 bottom-0 ${isEven ? 'right-0 w-1' : 'left-0 w-1'} bg-gradient-to-b ${
                            item.color === 'blue'
                              ? 'from-[var(--blue-primary)] to-cyan-400'
                              : item.color === 'orange'
                              ? 'from-[var(--orange-primary)] to-amber-400'
                              : item.color === 'emerald'
                              ? 'from-emerald-400 to-teal-500'
                              : 'from-purple-500 to-pink-500'
                          } opacity-70 group-hover:opacity-100 transition-opacity`}
                        />

                        <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                              item.isFuture
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 ring-2 ring-purple-400/30 animate-pulse'
                                : 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                            }`}
                          >
                            <Calendar className="w-3 h-3" />
                            {item.year}
                          </span>
                          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[var(--text-muted)]">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[var(--text-primary)] font-display mb-2 group-hover:text-[var(--orange-primary)] transition-colors flex items-center gap-2">
                          {item.title}
                          {item.isFuture && <Sparkles className="w-4 h-4 text-purple-400 inline" />}
                        </h3>

                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                          {item.desc}
                        </p>

                        {/* Metric Highlight Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-soft)] text-xs font-semibold text-[var(--text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--orange-primary)]" />
                          <span>{item.metric}</span>
                        </div>
                      </GlassCard>
                    </div>

                    {/* Center Node Marker */}
                    <div className="relative z-20 flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-full bg-[var(--bg-secondary)] ring-4 ring-[var(--bg-secondary)] shadow-xl">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${
                          item.color === 'blue'
                            ? 'from-[var(--blue-primary)] to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                            : item.color === 'orange'
                            ? 'from-[var(--orange-primary)] to-amber-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]'
                            : item.color === 'emerald'
                            ? 'from-emerald-500 to-teal-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                            : 'from-purple-600 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]'
                        } transition-transform duration-300 hover:scale-110`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Spacer for opposite half */}
                    <div className="w-1/2" />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline Track */}
        <div className="lg:hidden relative max-w-lg mx-auto pl-6">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-6 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] via-emerald-400 to-purple-500 rounded-full opacity-40" />

          <div className="space-y-8 relative">
            {filteredItems.map((item: TimelineItem, idx: number) => {
              const IconComp = item.icon;

              return (
                <FadeUp key={`${item.year}-${item.title}-mobile`} delay={0.05 + idx * 0.06}>
                  <div className="flex gap-4 items-start relative">
                    {/* Center Node Marker */}
                    <div className="relative z-20 flex-shrink-0 -ml-6 w-12 h-12 rounded-full bg-[var(--bg-secondary)] ring-4 ring-[var(--bg-secondary)] flex items-center justify-center shadow-lg">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${
                          item.color === 'blue'
                            ? 'from-[var(--blue-primary)] to-cyan-500'
                            : item.color === 'orange'
                            ? 'from-[var(--orange-primary)] to-amber-500'
                            : item.color === 'emerald'
                            ? 'from-emerald-500 to-teal-400'
                            : 'from-purple-600 to-pink-500'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <GlassCard
                      hover
                      className={`flex-1 p-5 rounded-2xl border ${
                        item.isFuture
                          ? 'border-purple-500/40 bg-gradient-to-br from-purple-950/20 via-[var(--bg-glass)] to-indigo-950/20'
                          : 'border-[var(--border-soft)]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold text-white ${
                            item.isFuture
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                              : 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                          }`}
                        >
                          {item.year}
                        </span>
                        <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded bg-white/5 text-[var(--text-muted)]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-[var(--text-primary)] text-base mb-1.5 flex items-center gap-1.5">
                        {item.title}
                        {item.isFuture && <Sparkles className="w-4 h-4 text-purple-400" />}
                      </h3>

                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">
                        {item.desc}
                      </p>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-soft)] text-[11px] font-semibold text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3 h-3 text-[var(--orange-primary)]" />
                        <span>{item.metric}</span>
                      </div>
                    </GlassCard>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* Footer CTA Callout for Future Growth */}
        <FadeUp delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--blue-primary)]/10 via-[var(--orange-primary)]/10 to-purple-500/10 border border-[var(--border-soft)] text-sm font-medium text-[var(--text-primary)] shadow-inner">
              <Sparkles className="w-4 h-4 text-[var(--orange-primary)] animate-spin" style={{ animationDuration: '8s' }} />
              <span>Ready to write the next chapter of growth with us?</span>
              <ArrowRight className="w-4 h-4 text-[var(--orange-primary)]" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
