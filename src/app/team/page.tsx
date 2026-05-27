'use client';

import Image from 'next/image';
import { Mail, Link as LinkIcon, Star } from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

const teamMembers = [
  { name: 'Nil Shinde', role: 'Founder & CEO', img: '/assets/images/profiles/nil_shinde.webp', bio: 'Visionary leader driving NueEra\'s mission to democratize premium digital solutions.' },
  { name: 'Dipanshu Awandkar', role: 'Co-Founder & CTO', img: '/assets/images/profiles/dipanshu_awandkar.webp', bio: 'Technical architect ensuring every solution meets the highest standards of excellence.' },
  { name: 'Vaibhav Nijampurkar', role: 'Lead Developer', img: '/assets/images/profiles/vaibhav_nijampurkar.webp', bio: 'Full-stack expert with a passion for building scalable, performant applications.' },
  { name: 'Vivek Tethgure', role: 'Senior Developer', img: '/assets/images/profiles/vivek_tethgure.webp', bio: 'Experienced developer specializing in complex backend systems and APIs.' },
  { name: 'Vikrant Salunke', role: 'UI/UX Designer', img: '/assets/images/profiles/vikrant_salunke.webp', bio: 'Creative designer crafting intuitive and beautiful user experiences.' },
  { name: 'Ravi Kambale', role: 'Full Stack Developer', img: '/assets/images/profiles/ravi_kambale.webp', bio: 'Versatile developer delivering end-to-end web and mobile solutions.' },
  { name: 'Nagesh Banger', role: 'Backend Developer', img: '/assets/images/profiles/nagesh_banger.webp', bio: 'Backend specialist focused on robust, secure, and scalable server architectures.' },
  { name: 'Saurabh Shinde', role: 'DevOps Engineer', img: '/assets/images/profiles/saurabh_shinde.webp', bio: 'Infrastructure expert ensuring reliable deployments and optimal performance.' },
  { name: 'Sandhya Shinde', role: 'Project Manager', img: '/assets/images/profiles/sandhya_shinde.webp', bio: 'Organized leader keeping projects on track and clients informed.' },
  { name: 'Tisha Dalavi', role: 'Marketing Specialist', img: '/assets/images/profiles/tisha_dalavi.webp', bio: 'Marketing strategist driving growth through data-driven campaigns.' },
  { name: 'Mrunmayee Jawale', role: 'Content Strategist', img: '/assets/images/profiles/mrunmayee_Jawale.webp', bio: 'Content expert crafting compelling narratives that engage and convert.' },
];

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
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">The People Behind NueEra</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Meet the talented professionals who bring your digital vision to life.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <SectionWrapper>
        <div className="container-nueera">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-6 text-center group">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-[var(--border-soft)] group-hover:ring-[var(--blue-primary)] transition-all duration-300">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
                <p className="text-[var(--blue-primary)] text-xs font-medium mb-3">{member.role}</p>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  <button type="button" onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }} className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] transition-all cursor-pointer">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] transition-all">
                    <LinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Join CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Want to Join Our Team?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            We&apos;re always looking for talented individuals. If you share our passion for excellence, we&apos;d love to hear from you.
          </p>
          <a href="/contact" className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white">
            Get in Touch
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
