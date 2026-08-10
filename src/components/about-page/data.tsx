import {
  Code2, Target, Zap, Shield, Users, RefreshCw,
  Award, ThumbsUp, Clock, Star, Rocket, ShoppingBag,
  Layers, Sparkles, TrendingUp, Globe,
} from 'lucide-react';

/* ─── Data ────────────────────────────────────────────── */

export const differentiators = [
  { icon: Code2, title: 'Business-First Engineering', desc: "We're not just coders. Every line of code we write is tied to your revenue and growth metrics.", color: 'blue' },
  { icon: Target, title: 'Measured Delivery', desc: 'Clear KPIs, weekly progress updates, and transparent reporting — you always know where your project stands.', color: 'orange' },
  { icon: Zap, title: 'Rapid Execution', desc: 'Our delivery framework gets projects live 40% faster than traditional agencies without compromising quality.', color: 'blue' },
  { icon: Shield, title: 'Enterprise-Grade Quality', desc: 'Same rigorous standards whether you\'re a startup or enterprise. Security, testing, and performance are non-negotiable.', color: 'orange' },
  { icon: Users, title: 'True Partnership', desc: 'We embed with your team. Not just vendors — strategic partners invested in your long-term success.', color: 'blue' },
  { icon: RefreshCw, title: 'Future-Proof Solutions', desc: 'We build with scalability in mind. Your solution grows as your business grows — no rebuilds needed.', color: 'orange' },
];

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  metric: string;
  badge: string;
  icon: typeof Rocket;
  color: 'blue' | 'orange' | 'emerald' | 'purple';
  isFuture?: boolean;
}

export const timelineItems: TimelineItem[] = [
  {
    year: '2025',
    title: 'The Beginning',
    desc: 'NueEra was founded in Pune by Nil Shinde and Dipanshu Awandkar with a vision to make premium digital solutions accessible to growing businesses.',
    metric: 'Pune HQ Founded',
    badge: 'Origin',
    icon: Rocket,
    color: 'blue',
  },
  {
    year: '2025',
    title: 'First Client Success',
    desc: 'Landed our first major project — a full e-commerce platform for FreshBite Organics that went on to generate 4x online sales growth.',
    metric: '4x Sales Growth',
    badge: 'Major Win',
    icon: ShoppingBag,
    color: 'orange',
  },
  {
    year: '2026',
    title: 'Team Expansion',
    desc: 'Grew to a dedicated team of talented professionals across design, development, marketing, and operations.',
    metric: 'Multidisciplinary Team',
    badge: 'Growth',
    icon: Users,
    color: 'blue',
  },
  {
    year: '2026',
    title: 'Full-Service Agency',
    desc: 'Expanded into a full-service digital agency offering end-to-end solutions including video production, content strategy, and tech automation.',
    metric: 'Full-Service Suite',
    badge: 'Scale',
    icon: Layers,
    color: 'orange',
  },
  {
    year: '2027',
    title: 'Growing Strong (More Coming Soon)',
    desc: 'Continuing to scale with new partnerships, advanced AI-powered solutions, global reach, and a mission to become India\'s most trusted digital partner.',
    metric: 'Future Horizon',
    badge: 'Coming Soon',
    icon: Sparkles,
    color: 'purple',
    isFuture: true,
  },
];

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Award, desc: 'Across web, mobile, marketing & branding' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: ThumbsUp, desc: 'Based on post-project feedback surveys' },
  { value: 11, suffix: '+', label: 'Team Members', icon: Users, desc: 'Designers, developers, marketers & strategists' },
  { value: 2, suffix: '+', label: 'Years of Excellence', icon: Clock, desc: 'Delivering digital excellence since 2025' },
];

export interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  acronym: string;
  domain: string;
  img: string;
  bio: string;
  level: 'ceo' | 'c-suite' | 'operations' | 'management';
  reportsTo?: string;
}

