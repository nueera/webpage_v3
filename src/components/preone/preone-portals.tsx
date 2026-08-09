'use client';

import { ShieldCheck, BookOpenCheck, HeartHandshake, CheckSquare, ArrowUpRight } from 'lucide-react';

const PORTAL_CARDS = [
  {
    id: 'admin',
    title: 'Admin Portal',
    description: 'Complete control of your preschool operations, admissions, fees, and analytics from one powerful dashboard.',
    icon: ShieldCheck,
    accentColor: '#7C3AED',
    bgGradient: 'from-[#F5F3FF] via-[#FFFFFF] to-[#FAF5FF] dark:from-[#1E1B4B]/40 dark:via-[var(--bg-main)] dark:to-[#1E1B4B]/20',
    borderColor: 'border-[#DDD6FE] dark:border-[#7C3AED]/30',
    glowColor: 'shadow-[0_20px_50px_rgba(124,58,237,0.08)]',
    badge: 'Operations & Control',
  },
  {
    id: 'teacher',
    title: 'Teacher Portal',
    description: 'Manage daily classes, attendance, lesson plans, activities, and parent updates effortlessly.',
    icon: BookOpenCheck,
    accentColor: '#2563EB',
    bgGradient: 'from-[#EFF6FF] via-[#FFFFFF] to-[#F0F9FF] dark:from-[#1E3A8A]/40 dark:via-[var(--bg-main)] dark:to-[#1E3A8A]/20',
    borderColor: 'border-[#BFDBFE] dark:border-[#2563EB]/30',
    glowColor: 'shadow-[0_20px_50px_rgba(37,99,235,0.08)]',
    badge: 'Classroom & Activities',
  },
  {
    id: 'parent',
    title: 'Parent Portal',
    description: 'Keep parents updated, connected, and involved in their child’s daily preschool journey in real time.',
    icon: HeartHandshake,
    accentColor: '#EC4899',
    bgGradient: 'from-[#FDF2F8] via-[#FFFFFF] to-[#FFF1F2] dark:from-[#831843]/40 dark:via-[var(--bg-main)] dark:to-[#831843]/20',
    borderColor: 'border-[#FBCFE8] dark:border-[#EC4899]/30',
    glowColor: 'shadow-[0_20px_50px_rgba(236,72,153,0.08)]',
    badge: 'Parent Engagement',
  },
  {
    id: 'taskmaster',
    title: 'TaskMaster',
    description: 'Organize, assign, track, and complete everyday preschool tasks and staff workflows with complete clarity.',
    icon: CheckSquare,
    accentColor: '#22C55E',
    bgGradient: 'from-[#F0FDF4] via-[#FFFFFF] to-[#ECFDF5] dark:from-[#064E3B]/40 dark:via-[var(--bg-main)] dark:to-[#064E3B]/20',
    borderColor: 'border-[#BBF7D0] dark:border-[#22C55E]/30',
    glowColor: 'shadow-[0_20px_50px_rgba(34,197,94,0.08)]',
    badge: 'Workflow Automation',
  },
];

export function PreOnePortals() {
  return (
    <section className="py-20 bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="container-nueera space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[var(--bg-glass)] text-[#7C3AED] dark:text-[#8B5CF6] border border-[#DDD6FE] dark:border-[#7C3AED]/40">
            Portal Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            One Platform. <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">Everything Managed.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Powerful portals designed specifically for every role in your preschool ecosystem.
          </p>
        </div>

        {/* 4 Feature Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTAL_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`relative group p-8 rounded-[30px] bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} ${card.glowColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Ambient Radial Glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none transition-opacity group-hover:opacity-60"
                  style={{ background: card.accentColor }}
                />

                <div className="space-y-6 relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: card.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--bg-glass)] border dark:text-white"
                      style={{ color: card.accentColor, borderColor: card.accentColor + '40' }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight">{card.title}</h3>
                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-8 flex items-center justify-between relative z-10 border-t border-[var(--border-soft)] mt-6">
                  <span className="text-xs font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    Explore {card.title}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ background: card.accentColor }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
