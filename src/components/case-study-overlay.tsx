'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import {
  X,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Users,
  Target,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* ──────────────────────── Types ──────────────────────── */

export interface CaseStudyData {
  title: string;
  category: string;
  description: string;
  img: string;
  color: 'blue' | 'orange';
  metrics: string;
  // Extended data for overlay
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: { label: string; value: string }[];
  techStack?: string[];
  duration?: string;
  teamSize?: string;
  images?: string[];
}

/* ──────────────────────── Extended Portfolio Data ──────────────────────── */

export const CASE_STUDY_DATA: CaseStudyData[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.',
    img: '/assets/images/img1.webp',
    color: 'blue',
    metrics: '+42% Conversion',
    fullDescription:
      'We built a comprehensive e-commerce platform for a leading retail brand that handles thousands of daily transactions. The platform features real-time inventory synchronization across multiple warehouses, AI-powered product recommendations that boost average order value, and a seamless checkout experience optimized for mobile-first consumers.',
    challenge:
      'The client was struggling with a legacy system that could not handle peak traffic loads, resulting in lost revenue during high-demand periods. Their conversion rate was stagnating at 1.8%, well below industry average.',
    solution:
      'We architected a headless commerce solution with Next.js on the frontend and a microservices backend. Implemented real-time inventory management with WebSocket updates, integrated an ML recommendation engine, and built a one-click checkout flow that reduced cart abandonment by 34%.',
    results: [
      { label: 'Conversion Rate', value: '+42%' },
      { label: 'Revenue Growth', value: '2.8x' },
      { label: 'Page Load Speed', value: '<1.2s' },
      { label: 'Cart Abandonment', value: '-34%' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe'],
    duration: '4 months',
    teamSize: '6 members',
    images: ['/assets/images/img1.webp', '/assets/images/img2.webp', '/assets/images/img3.webp'],
  },
  {
    title: 'Health & Fitness App',
    category: 'Mobile App',
    description: 'Cross-platform mobile application with AI-powered workout plans and health tracking.',
    img: '/assets/images/img2.webp',
    color: 'orange',
    metrics: '50K+ Downloads',
    fullDescription:
      'A cross-platform health and fitness application that delivers personalized workout plans using AI algorithms. The app tracks user progress through wearable device integration, provides nutrition planning, and features a vibrant community of fitness enthusiasts sharing their journeys.',
    challenge:
      'The fitness app market is saturated with generic solutions. The client needed a differentiated product that could provide genuinely personalized experiences and retain users beyond the typical 2-week drop-off period.',
    solution:
      'We built an AI engine that creates adaptive workout plans based on user fitness levels, goals, and recovery patterns. Integrated with Apple Health and Google Fit for seamless data sync, and gamified the experience with streak rewards and community challenges.',
    results: [
      { label: 'Downloads', value: '50K+' },
      { label: 'Retention (30-day)', value: '68%' },
      { label: 'App Rating', value: '4.8★' },
      { label: 'Premium Conversion', value: '12%' },
    ],
    techStack: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'HealthKit'],
    duration: '5 months',
    teamSize: '5 members',
    images: ['/assets/images/img2.webp', '/assets/images/img4.webp', '/assets/images/img5.webp'],
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Analytics dashboard with real-time data visualization, reporting, and team collaboration.',
    img: '/assets/images/img3.webp',
    color: 'blue',
    metrics: '3x Data Speed',
    fullDescription:
      'An enterprise-grade analytics dashboard that transforms raw data into actionable insights. Features real-time data streaming, customizable widget layouts, automated report generation, and team collaboration tools that enable data-driven decision making across organizations.',
    challenge:
      'The client was managing data across 12 different tools with no unified view. Report generation took 3-5 business days, and teams were making decisions on outdated information.',
    solution:
      'We built a composable dashboard architecture with drag-and-drop widgets, real-time data pipelines processing 10M+ events daily, and automated report scheduling. Integrated with 15+ data sources through a universal connector framework.',
    results: [
      { label: 'Data Processing', value: '3x Faster' },
      { label: 'Report Time', value: '-95%' },
      { label: 'Data Sources', value: '15+' },
      { label: 'Active Users', value: '2,400+' },
    ],
    techStack: ['Next.js', 'D3.js', 'Kafka', 'ClickHouse', 'Kubernetes'],
    duration: '6 months',
    teamSize: '8 members',
    images: ['/assets/images/img3.webp', '/assets/images/img6.webp', '/assets/images/img1.webp'],
  },
  {
    title: 'Brand Identity System',
    category: 'Design',
    description: 'Complete brand identity including logo, guidelines, and marketing collateral.',
    img: '/assets/images/img4.webp',
    color: 'orange',
    metrics: '+60% Recognition',
    fullDescription:
      'A comprehensive brand identity overhaul for a fintech startup transitioning from seed stage to Series A. The project encompassed logo design, typography systems, color palettes, iconography, marketing collateral, and a detailed brand guidelines document ensuring consistency across all touchpoints.',
    challenge:
      'The company had outgrown its original brand identity and needed a premium, trustworthy image to attract enterprise clients and investors. Brand recognition was low at 12% in their target market.',
    solution:
      'We conducted extensive market research and competitor analysis, then developed a brand system that conveys trust, innovation, and stability. Created a cohesive visual language with custom illustrations, a flexible design system, and comprehensive guidelines for digital and print applications.',
    results: [
      { label: 'Brand Recognition', value: '+60%' },
      { label: 'Enterprise Leads', value: '2.5x' },
      { label: 'Brand Consistency', value: '98%' },
      { label: 'Assets Created', value: '200+' },
    ],
    techStack: ['Figma', 'Illustrator', 'After Effects', 'Framer'],
    duration: '2 months',
    teamSize: '3 members',
    images: ['/assets/images/img4.webp', '/assets/images/img5.webp', '/assets/images/img6.webp'],
  },
  {
    title: 'Growth Marketing Campaign',
    category: 'Marketing',
    description: 'Multi-channel campaign that drove 3x increase in organic traffic and lead generation.',
    img: '/assets/images/img5.webp',
    color: 'blue',
    metrics: '3x Traffic Growth',
    fullDescription:
      'A data-driven, multi-channel growth marketing campaign for a B2B SaaS company. The campaign spanned content marketing, SEO optimization, paid acquisition, email nurture sequences, and social media engagement, all unified under a single performance dashboard.',
    challenge:
      'The client was spending heavily on paid ads with diminishing returns. Organic traffic was flat, and their sales pipeline was running dry with a 6-month customer acquisition cost that exceeded customer lifetime value.',
    solution:
      'We developed a content-led growth engine with pillar-based SEO strategy, automated email nurture workflows triggered by intent signals, and a paid acquisition strategy focused on high-intent keywords. Built a custom attribution model to optimize spend allocation in real-time.',
    results: [
      { label: 'Organic Traffic', value: '3x Growth' },
      { label: 'CAC Reduction', value: '-47%' },
      { label: 'MQL to SQL', value: '+28%' },
      { label: 'Pipeline Value', value: '$2.4M' },
    ],
    techStack: ['HubSpot', 'Semrush', 'Google Ads', 'Mailchimp', 'Looker'],
    duration: '8 months',
    teamSize: '4 members',
    images: ['/assets/images/img5.webp', '/assets/images/img1.webp', '/assets/images/img3.webp'],
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours, smart search, and mortgage calculators.',
    img: '/assets/images/img6.webp',
    color: 'orange',
    metrics: '$2M+ Transactions',
    fullDescription:
      'A next-generation real estate platform that transforms property discovery with immersive virtual tours, AI-powered search that understands natural language descriptions, and integrated financial tools including mortgage calculators, pre-qualification, and closing cost estimators.',
    challenge:
      'The local real estate market relied on outdated listing sites with poor UX, no virtual viewing options, and fragmented tools. Agents spent 60% of their time on administrative tasks instead of closing deals.',
    solution:
      'We built a platform with Matterport-integrated 3D virtual tours, a semantic search engine that matches buyers with properties based on lifestyle preferences, and an agent dashboard that automates 80% of listing management. Integrated mortgage pre-qualification through banking partners.',
    results: [
      { label: 'Transactions', value: '$2M+' },
      { label: 'Time to Close', value: '-40%' },
      { label: 'Virtual Tours', value: '15K+' },
      { label: 'Agent Efficiency', value: '+65%' },
    ],
    techStack: ['Next.js', 'Matterport', 'Elasticsearch', 'Stripe', 'Maps API'],
    duration: '5 months',
    teamSize: '7 members',
    images: ['/assets/images/img6.webp', '/assets/images/img2.webp', '/assets/images/img4.webp'],
  },
];