export const executiveTeam: ExecutiveMember[] = [
  {
    id: 'nil-shinde',
    name: 'Nil Shinde',
    role: 'CEO',
    acronym: 'CEO',
    domain: 'Executive Leadership',
    img: '/assets/images/profiles/nil_shinde.webp',
    level: 'ceo',
    bio: 'Visionary leader driving NueEra\'s strategic direction, enterprise partnerships, and long-term business growth.',
  },
  {
    id: 'dipanshu-awandkar',
    name: 'Dipanshu Awandkar',
    role: 'CTO',
    acronym: 'CTO',
    domain: 'Technology & Engineering',
    img: '/assets/images/profiles/dipanshu_awandkar.webp',
    level: 'c-suite',
    bio: 'Full-stack technologist architecting scalable cloud infrastructure, full-stack systems, and enterprise tech automation.',
  },
  {
    id: 'vikrant-salunke',
    name: 'Vikrant Salunke',
    role: 'CPO',
    acronym: 'CPO',
    domain: 'Product & Product Strategy',
    img: '/assets/images/profiles/vikrant_salunke.webp',
    level: 'c-suite',
    bio: 'Leading product vision, user experience engineering, and quality-driven product development strategy.',
  },
  {
    id: 'tisha-dalavi',
    name: 'Tisha Dalavi',
    role: 'CMO',
    acronym: 'CMO',
    domain: 'Marketing & Brand',
    img: '/assets/images/profiles/tisha_dalavi.webp',
    level: 'c-suite',
    bio: 'Spearheading brand strategy, performance digital marketing, SEO, and client acquisition growth.',
  },
  {
    id: 'saurabh-shinde',
    name: 'Saurabh Shinde',
    role: 'CSO',
    acronym: 'CSO',
    domain: 'Strategy & Business Growth',
    img: '/assets/images/profiles/saurabh_shinde.webp',
    level: 'c-suite',
    bio: 'Driving corporate growth strategy, process design analytics, and market expansion initiatives.',
  },
  {
    id: 'vaibhav-nijampurkar',
    name: 'Vaibhav Nijampurkar',
    role: 'COO',
    acronym: 'COO',
    domain: 'Company Operations',
    img: '/assets/images/profiles/vaibhav_nijampurkar.webp',
    level: 'c-suite',
    bio: 'Overseeing company operations, client relationship management, and delivery execution frameworks.',
  },
  {
    id: 'nagesh-banger',
    name: 'Nagesh Banger',
    role: 'Head of Operations',
    acronym: 'Head of Ops',
    domain: 'Operations & Execution',
    img: '/assets/images/profiles/nagesh_banger.webp',
    level: 'operations',
    reportsTo: 'Vaibhav Nijampurkar (COO)',
    bio: 'Directing daily operational workflows, media execution, motion graphics, and team delivery efficiency.',
  },
  {
    id: 'ravi-kambale',
    name: 'Ravi Kambale',
    role: 'CFO',
    acronym: 'CFO',
    domain: 'Finance & Accounts',
    img: '/assets/images/profiles/ravi_kambale.webp',
    level: 'c-suite',
    bio: 'Managing fiscal planning, financial governance, risk management, and capital allocation strategy.',
  },
  {
    id: 'vivek-tethgure',
    name: 'Vivek Tethgure',
    role: 'CIO',
    acronym: 'CIO',
    domain: 'Information Systems & IT',
    img: '/assets/images/profiles/vivek_tethgure.webp',
    level: 'c-suite',
    bio: 'Directing internal IT infrastructure, data security, and enterprise information systems architecture.',
  },
  {
    id: 'sandhya-shinde',
    name: 'Sandhya Shinde',
    role: 'Project Manager',
    acronym: 'PM',
    domain: 'Project Delivery',
    img: '/assets/images/profiles/sandhya_shinde.webp',
    level: 'management',
    bio: 'Managing project lifecycles, Agile sprint execution, and client delivery satisfaction.',
  },
  {
    id: 'mrunmayee-jawale',
    name: 'Mrunmayee Jawale',
    role: 'Business Development Manager',
    acronym: 'BDM',
    domain: 'Sales & Business Development',
    img: '/assets/images/profiles/mrunmayee_Jawale.webp',
    level: 'management',
    bio: 'Fostering long-term enterprise partnerships, UX strategy research, and sales development growth.',
  },
];

export const founders = [
  {
    name: executiveTeam[0].name,
    role: executiveTeam[0].role + ' — ' + executiveTeam[0].domain,
    img: executiveTeam[0].img,
    bio: executiveTeam[0].bio,
  },
  {
    name: executiveTeam[1].name,
    role: executiveTeam[1].role + ' — ' + executiveTeam[1].domain,
    img: executiveTeam[1].img,
    bio: executiveTeam[1].bio,
  },
];

export const teamMembers = executiveTeam.map((member) => ({
  name: member.name,
  role: `${member.role} → ${member.domain}`,
  img: member.img,
  skill: member.domain,
}));

export const testimonials = [
  {
    quote: 'NueEra built our e-commerce platform from scratch and it transformed how we reach customers. Our online sales grew 4x within three months. Their team understood our vision perfectly.',
    name: 'Priya Mehta',
    role: 'Founder',
    company: 'FreshBite Organics',
    rating: 5,
  },
  {
    quote: 'The growth marketing system NueEra implemented drove a 3x increase in organic traffic and doubled our lead generation. Their data-driven approach gave us complete confidence.',
    name: 'Amit Deshmukh',
    role: 'CEO',
    company: 'UrbanFit Gyms',
    rating: 5,
  },
];

/* ─── Helper: Star Rating ───────────────────────────────── */

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[var(--orange-primary)] fill-[var(--orange-primary)]' : 'text-[var(--text-muted)]'}`}
        />
      ))}
    </div>
  );
}
