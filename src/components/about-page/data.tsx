import {
  Code2, Target, Zap, Shield, Users, RefreshCw,
  Award, ThumbsUp, Clock, Star,
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

export const timelineItems = [
  { year: '2023', title: 'The Beginning', desc: 'NueEra was founded in Pune by Nil Shinde and Dipanshu Awandkar with a vision to make premium digital solutions accessible to growing businesses.' },
  { year: '2023', title: 'First Client', desc: 'Landed our first major project — a full e-commerce platform for FreshBite Organics that went on to generate 4x online sales growth.' },
  { year: '2024', title: 'Team Expansion', desc: 'Grew to a team of 8 talented professionals across design, development, marketing, and operations.' },
  { year: '2024', title: '50+ Projects', desc: 'Crossed the 50-project milestone with a 98% client satisfaction rate and partnerships across diverse industries.' },
  { year: '2025', title: 'Full-Service Agency', desc: 'Expanded to a 11-member team offering end-to-end digital solutions including video production, content strategy, and tech automation.' },
  { year: '2025', title: 'Growing Strong', desc: 'Continuing to scale with new partnerships, advanced AI-powered solutions, and a mission to become India\'s most trusted digital partner.' },
];

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Award, desc: 'Across web, mobile, marketing & branding' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: ThumbsUp, desc: 'Based on post-project feedback surveys' },
  { value: 11, suffix: '+', label: 'Team Members', icon: Users, desc: 'Designers, developers, marketers & strategists' },
  { value: 4, suffix: '+', label: 'Years of Excellence', icon: Clock, desc: 'Delivering digital excellence since 2023' },
];

export const founders = [
  {
    name: 'Nil Shinde',
    role: 'Founder & Business Growth Lead',
    img: '/assets/images/profiles/nil_shinde.webp',
    bio: 'Visionary entrepreneur with a passion for building scalable businesses. Nil leads NueEra\'s growth strategy and client relationships, ensuring every project drives measurable impact.',
  },
  {
    name: 'Dipanshu Awandkar',
    role: 'Co-Founder & Technology Lead',
    img: '/assets/images/profiles/dipanshu_awandkar.webp',
    bio: 'Full-stack technologist with deep expertise in modern web and cloud technologies. Dipanshu architects solutions that are built to scale and engineered for performance.',
  },
];

export const teamMembers = [
  { name: 'Vaibhav Nijampurkar', role: 'Process & Business Development Lead', img: '/assets/images/profiles/vaibhav_nijampurkar.webp', skill: 'Strategy, Business Development' },
  { name: 'Vivek Tethgure', role: 'Senior Developer', img: '/assets/images/profiles/vivek_tethgure.webp', skill: 'React, Next.js, Node.js' },
  { name: 'Vikrant Salunke', role: 'Quality Assurance Lead', img: '/assets/images/profiles/vikrant_salunke.webp', skill: 'QA Automation, Testing' },
  { name: 'Ravi Kambale', role: 'Operations & Delivery Lead', img: '/assets/images/profiles/ravi_kambale.webp', skill: 'Project Management, Agile' },
  { name: 'Nagesh Banger', role: 'Motion Graphics & Video Content Lead', img: '/assets/images/profiles/nagesh_banger.webp', skill: 'After Effects, Premiere Pro' },
  { name: 'Saurabh Shinde', role: 'Process Optimization Lead', img: '/assets/images/profiles/saurabh_shinde.webp', skill: 'Process Design, Analytics' },
  { name: 'Sandhya Shinde', role: 'Project Manager', img: '/assets/images/profiles/sandhya_shinde.webp', skill: 'Scrum, Client Relations' },
  { name: 'Tisha Dalavi', role: 'Marketing & Growth Lead', img: '/assets/images/profiles/tisha_dalavi.webp', skill: 'SEO, Google Ads, Social' },
  { name: 'Mrunmayee Jawale', role: 'Product Strategy Lead', img: '/assets/images/profiles/mrunmayee_Jawale.webp', skill: 'Figma, UX Research' },
];

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
