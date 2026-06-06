'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe, Megaphone, Cpu, Palette, Sparkles, Video, FileText,
  CheckCircle2, ArrowRight, ChevronRight, Plus,
  Search, Target, Wrench, TrendingUp,
  Heart, ShoppingCart, Cloud, GraduationCap, Dumbbell, Rocket,
  Quote,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp, GhostButton } from '@/components/ui-extensions';
import { PremiumButton } from '@/components/premium-button';

/* ──────────────────────────── DATA ──────────────────────────── */

const services = [
  {
    id: 'web-mobile',
    icon: Globe,
    title: 'Website & Mobile App Development',
    tagline: 'Full-stack development with conversion-optimized UX',
    description: 'Custom websites, progressive web apps, React Native & Flutter mobile apps, e-commerce platforms, and SaaS dashboards — all built for speed, scale, and search visibility.',
    color: 'blue' as const,
    deliverables: ['Custom Website / Web App', 'Mobile App (iOS + Android)', 'E-commerce Platform', 'Progressive Web App (PWA)', 'Admin Dashboard', 'API Development'],
    technologies: ['Next.js', 'React', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    process: ['Requirements & Wireframes', 'UI/UX Design & Prototype', 'Development & Testing', 'Launch & Optimization'],
    result: 'Avg 3x conversion increase',
    startingPrice: '₹2.5L',
    timeline: '6-12 weeks',
  },
  {
    id: 'growth-marketing',
    icon: Megaphone,
    title: 'Growth Marketing System',
    tagline: 'Data-driven acquisition that compounds over time',
    description: 'Full-funnel growth strategy including SEO, paid ads, content marketing, social media, email automation, and analytics — designed to deliver measurable ROI.',
    color: 'orange' as const,
    deliverables: ['SEO Strategy & Implementation', 'Google & Meta Ads Management', 'Content Marketing', 'Social Media Management', 'Email Automation', 'Analytics & Reporting'],
    technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'Google Analytics', 'Mailchimp', 'HubSpot'],
    process: ['Market Research & Audit', 'Strategy & Funnel Design', 'Campaign Launch & A/B Testing', 'Scale & Optimize'],
    result: '3x avg traffic increase',
    startingPrice: '₹1.5L/month',
    timeline: 'Ongoing',
  },
  {
    id: 'tech-automation',
    icon: Cpu,
    title: 'Tech Automation System',
    tagline: 'Eliminate bottlenecks with intelligent automation',
    description: 'Custom automation solutions, API integrations, workflow optimization, AI-powered tools, and cloud migration — freeing your team to focus on high-value work.',
    color: 'blue' as const,
    deliverables: ['Workflow Automation', 'Custom API Integrations', 'AI/ML Solutions', 'Cloud Migration', 'Process Optimization', 'Chatbots & Virtual Assistants'],
    technologies: ['Python', 'Node.js', 'AWS Lambda', 'Docker', 'Zapier', 'OpenAI API', 'Redis', 'Firebase'],
    process: ['Process Audit & Mapping', 'Solution Architecture', 'Build & Integrate', 'Monitor & Optimize'],
    result: '60% time savings avg',
    startingPrice: '₹2L',
    timeline: '4-8 weeks',
  },
  {
    id: 'uiux-design',
    icon: Palette,
    title: 'UI/UX Design',
    tagline: 'Research-backed interfaces that convert',
    description: 'User research, wireframing, prototyping, design systems, and usability testing — creating digital experiences that users love and businesses profit from.',
    color: 'orange' as const,
    deliverables: ['User Research & Persona Mapping', 'Wireframes & Information Architecture', 'High-Fidelity Prototypes', 'Design System & Component Library', 'Usability Testing', 'Handoff to Development'],
    technologies: ['Figma', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Lottie', 'Storybook'],
    process: ['Research & Discovery', 'Wireframes & User Flows', 'Visual Design & Prototyping', 'Testing & Handoff'],
    result: '2x user engagement increase',
    startingPrice: '₹1.5L',
    timeline: '3-6 weeks',
  },
  {
    id: 'branding',
    icon: Sparkles,
    title: 'Branding & Strategy',
    tagline: 'Distinctive identities that command market attention',
    description: 'Complete brand identity systems, visual guidelines, messaging frameworks, go-to-market strategies, and competitive positioning.',
    color: 'blue' as const,
    deliverables: ['Brand Strategy & Positioning', 'Logo & Visual Identity', 'Brand Guidelines Document', 'Messaging Framework', 'Marketing Collateral', 'Social Media Templates'],
    technologies: ['Adobe Creative Suite', 'Figma', 'Canva', 'Brandbook', 'Notion'],
    process: ['Brand Discovery Workshop', 'Strategy & Positioning', 'Identity Design', 'Guidelines & Launch Kit'],
    result: 'Stronger brand recall',
    startingPrice: '₹1L',
    timeline: '3-5 weeks',
  },
  {
    id: 'video-production',
    icon: Video,
    title: 'Video Production & Motion Graphics',
    tagline: 'Visual storytelling that captivates audiences',
    description: 'Promotional videos, social media content, motion graphics, product showcases, testimonial videos, and brand films — produced to the highest standard.',
    color: 'orange' as const,
    deliverables: ['Promotional Videos', 'Social Media Reels & Content', 'Motion Graphics & Animation', 'Product Showcase Videos', 'Testimonial Videos', 'Brand Films'],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender', 'Cinema 4D'],
    process: ['Concept & Script', 'Pre-Production & Planning', 'Production & Shooting', 'Post-Production & Delivery'],
    result: '5x social engagement boost',
    startingPrice: '₹75K',
    timeline: '2-4 weeks',
  },
  {
    id: 'content-strategy',
    icon: FileText,
    title: 'Content Strategy & Copywriting',
    tagline: 'Words that drive action and build authority',
    description: 'Content audits, editorial calendars, SEO copywriting, blog strategy, thought leadership content, and distribution — building your brand voice online.',
    color: 'blue' as const,
    deliverables: ['Content Audit & Strategy', 'Editorial Calendar', 'SEO-Optimized Copywriting', 'Blog & Article Writing', 'Thought Leadership Content', 'Distribution Strategy'],
    technologies: ['SEMrush', 'Ahrefs', 'Grammarly', 'Google Docs', 'Notion', 'Buffer'],
    process: ['Content Audit & Research', 'Strategy & Calendar', 'Creation & Optimization', 'Publish & Analyze'],
    result: '4x organic traffic growth',
    startingPrice: '₹50K/month',
    timeline: 'Ongoing',
  },
];

const processSteps = [
  {
    icon: Search,
    title: 'Discovery & Audit',
    description: 'We analyze your current state, market position, and growth opportunities to create a clear project roadmap.',
    color: 'blue' as const,
  },
  {
    icon: Target,
    title: 'Strategy & Planning',
    description: 'Custom strategy with clear milestones, deliverables, timelines, and measurable KPIs.',
    color: 'orange' as const,
  },
  {
    icon: Wrench,
    title: 'Build & Execute',
    description: 'Our team builds, tests, and launches your solution with precision, speed, and regular updates.',
    color: 'blue' as const,
  },
  {
    icon: TrendingUp,
    title: 'Optimize & Scale',
    description: 'Post-launch optimization based on real data — continuously improving performance and ROI.',
    color: 'orange' as const,
  },
];

const industries = [
  { icon: Heart, name: 'Healthcare', desc: 'HIPAA-compliant platforms, patient portals, and health tech solutions.' },
  { icon: ShoppingCart, name: 'E-commerce', desc: 'High-converting storefronts, payment systems, and inventory management.' },
  { icon: Cloud, name: 'SaaS & Tech', desc: 'Scalable architectures, dashboards, and developer tools.' },
  { icon: GraduationCap, name: 'Education', desc: 'LMS platforms, online courses, and student engagement tools.' },
  { icon: Dumbbell, name: 'Fitness & Sports', desc: 'Booking apps, member portals, and fitness content platforms.' },
  { icon: Rocket, name: 'Startups', desc: 'MVP development, pitch decks, and growth-focused digital products.' },
];

const faqData = [
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope. A standard website takes 6-8 weeks, mobile apps 8-12 weeks, and branding 3-5 weeks. We provide exact timelines during your strategy call.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'We specialize in modern stacks: Next.js, React, React Native, Flutter, Node.js, Python, AWS, Firebase, and more. We choose the best tech for your specific needs.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes! We offer flexible maintenance packages with bug fixes, performance monitoring, security updates, and feature enhancements. Priority support with 24h response guaranteed.',
  },
  {
    q: 'How does your pricing work?',
    a: 'We offer project-based and retainer pricing. After your free strategy call, we provide a transparent proposal with clear deliverables, timelines, and costs — no hidden fees.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We frequently collaborate with in-house teams and integrate with existing systems, adapting our workflow to fit seamlessly with yours.',
  },
  {
    q: "What's included in a website project?",
    a: 'Every website includes: custom design, responsive development, SEO optimization, CMS integration, contact forms, analytics setup, performance tuning, and 30 days of post-launch support.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We sign NDAs before starting any project. Your intellectual property and project details are kept strictly confidential.',
  },
  {
    q: 'What makes NueEra different?',
    a: "We're business-first engineers. Every decision is tied to your revenue and growth. Our delivery framework ensures measurable results, transparent communication, and zero fluff.",
  },
];