/* ──────────────────────── Overlay Component ──────────────────────── */

interface CaseStudyOverlayProps {
  study: CaseStudyData | null;
  onClose: () => void;
}

export function CaseStudyOverlay({ study, onClose }: CaseStudyOverlayProps) {
  const shouldReduceMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (study) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [study]);

  // Reset image index when study changes - derive from study identity
  const imageIndexKey = study?.title ?? '';
  
  // We track previous key to detect changes
  const [prevKey, setPrevKey] = useState(imageIndexKey);
  if (imageIndexKey !== prevKey) {
    setPrevKey(imageIndexKey);
    setCurrentImageIndex(0);
  }

  // Keyboard support
  useEffect(() => {
    if (!study) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && study.images) {
        setCurrentImageIndex((prev) => (prev + 1) % (study.images?.length || 1));
      }
      if (e.key === 'ArrowLeft' && study.images) {
        setCurrentImageIndex((prev) => (prev - 1 + (study.images?.length || 1)) % (study.images?.length || 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [study, onClose]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  }, []);

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          className="fixed inset-0 z-[5000] flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Main content panel */}
          <motion.div
            className="relative w-full h-full overflow-y-auto"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onScroll={handleScroll}
          >
            {/* Close button */}
            <motion.button
              className={`fixed top-6 right-6 z-[5001] w-12 h-12 flex items-center justify-center rounded-full
                bg-[var(--bg-main)]/80 backdrop-blur-md border border-[var(--border-soft)]
                text-[var(--text-primary)] transition-all duration-300
                hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)] hover:scale-110
                ${scrollY > 100 ? 'shadow-lg' : ''}`}
              onClick={onClose}
              whileTap={{ scale: 0.9 }}
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Hero Image Section */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
              <Image
                src={study.images?.[currentImageIndex] || study.img}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />

              {/* Image navigation */}
              {study.images && study.images.length > 1 && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev - 1 + study.images!.length) % study.images!.length
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {study.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === currentImageIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev + 1) % study.images!.length)
                    }
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Category badge */}
              <div className="absolute bottom-28 left-6 md:left-12">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md border ${
                    study.color === 'blue'
                      ? 'bg-[var(--blue-primary)]/20 border-[var(--blue-primary)]/30 text-[var(--blue-soft)]'
                      : 'bg-[var(--orange-primary)]/20 border-[var(--orange-primary)]/30 text-[var(--orange-soft)]'
                  }`}
                >
                  {study.category}
                </motion.span>
              </div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 text-3xl md:text-5xl lg:text-6xl font-bold text-white font-display"
              >
                {study.title}
              </motion.h1>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
              {/* Results Grid */}
              {study.results && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                  {study.results.map((result, i) => (
                    <motion.div
                      key={result.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="glass-card rounded-2xl p-6 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text font-display">
                        {result.value}
                      </div>
                      <div className="text-sm text-[var(--text-muted)] mt-1">{result.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                {/* Left: Main Content */}
                <div className="lg:col-span-2 space-y-10">
                  {/* Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-display flex items-center gap-2">
                      <Target className="w-5 h-5 text-[var(--blue-primary)]" />
                      Overview
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                      {study.fullDescription || study.description}
                    </p>
                  </motion.div>

                  {/* Challenge */}
                  {study.challenge && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-display flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-[var(--orange-primary)]" />
                        The Challenge
                      </h3>
                      <div className="glass-card rounded-2xl p-6 border-l-4 border-[var(--orange-primary)]">
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Solution */}
                  {study.solution && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-display flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[var(--blue-primary)]" />
                        Our Solution
                      </h3>
                      <div className="glass-card rounded-2xl p-6 border-l-4 border-[var(--blue-primary)]">
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right: Sidebar */}
                <div className="space-y-6">
                  {/* Project Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass-card rounded-2xl p-6 space-y-4"
                  >
                    <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider">
                      Project Details
                    </h4>
                    {study.duration && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[var(--blue-primary)]" />
                        <div>
                          <div className="text-xs text-[var(--text-muted)]">Duration</div>
                          <div className="text-sm font-semibold text-[var(--text-primary)]">
                            {study.duration}
                          </div>
                        </div>
                      </div>
                    )}
                    {study.teamSize && (
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-[var(--orange-primary)]" />
                        <div>
                          <div className="text-xs text-[var(--text-muted)]">Team Size</div>
                          <div className="text-sm font-semibold text-[var(--text-primary)]">
                            {study.teamSize}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Tech Stack */}
                  {study.techStack && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="glass-card rounded-2xl p-6"
                    >
                      <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--blue-primary)]/10 text-[var(--blue-primary)] border border-[var(--blue-primary)]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                      Want similar results?
                    </h4>
                    <button
                      onClick={() => window.open('https://wa.me/917066607424', '_blank')}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                        bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]
                        text-white font-semibold transition-all duration-300
                        hover:shadow-[0_0_30px_var(--blue-glow)] hover:scale-[1.02] active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Start Your Project
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
