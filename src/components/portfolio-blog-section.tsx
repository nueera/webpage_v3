'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { SectionBadge, FadeUp } from '@/components/ui-extensions';

const BLOG_ARTICLES = [
  {
    id: 'nextjs-edge',
    title: 'Building Sub-Second Edge Architecture with Next.js 16',
    category: 'Engineering & Performance',
    readTime: '6 min read',
    date: 'Aug 2026',
    summary: 'How we architect sub-100ms global web applications leveraging Next.js 16 Edge runtime, stale-while-revalidate caching, and distributed databases.',
    image: '/assets/images/img1.webp',
    tags: ['Next.js 16', 'Edge API', 'Performance'],
  },
  {
    id: 'mobile-concurrency',
    title: 'Scaling Mobile Applications to 100K+ Concurrent Users',
    category: 'Mobile & Infrastructure',
    readTime: '8 min read',
    date: 'Jul 2026',
    summary: 'Architectural patterns for WebSocket connection pooling, optimistic UI updates, and real-time state synchronization across iOS and Android.',
    image: '/assets/images/img2.webp',
    tags: ['React Native', 'WebSockets', 'Scale'],
  },
  {
    id: 'ai-automation',
    title: 'Automating Enterprise Operations with Custom AI Agents',
    category: 'AI & Workflows',
    readTime: '5 min read',
    date: 'Jul 2026',
    summary: 'Practical frameworks for integrating custom AI agents and vector databases to streamline complex business workflows and eliminate bottlenecks.',
    image: '/assets/images/img3.webp',
    tags: ['AI Agents', 'Automation', 'Python'],
  },
];

export function PortfolioBlogSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--bg-main)]">
      <div className="container-nueera space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionBadge>Tech & Engineering Insights</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="heading-gradient text-3xl md:text-5xl font-extrabold mb-4 mt-4">
              Company Case Studies & Insights
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-base md:text-lg">
              Explore our technical research, system architecture breakdowns, and industry benchmarks written by NueEra engineers.
            </p>
          </FadeUp>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article, idx) => (
            <FadeUp key={article.id} delay={idx * 0.1}>
              <article className="glass-card group flex flex-col justify-between overflow-hidden !p-0 rounded-2xl h-full border border-[var(--border-soft)] hover:border-[var(--border-active)] transition-all duration-300">
                <div>
                  {/* Thumbnail Image */}
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-glass-strong)] backdrop-blur-md border border-[var(--border-soft)] text-[var(--blue-primary)] flex items-center gap-1.5">
                      <Tag className="w-3 h-3" /> {article.category}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-extrabold text-[var(--text-primary)] text-xl leading-snug group-hover:text-[var(--blue-primary)] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Article Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[var(--border-soft)] mt-4">
                  <div className="flex items-center gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-glass)] text-[var(--text-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[var(--blue-primary)] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