const testimonials = [
  {
    stat: '4x',
    statLabel: 'online sales growth in 3 months',
    quote: 'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Their team understood our vision perfectly.',
    name: 'Priya Mehta',
    role: 'Founder, FreshBite Organics',
    color: 'orange' as const,
  },
  {
    stat: '3x',
    statLabel: 'organic traffic, 2x lead generation',
    quote: 'The growth marketing system NueEra implemented drove massive results. Their data-driven approach gave us complete confidence in the strategy.',
    name: 'Amit Deshmukh',
    role: 'CEO, UrbanFit Gyms',
    color: 'blue' as const,
  },
  {
    stat: '99.9%',
    statLabel: 'uptime on healthcare platform',
    quote: 'We needed a reliable partner for our healthcare platform with strict security requirements. NueEra delivered an exceptional HIPAA-compliant solution.',
    name: 'Sneha Kulkarni',
    role: 'CTO, MediConnect Health',
    color: 'orange' as const,
  },
];

/* ──────────────────────────── COMPONENTS ──────────────────────────── */

function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] whitespace-nowrap">
      {name}
    </span>
  );
}

function WhatsAppCTA({ serviceTitle }: { serviceTitle: string }) {
  const handleClick = () => {
    window.open(
      `https://wa.me/917066607424?text=Hi%20NueEra%2C%20I%27m%20interested%20in%20${encodeURIComponent(serviceTitle)}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-white px-5 py-2.5 rounded-lg
        bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)]
        hover:shadow-[0_4px_20px_var(--orange-glow)]`}
    >
      Get Quote <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

/* ──────────────────────────── PAGE ──────────────────────────── */

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* ═══════════════════ 1. HERO ═══════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-4">
              <Link href="/" className="hover:text-[var(--blue-primary)] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[var(--text-primary)]">Services</span>
            </nav>
          </FadeUp>

          <FadeUp>
            <SectionBadge>Our Services</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">
              What We <span className="gradient-text">Deliver</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              End-to-end digital solutions designed to solve real business problems and deliver measurable results.
            </p>
          </FadeUp>

          {/* Stat pills */}
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                7 Core Services
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                ₹50K Starting Price
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-soft)] text-white">
                Free Strategy Call
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════ 2. SERVICE CATALOG ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>All Services</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">
                Our Service <span className="gradient-text">Catalog</span>
              </SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">
                Seven comprehensive solutions across every area of digital excellence. Each designed for measurable impact.
              </SectionDescription>
            </FadeUp>
          </div>

          <div className="space-y-6">
            {services.map((service, idx) => (
              <FadeUp key={service.id} delay={0.05 + idx * 0.04}>
                <div className={`relative ${service.color === 'blue' ? 'service-glow-blue' : 'service-glow-orange'}`}>
                  <GlassCard className="p-6 md:p-8 group">
                    {/* Top row: Icon, title, tagline */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                            service.color === 'blue'
                              ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                              : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                          }`}
                        >
                          <service.icon
                            className={`w-7 h-7 ${
                              service.color === 'blue'
                                ? 'text-[var(--blue-primary)]'
                                : 'text-[var(--orange-primary)]'
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">{service.title}</h3>
                          <p className="text-[var(--text-muted)] text-sm mt-1">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Price & Timeline badges — desktop */}
                      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                          Starting {service.startingPrice}
                        </span>
                        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Two column layout: Deliverables | Technologies */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                          }`} />
                          What&apos;s Included
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                service.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                              }`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {service.deliverables.length > 4 && (
                          <div className="mt-2">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.deliverables.slice(4).map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                    service.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                                  }`} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                          }`} />
                          Technologies We Use
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 5).map((tech) => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                          {service.technologies.length > 5 && (
                            <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                              +{service.technologies.length - 5} more
                            </span>
                          )}
                        </div>

                        {/* Mini process timeline */}
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 mt-5 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            service.color === 'blue' ? 'bg-[var(--blue-primary)]' : 'bg-[var(--orange-primary)]'
                          }`} />
                          Our Process
                        </h4>
                        <div className="flex items-center gap-1 flex-wrap">
                          {service.process.map((step, stepIdx) => (
                            <div key={step} className="flex items-center gap-1">
                              <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                                  service.color === 'blue'
                                    ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                                    : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                                }`}>
                                  {stepIdx + 1}
                                </span>
                                {step}
                              </span>
                              {stepIdx < service.process.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-[var(--border-soft)]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom row: Result highlight, Price/Timeline (mobile), CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[var(--border-soft)]">
                      <div className="flex items-center gap-4 flex-wrap">
                        {/* Result stat */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                          service.color === 'blue'
                            ? 'bg-[var(--blue-primary)]/10 text-[var(--blue-primary)]'
                            : 'bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]'
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-semibold">{service.result}</span>
                        </div>

                        {/* Price & Timeline — mobile */}
                        <div className="flex items-center gap-2 sm:hidden">
                          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-primary)]">
                            {service.startingPrice}
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)]">
                            {service.timeline}
                          </span>
                        </div>
                      </div>

                      <WhatsAppCTA serviceTitle={service.title} />
                    </div>
                  </GlassCard>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 3. OUR PROCESS ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[10%] right-[-5%]"
            style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[5%] left-[-3%]"
            style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
          />
        </div>

        <div className="container-nueera relative z-10">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Our Process</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">
                How We Deliver <span className="gradient-text">Every Service</span>
              </SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">
                A proven four-step methodology that ensures every project delivers measurable business impact.
              </SectionDescription>
            </FadeUp>
          </div>

          {/* Desktop: Horizontal timeline */}
          <div className="mt-16 hidden md:block">
            <div className="grid grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[12.5%] right-[12.5%] process-line" />

              {processSteps.map((step, idx) => (
                <FadeUp key={step.title} delay={0.15 + idx * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10 ${
                        step.color === 'blue'
                          ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                          : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                      }`}
                      style={{
                        boxShadow:
                          step.color === 'blue'
                            ? '0 0 30px var(--glow-blue), 0 8px 24px rgba(0,0,0,0.2)'
                            : '0 0 30px var(--glow-orange), 0 8px 24px rgba(0,0,0,0.2)',
                      }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                      Step {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[220px]">{step.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="mt-12 md:hidden">
            <div className="relative pl-10">
              <div className="absolute left-4 top-4 bottom-4 w-[3px] process-line" />

              {processSteps.map((step, idx) => (
                <FadeUp key={step.title} delay={0.1 + idx * 0.1}>
                  <div className="relative flex gap-4 pb-8 last:pb-0">
                    <div
                      className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                        step.color === 'blue'
                          ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                          : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                      }`}
                      style={{
                        boxShadow:
                          step.color === 'blue'
                            ? '0 0 20px var(--glow-blue)'
                            : '0 0 20px var(--glow-orange)',
                      }}
                    >
                      <step.icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="pt-1">
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                        Step {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{step.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 4. INDUSTRIES WE SERVE ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Industries</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">
                Solutions Across <span className="gradient-text">Industries</span>
              </SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">
                We bring deep domain expertise to every sector we serve, delivering solutions that understand your unique challenges.
              </SectionDescription>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {industries.map((industry, idx) => (
              <FadeUp key={industry.name} delay={0.1 + idx * 0.06}>
                <GlassCard className="text-center h-full group">
                  <div
                    className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300 group-hover:scale-110
                      ${idx % 2 === 0
                        ? 'bg-[var(--blue-primary)]/10 group-hover:bg-[var(--blue-primary)]/20'
                        : 'bg-[var(--orange-primary)]/10 group-hover:bg-[var(--orange-primary)]/20'
                      }`}
                  >
                    <industry.icon
                      className={`w-6 h-6 ${
                        idx % 2 === 0 ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                      }`}
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-[var(--text-primary)] mb-1">{industry.name}</h3>
                  <p className="text-[var(--text-muted)] text-xs md:text-sm leading-relaxed">{industry.desc}</p>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 5. FAQ ═══════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>FAQ</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">
                Common <span className="gradient-text">Questions</span>
              </SectionTitle>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionDescription className="mx-auto mt-4">
                Everything you need to know about our services and working with NueEra.
              </SectionDescription>
            </FadeUp>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, idx) => (
              <FadeUp key={idx} delay={0.1 + idx * 0.04}>
                <div className={`faq-accordion-item ${openFaqIndex === idx ? 'open' : ''}`}>
                  <button
                    className="faq-accordion-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                  >
                    <span>{item.q}</span>
                    <div className="faq-accordion-icon">
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`faq-accordion-content ${openFaqIndex === idx ? 'open' : ''}`}>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 6. SERVICE TESTIMONIALS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="text-center mb-12">
            <FadeUp>
              <SectionBadge>Results</SectionBadge>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionTitle className="mt-4">
                The <span className="gradient-text">Impact We Deliver</span>
              </SectionTitle>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <FadeUp key={t.name} delay={0.1 + idx * 0.1}>
                <GlassCard className="text-left h-full flex flex-col">
                  {/* Big stat */}
                  <div className="mb-4">
                    <div
                      className={`text-4xl font-extrabold ${
                        t.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                      }`}
                    >
                      {t.stat}
                    </div>
                    <p className="text-[var(--text-muted)] text-sm mt-1">{t.statLabel}</p>
                  </div>

                  {/* Quote */}
                  <Quote className={`w-6 h-6 mb-3 opacity-30 ${
                    t.color === 'blue' ? 'text-[var(--blue-primary)]' : 'text-[var(--orange-primary)]'
                  }`} />
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--border-soft)]">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        t.color === 'blue'
                          ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--blue-deep)]'
                          : 'bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]'
                      }`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[var(--text-primary)] text-sm font-semibold">{t.name}</p>
                      <p className="text-[var(--text-muted)] text-xs">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 7. CTA ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="cta-mesh" aria-hidden="true">
          <div className="glow glow-center" />
        </div>
        <div className="container-nueera text-center relative z-10">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Schedule a free consultation to discuss your project and get a custom proposal.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <PremiumButton
                onClick={() => {
                  window.open(
                    'https://wa.me/917066607424?text=Hi%20NueEra%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call',
                    '_blank'
                  );
                }}
              >
                Book Strategy Call
              </PremiumButton>
              <Link href="/portfolio">
                <GhostButton>View Our Work</GhostButton>
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-[var(--text-muted)] text-sm">
              🔒 Free consultation &bull; Custom proposal &bull; No hidden fees
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
