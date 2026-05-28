'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Mail, Star,
  ArrowRight, Sparkles, Heart, Coffee, Code2,
  Palette, Rocket, Globe, Terminal, Database,
  Shield, Smartphone, Pen, BarChart3, Cloud,
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';
import { TiltEffect } from '@/components/effects/tilt-effect';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Nil Shinde',
    role: 'Founder & CEO',
    img: '/assets/images/profiles/nil_shinde.webp',
    bio: 'Visionary leader driving NueEra\'s mission to democratize premium digital solutions.',
    skills: ['Strategy', 'Leadership', 'Business Development'],
    funFact: '🚀 Dreamer of digital empires',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com', twitter: 'https://twitter.com' },
  },
  {
    name: 'Dipanshu Awandkar',
    role: 'Co-Founder & CTO',
    img: '/assets/images/profiles/dipanshu_awandkar.webp',
    bio: 'Technical architect ensuring every solution meets the highest standards of excellence.',
    skills: ['System Design', 'Architecture', 'DevOps'],
    funFact: '🏗️ Architect of scalable systems',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com', twitter: 'https://twitter.com' },
  },
  {
    name: 'Vaibhav Nijampurkar',
    role: 'Lead Developer',
    img: '/assets/images/profiles/vaibhav_nijampurkar.webp',
    bio: 'Full-stack expert with a passion for building scalable, performant applications.',
    skills: ['React', 'Node.js', 'TypeScript'],
    funFact: '💻 Codes in his sleep',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com', twitter: 'https://twitter.com' },
  },
  {
    name: 'Vivek Tethgure',
    role: 'Senior Developer',
    img: '/assets/images/profiles/vivek_tethgure.webp',
    bio: 'Experienced developer specializing in complex backend systems and APIs.',
    skills: ['Backend', 'APIs', 'Databases'],
    funFact: '🔧 Backend wizard',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' },
  },
  {
    name: 'Vikrant Salunke',
    role: 'UI/UX Designer',
    img: '/assets/images/profiles/vikrant_salunke.webp',
    bio: 'Creative designer crafting intuitive and beautiful user experiences.',
    skills: ['UI Design', 'UX Research', 'Figma'],
    funFact: '🎨 Pixel perfectionist',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    name: 'Ravi Kambale',
    role: 'Full Stack Developer',
    img: '/assets/images/profiles/ravi_kambale.webp',
    bio: 'Versatile developer delivering end-to-end web and mobile solutions.',
    skills: ['Next.js', 'React Native', 'Tailwind'],
    funFact: '⚡ Full-stack ninja',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' },
  },
  {
    name: 'Nagesh Banger',
    role: 'Backend Developer',
    img: '/assets/images/profiles/nagesh_banger.webp',
    bio: 'Backend specialist focused on robust, secure, and scalable server architectures.',
    skills: ['Python', 'Django', 'PostgreSQL'],
    funFact: '🗄️ Data structure enthusiast',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' },
  },
  {
    name: 'Saurabh Shinde',
    role: 'DevOps Engineer',
    img: '/assets/images/profiles/saurabh_shinde.webp',
    bio: 'Infrastructure expert ensuring reliable deployments and optimal performance.',
    skills: ['AWS', 'Docker', 'CI/CD'],
    funFact: '☁️ Cloud orchestrator',
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' },
  },
  {
    name: 'Sandhya Shinde',
    role: 'Project Manager',
    img: '/assets/images/profiles/sandhya_shinde.webp',
    bio: 'Organized leader keeping projects on track and clients informed.',
    skills: ['Agile', 'Scrum', 'Client Relations'],
    funFact: '📋 Master of timelines',
    socials: { linkedin: 'https://linkedin.com' },
  },
  {
    name: 'Tisha Dalavi',
    role: 'Marketing Specialist',
    img: '/assets/images/profiles/tisha_dalavi.webp',
    bio: 'Marketing strategist driving growth through data-driven campaigns.',
    skills: ['SEO', 'Analytics', 'Growth Marketing'],
    funFact: '📈 Growth catalyst',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    name: 'Mrunmayee Jawale',
    role: 'Content Strategist',
    img: '/assets/images/profiles/mrunmayee_Jawale.webp',
    bio: 'Content expert crafting compelling narratives that engage and convert.',
    skills: ['Content Writing', 'Strategy', 'Copywriting'],
    funFact: '✍️ Words that convert',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
];

/* Social link icon component using inline SVGs for branded icons */
function SocialIcon({ platform, href }: { platform: string; href: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    linkedin: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] transition-all duration-300 hover:-translate-y-0.5"
      aria-label={platform}
    >
      {iconMap[platform] || <Globe className="w-4 h-4" />}
    </a>
  );
}

