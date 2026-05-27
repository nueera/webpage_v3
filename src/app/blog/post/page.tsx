'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Tag, User, Share2, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';

const relatedPosts = [
  { title: 'The Ultimate Guide to Brand Strategy for Startups', cat: 'Branding', date: 'Jan 10, 2025' },
  { title: 'Mobile-First Design: Why It Matters More Than Ever', cat: 'Design', date: 'Jan 5, 2025' },
  { title: 'SEO in 2025: What Actually Works', cat: 'Marketing', date: 'Dec 28, 2024' },
];

export default function BlogPostPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Article' }]} />

      <article className="container-nueera py-12">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm mb-8 hover:text-[var(--blue-primary)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">Technology</span>
            <span className="text-[var(--text-muted)] text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> Jan 15, 2025</span>
            <span className="text-[var(--text-muted)] text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 8 min read</span>
          </div>
          <h1 className="heading-gradient text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            5 Ways AI is Reshaping Web Development in 2025
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <div>
              <p className="font-semibold text-[var(--text-primary)] text-sm">NueEra Team</p>
              <p className="text-[var(--text-muted)] text-xs">Technology & Innovation</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden">
          <div className="h-64 md:h-96 bg-gradient-to-br from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 flex items-center justify-center">
            <BookOpen className="w-20 h-20 text-[var(--blue-primary)] opacity-30" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
            Artificial intelligence is no longer a futuristic concept — it&apos;s here, and it&apos;s transforming how we build for the web. From automated code generation to intelligent user experiences, AI is reshaping every aspect of web development.
          </p>

          <h2 className="heading-gradient text-2xl font-extrabold mt-10 mb-4">1. AI-Powered Code Generation</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Tools like GitHub Copilot and AI-powered IDEs are revolutionizing how developers write code. These tools can generate entire functions, suggest optimizations, and even debug issues in real-time. The result? Faster development cycles and fewer bugs.
          </p>

          <h2 className="heading-gradient text-2xl font-extrabold mt-10 mb-4">2. Intelligent User Experiences</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            AI enables truly personalized web experiences. From dynamic content adaptation to predictive navigation, websites can now anticipate user needs and deliver tailored experiences that increase engagement and conversion rates.
          </p>

          <h2 className="heading-gradient text-2xl font-extrabold mt-10 mb-4">3. Automated Testing & QA</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            AI-driven testing tools can automatically generate test cases, identify edge cases humans might miss, and perform visual regression testing at scale. This means higher quality releases with less manual effort.
          </p>

          <h2 className="heading-gradient text-2xl font-extrabold mt-10 mb-4">4. Smart Performance Optimization</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            AI algorithms can analyze real-time performance data and automatically optimize resource loading, image compression, and caching strategies. This ensures your website always delivers optimal performance.
          </p>

          <h2 className="heading-gradient text-2xl font-extrabold mt-10 mb-4">5. Conversational Interfaces</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Chatbots and voice interfaces powered by large language models are becoming standard features. They provide instant, intelligent responses to user queries, improving customer service and reducing operational costs.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-2">The Future is AI-Enhanced</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              At NueEra, we&apos;re at the forefront of integrating AI into web development. Whether you want to add intelligent features to your existing application or build something entirely new, our team can help you leverage AI effectively.
            </p>
          </div>
        </div>

        {/* Share */}
        <div className="max-w-3xl mx-auto mt-8 flex items-center gap-4">
          <span className="text-[var(--text-muted)] text-sm">Share this article:</span>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] transition-all">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--bg-secondary)] py-16">
        <div className="container-nueera">
          <h2 className="heading-gradient text-2xl font-extrabold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post, i) => (
              <Link key={i} href="/blog/post" className="glass-card rounded-2xl overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-[var(--blue-primary)]/10 to-[var(--orange-primary)]/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-[var(--blue-primary)] opacity-30" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]">{post.cat}</span>
                    <span className="text-[var(--text-muted)] text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm group-hover:text-[var(--blue-primary)] transition-colors">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
