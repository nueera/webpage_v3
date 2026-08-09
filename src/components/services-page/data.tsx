import {
  Globe, Megaphone, Cpu, Palette, Sparkles, Video, FileText,
  Search, Target, Wrench, TrendingUp,
  Heart, ShoppingCart, Cloud, GraduationCap, Dumbbell, Rocket,
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export const services = [
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

export const processSteps = [
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

export const industries = [
  { icon: Heart, name: 'Healthcare', desc: 'HIPAA-compliant platforms, patient portals, and health tech solutions.' },
  { icon: ShoppingCart, name: 'E-commerce', desc: 'High-converting storefronts, payment systems, and inventory management.' },
  { icon: Cloud, name: 'SaaS & Tech', desc: 'Scalable architectures, dashboards, and developer tools.' },
  { icon: GraduationCap, name: 'Education', desc: 'LMS platforms, online courses, and student engagement tools.' },
  { icon: Dumbbell, name: 'Fitness & Sports', desc: 'Booking apps, member portals, and fitness content platforms.' },
  { icon: Rocket, name: 'Startups', desc: 'MVP development, pitch decks, and growth-focused digital products.' },
];

export const faqData = [
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

export const testimonials = [
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

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] whitespace-nowrap">
      {name}
    </span>
  );
}

export function WhatsAppCTA({ serviceTitle }: { serviceTitle: string }) {
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