export default function TeamPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Team' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Our Team</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            The People Behind NueEra
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            Meet the talented professionals who bring your digital vision to life. Passionate, skilled, and committed to excellence.
          </p>
          {/* Quick stats */}
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">11+</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Team Members</div>
            </div>
            <div className="w-px h-10 bg-[var(--border-soft)]" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">6+</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Disciplines</div>
            </div>
            <div className="w-px h-10 bg-[var(--border-soft)]" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">2+</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Years Together</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Leadership" title="Our Founders" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.slice(0, 2).map((member) => (
              <TiltEffect key={member.name} maxTilt={8} scale={1.02}>
                <div className="glass-card rounded-2xl p-8 text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[var(--border-soft)] group-hover:ring-[var(--blue-primary)] transition-all duration-500">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                  <p className="text-[var(--blue-primary)] text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{member.bio}</p>
                  {/* Fun fact */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)] mb-4">
                    <span className="text-sm">{member.funFact}</span>
                  </div>
                  {/* Skills tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--blue-primary)]/10 text-[var(--blue-primary)] border border-[var(--blue-primary)]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Social links */}
                  <div className="flex items-center justify-center gap-2">
                    {Object.entries(member.socials).map(([platform, href]) => (
                      <SocialIcon key={platform} platform={platform} href={href} />
                    ))}
                    <button
                      type="button"
                      onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--orange-primary)] hover:border-[var(--orange-primary)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </TiltEffect>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Full Team Grid */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Team" title="Meet Our Full Team" description="The talented people behind NueEra's success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.slice(2).map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <TiltEffect maxTilt={6} scale={1.01}>
                  <div className="glass-card rounded-2xl p-6 text-center group h-full">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)] group-hover:ring-[var(--blue-primary)] transition-all duration-300">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] text-base mb-1">{member.name}</h3>
                    <p className="text-[var(--blue-primary)] text-xs font-medium mb-2">{member.role}</p>
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">{member.bio}</p>
                    {/* Fun fact */}
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)] mb-3">
                      <span className="text-xs">{member.funFact}</span>
                    </div>
                    {/* Skills tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--orange-primary)]/10 text-[var(--orange-primary)] border border-[var(--orange-primary)]/15"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {/* Social links */}
                    <div className="flex items-center justify-center gap-2">
                      {Object.entries(member.socials).map(([platform, href]) => (
                        <SocialIcon key={platform} platform={platform} href={href} />
                      ))}
                      <button
                        type="button"
                        onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }}
                        className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--orange-primary)] hover:border-[var(--orange-primary)] transition-all duration-300 cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </TiltEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What Makes Our Team Special */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <SectionHeader badge="Culture" title="What Makes Our Team Special" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Creative Thinking', desc: 'We approach every challenge with fresh perspectives and innovative solutions.' },
              { icon: Heart, title: 'Passion-Driven', desc: 'Every team member is genuinely passionate about creating exceptional digital experiences.' },
              { icon: Coffee, title: 'Collaborative Spirit', desc: 'We thrive on teamwork, open communication, and supporting each other\'s growth.' },
              { icon: Rocket, title: 'Growth Mindset', desc: 'Continuous learning and improvement are at the core of everything we do.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))' }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Join Our Team CTA */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />
            <div className="glow-orb-blue" style={{ top: '-50%', right: '-20%', opacity: '0.15' }} />
            <div className="glow-orb-orange" style={{ bottom: '-50%', left: '-20%', opacity: '0.15' }} />

            <div className="relative z-10">
              <span className="section-badge mb-4 inline-block">Join Us</span>
              <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-4">Want to Join Our Team?</h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-6">
                We&apos;re always looking for talented individuals who share our passion for excellence. If you thrive on innovation and want to make a real impact, we&apos;d love to hear from you.
              </p>

              {/* Perks */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {[
                  { text: 'Remote-First', emoji: '🏠' },
                  { text: 'Flexible Hours', emoji: '⏰' },
                  { text: 'Learning Budget', emoji: '📚' },
                  { text: 'Great Culture', emoji: '🎉' },
                ].map((perk) => (
                  <span
                    key={perk.text}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)] text-sm text-[var(--text-secondary)]"
                  >
                    <span>{perk.emoji}</span>
                    {perk.text}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:hello@nueera.io?subject=Job Application"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[var(--blue-primary)] text-[var(--blue-primary)] hover:bg-[var(--blue-glow)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" /> Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
