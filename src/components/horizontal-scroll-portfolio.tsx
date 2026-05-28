'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription } from './ui-extensions';

const PORTFOLIO_ITEMS = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.',
    img: '/assets/images/img1.webp',
    color: 'blue',
    metrics: '+42% Conversion',
  },
  {
    title: 'Health & Fitness App',
    category: 'Mobile App',
    description: 'Cross-platform mobile application with AI-powered workout plans and health tracking.',
    img: '/assets/images/img2.webp',
    color: 'orange',
    metrics: '50K+ Downloads',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Analytics dashboard with real-time data visualization, reporting, and team collaboration.',
    img: '/assets/images/img3.webp',
    color: 'blue',
    metrics: '3x Data Speed',
  },
  {
    title: 'Brand Identity System',
    category: 'Design',
    description: 'Complete brand identity including logo, guidelines, and marketing collateral.',
    img: '/assets/images/img4.webp',
    color: 'orange',
    metrics: '+60% Recognition',
  },
  {
    title: 'Growth Marketing Campaign',
    category: 'Marketing',
    description: 'Multi-channel campaign that drove 3x increase in organic traffic and lead generation.',
    img: '/assets/images/img5.webp',
    color: 'blue',
    metrics: '3x Traffic Growth',
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours, smart search, and mortgage calculators.',
    img: '/assets/images/img6.webp',
    color: 'orange',
    metrics: '$2M+ Transactions',
  },
];

export function HorizontalScrollPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%']);

  return (
    <section ref={containerRef} className="horizontal-scroll-section relative py-20 md:py-28 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <SectionBadge>Our Portfolio</SectionBadge>
        <SectionTitle className="mt-4">
          Projects That{' '}
          <span className="gradient-text">Drive Results</span>
        </SectionTitle>
        <SectionDescription className="mx-auto mt-4">
          Scroll to explore our portfolio of impactful digital solutions across industries.
        </SectionDescription>
      </div>

      {/* Horizontal scrolling track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />

        <motion.div
          className="horizontal-scroll-track pl-8 pr-8"
          style={shouldReduceMotion ? {} : { x }}
        >
          {PORTFOLIO_ITEMS.map((project, i) => (
            <motion.div
              key={project.title}
              className="horizontal-scroll-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full group cursor-pointer">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
                    <span className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/10 border border-white/20 text-white inline-flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Project
                    </span>
                  </div>

                  {/* Metric badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md border ${
                    project.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/20 border-[var(--blue-primary)]/30 text-[var(--blue-soft)]'
                      : 'bg-[var(--orange-primary)]/20 border-[var(--orange-primary)]/30 text-[var(--orange-soft)]'
                  }`}>
                    {project.metrics}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]'
                      : 'bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mt-3 mb-2 group-hover:text-[var(--blue-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm line-clamp-2">{project.description}</p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-[var(--blue-primary)] text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
