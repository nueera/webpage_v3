export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDesc: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  summary: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  techStack: string[];
  architecture: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'freshbite-ecommerce',
    title: 'FreshBite E-Commerce Platform',
    client: 'FreshBite Organics',
    category: 'Web Development',
    shortDesc: 'Full-stack e-commerce platform built for high volume organic sales.',
    image: '/assets/images/img1.webp',
    beforeImage: '/assets/images/img1.webp',
    afterImage: '/assets/images/img2.webp',
    summary:
      'FreshBite Organics needed a high-performance, mobile-first e-commerce web platform capable of handling thousands of daily active shoppers with sub-second page loads and seamless payment integration.',
    problem:
      'The client\'s legacy store suffered from slow loading speeds (5.8s), frequent checkout abandonments (68%), and poor mobile responsiveness, restricting online sales growth.',
    solution:
      'We engineered a modern headless Next.js e-commerce storefront backed by Node.js, Redis caching, and automated inventory sync. Implemented instant product filtering, dynamic cart drawer, and single-click checkout.',
    results: [
      { metric: '4x', label: 'Online Sales Growth' },
      { metric: '2.4s → 0.6s', label: 'Page Load Speed Improvement' },
      { metric: '+145%', label: 'Conversion Rate Lift' },
      { metric: '99.99%', label: 'Platform Uptime' },
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Redis', 'Tailwind CSS', 'Razorpay API', 'AWS'],
    architecture: [
      { title: 'Frontend Storefront', description: 'Next.js App Router with Server-Side Rendering & Incremental Static Regeneration' },
      { title: 'API & Microservices', description: 'Node.js REST microservices handling inventory, order workflows, and webhooks' },
      { title: 'Cache & Session Management', description: 'Upstash Redis cluster for instant product lookups and lightning checkout' },
    ],
    testimonial: {
      quote:
        'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Our online sales grew 4x within three months.',
      author: 'Priya Mehta',
      role: 'Founder & CEO',
      company: 'FreshBite Organics',
    },
    liveUrl: 'https://freshbiteorganics.example.com',
  },
  {
    slug: 'urbanfit-branding',
    title: 'UrbanFit Brand Identity & Design System',
    client: 'UrbanFit Gyms',
    category: 'Branding',
    shortDesc: 'Complete digital brand redesign and component design system.',
    image: '/assets/images/img2.webp',
    beforeImage: '/assets/images/img2.webp',
    afterImage: '/assets/images/img4.webp',
    summary:
      'UrbanFit needed a bold, futuristic visual identity and digital design system to stand out in the competitive premium fitness and wellness industry across tier-1 cities.',
    problem:
      'Inconsistent visual branding across web, mobile apps, social media, and physical gym signage diluted brand recognition and trust among target fitness enthusiasts.',
    solution:
      'We created a comprehensive brand identity system — custom typography guidelines, vibrant gradient color systems, motion graphics, and a unified Figma design system.',
    results: [
      { metric: '3x', label: 'Increase in Organic Leads' },
      { metric: '+180%', label: 'Social Engagement Rate' },
      { metric: '100%', label: 'Brand Consistency Across Channels' },
    ],
    techStack: ['Figma', 'UI/UX Design', 'Branding Strategy', 'Design Systems', 'After Effects'],
    architecture: [
      { title: 'Brand Architecture', description: 'Core logo marks, typographic scale, color tokens, and asset guidelines' },
      { title: 'Digital Design System', description: 'Reusable UI component library in Figma mapped to CSS variables' },
    ],
    testimonial: {
      quote:
        'The branding NueEra created gave our brand a sleek, enterprise feel. Our membership signups doubled within two months of relaunch.',
      author: 'Amit Deshmukh',
      role: 'CEO',
      company: 'UrbanFit Gyms',
    },
  },
  {
    slug: 'mediconnect-app',
    title: 'MediConnect Health Telemedicine App',
    client: 'MediConnect Health Solutions',
    category: 'Mobile App',
    shortDesc: 'Cross-platform mobile application for doctor consultations and prescriptions.',
    image: '/assets/images/img3.webp',
    beforeImage: '/assets/images/img3.webp',
    afterImage: '/assets/images/img1.webp',
    summary:
      'MediConnect required a secure, HIPAA-compliant mobile application enabling patients to book instant video consultations, receive digital prescriptions, and order lab tests.',
    problem:
      'Patients faced long wait times for appointments, and doctors lacked an intuitive tool to manage electronic health records (EHR) and video calls on mobile devices.',
    solution:
      'We engineered a cross-platform Flutter app with WebRTC video calling, encrypted medical record storage, push notification reminders, and automated doctor scheduling.',
    results: [
      { metric: '50k+', label: 'Active Mobile Users' },
      { metric: '< 2 mins', label: 'Average Doctor Matching Time' },
      { metric: '4.9 / 5', label: 'App Store & Play Store Rating' },
    ],
    techStack: ['Flutter', 'Dart', 'WebRTC', 'Firebase', 'Node.js', 'PostgreSQL', 'Docker'],
    architecture: [
      { title: 'Mobile Client Layer', description: 'Single codebase Flutter app for iOS and Android with custom WebRTC video engine' },
      { title: 'Backend Services', description: 'Node.js APIs with end-to-end encryption for EHR and HIPAA-compliant data handling' },
    ],
    testimonial: {
      quote:
        'NueEra delivered a flawless mobile experience for our patients and doctors. The WebRTC video streaming is crystal clear.',
      author: 'Dr. Rajesh Sharma',
      role: 'Chief Medical Officer',
      company: 'MediConnect Health',
    },
  },
  {
    slug: 'techventure-saas',
    title: 'TechVenture SaaS Analytics Dashboard',
    client: 'TechVenture Labs',
    category: 'UI/UX Design',
    shortDesc: 'Enterprise B2B SaaS dashboard for real-time data analytics.',
    image: '/assets/images/img4.webp',
    beforeImage: '/assets/images/img4.webp',
    afterImage: '/assets/images/img6.webp',
    summary:
      'TechVenture required an ultra-fast analytics dashboard to visualize complex financial metrics, user retention funnels, and predictive growth models for enterprise clients.',
    problem:
      'Existing dashboards were cluttered, slow to load large datasets (>100,000 rows), and lacked actionable visual insights for C-suite executives.',
    solution:
      'We redesigned the entire SaaS experience with dark-mode optimized glassmorphic data widgets, web-worker chart rendering, and customizable drag-and-drop dashboard grids.',
    results: [
      { metric: '10x', label: 'Faster Chart Render Speeds' },
      { metric: '+65%', label: 'User Daily Engagement Time' },
      { metric: '98%', label: 'Positive Executive Feedback' },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Web Workers'],
    architecture: [
      { title: 'Data Visualization Engine', description: 'Custom canvas & SVG charts optimized with Web Workers for client-side processing' },
      { title: 'State & Real-Time Sync', description: 'WebSocket streams updating active dashboard metrics in real time' },
    ],
  },
  {
    slug: 'greenleaf-marketing',
    title: 'GreenLeaf Growth Marketing & SEO System',
    client: 'GreenLeaf Solutions',
    category: 'Marketing',
    shortDesc: 'End-to-end SEO, content strategy, and lead generation automation.',
    image: '/assets/images/img5.webp',
    beforeImage: '/assets/images/img5.webp',
    afterImage: '/assets/images/img3.webp',
    summary:
      'GreenLeaf Solutions wanted to capture organic search market share for sustainable B2B energy solutions across India.',
    problem:
      'Low organic visibility, zero keyword rankings on page 1 of Google, and a high cost-per-acquisition (CPA) on paid advertising channels.',
    solution:
      'We implemented a comprehensive growth marketing framework: technical SEO overhaul, high-intent content clusters, automated email drip campaigns, and conversion funnel landing pages.',
    results: [
      { metric: '+320%', label: 'Organic Traffic Increase' },
      { metric: '42', label: 'Page 1 Google Keyword Rankings' },
      { metric: '-58%', label: 'Reduction in Cost Per Lead (CPL)' },
    ],
    techStack: ['SEO Strategy', 'Content Marketing', 'Google Analytics 4', 'HubSpot Integration', 'Landing Page UX'],
    architecture: [
      { title: 'SEO Architecture', description: 'Technical site architecture, schema markup, and high-performance static landing pages' },
      { title: 'Conversion Funnel', description: 'Automated lead scoring and CRM synchronization via webhook integrations' },
    ],
  },
  {
    slug: 'cloudnine-automation',
    title: 'CloudNine Tech Automation & Workflow Suite',
    client: 'CloudNine Enterprises',
    category: 'Tech Automation',
    shortDesc: 'AI-driven workflow automation and multi-channel API integration suite.',
    image: '/assets/images/img6.webp',
    beforeImage: '/assets/images/img6.webp',
    afterImage: '/assets/images/img2.webp',
    summary:
      'CloudNine required an automated enterprise workflow hub to eliminate manual data entry between their CRM, accounting systems, and client support channels.',
    problem:
      'Operations teams spent 25+ hours per week manually transferring client data, resulting in delayed onboarding and human errors.',
    solution:
      'We built a custom Python & Node.js automation suite with AI-powered document extraction, webhook triggers, and automated notification bots on WhatsApp & Slack.',
    results: [
      { metric: '25 hrs/wk', label: 'Manual Labor Saved' },
      { metric: '0%', label: 'Data Entry Error Rate' },
      { metric: '10x', label: 'Faster Client Onboarding' },
    ],
    techStack: ['Python', 'Node.js', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker', 'Slack API'],
    architecture: [
      { title: 'Automation Pipeline', description: 'Asynchronous event queue processing document OCR and system synchronization' },
      { title: 'AI Processing Engine', description: 'LLM pipeline for automated document parsing and smart entity extraction' },
    ],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
