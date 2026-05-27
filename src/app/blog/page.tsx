'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Calendar, Clock, Tag, User } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const categories = ['All', 'Technology', 'Design', 'Branding', 'Marketing', 'Business'];

const articles = [
  {
    title: '5 Ways AI is Reshaping Web Development in 2025',
    cat: 'Technology',
    date: 'Jan 15, 2025',
    excerpt: 'Artificial intelligence is no longer a futuristic concept — it\'s here, and it\'s transforming how we build for the web.',
    featured: true,
  },
  {
    title: 'The Ultimate Guide to Brand Strategy for Startups',
    cat: 'Branding',
    date: 'Jan 10, 2025',
    excerpt: 'Building a strong brand from day one is critical for startup success. Here\'s your complete guide.',
  },
  {
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    cat: 'Design',
    date: 'Jan 5, 2025',
    excerpt: 'With mobile traffic surpassing desktop, a mobile-first approach isn\'t optional — it\'s essential.',
  },
  {
    title: 'SEO in 2025: What Actually Works',
    cat: 'Marketing',
    date: 'Dec 28, 2024',
    excerpt: 'The SEO landscape keeps evolving. Here are the strategies that deliver real results this year.',
  },
  {
    title: 'From Idea to Launch: Building Your First SaaS Product',
    cat: 'Business',
    date: 'Dec 20, 2024',
    excerpt: 'A practical roadmap for taking your SaaS idea from concept to a market-ready product.',
  },
  {
    title: 'The Psychology of Color in UI Design',
    cat: 'Design',
    date: 'Dec 15, 2024',
    excerpt: 'Color choices in your UI aren\'t just aesthetic — they profoundly affect user behavior and perception.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Blog</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Insights & Ideas</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Stay ahead with expert insights on technology, design, marketing, and business strategy.
          </p>
        </div>
      </section>

      {/* Value Strip */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, label: 'Expert Articles', value: '50+' },
              { icon: Tag, label: 'Categories', value: '6' },
              { icon: Clock, label: 'Weekly Updates', value: 'Fresh' },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-[var(--blue-primary)]" />
                <div className="text-2xl font-extrabold gradient-text">{item.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Category Filter */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${i === 0
                    ? 'bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white'
                    : 'bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {articles[0] && (
            <Link href="/blog/post" className="block mb-12">
              <div className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-[var(--blue-primary)] opacity-30" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{articles[0].cat}</span>
                    <span className="text-[var(--text-muted)] text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {articles[0].date}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[var(--text-primary)] mb-3 hover:text-[var(--blue-primary)] transition-colors">{articles[0].title}</h2>
                  <p className="text-[var(--text-secondary)] mb-4">{articles[0].excerpt}</p>
                  <span className="text-[var(--blue-primary)] text-sm font-semibold inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, i) => (
              <Link key={i} href="/blog/post" className="glass-card rounded-2xl overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-[var(--blue-primary)] opacity-30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{article.cat}</span>
                    <span className="text-[var(--text-muted)] text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--blue-primary)] transition-colors">{article.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Never Miss an Insight</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Stay updated with our latest articles on technology, design, and business.
          </p>
          <Link href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Subscribe to Updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
