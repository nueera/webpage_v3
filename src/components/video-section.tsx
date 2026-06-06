'use client';

import { SectionBadge, SectionTitle, SectionDescription, FadeUp, AnimatedCounter } from './ui-extensions';
import { CirclePlay, Clock, ShieldCheck, Star } from 'lucide-react';

const VIDEO_STATS = [
  { value: 500, suffix: '+', label: 'Hours of Client Work', icon: Clock },
  { value: 99.9, suffix: '%', label: 'Project Uptime', icon: ShieldCheck, decimals: 1 },
  { value: 4.9, suffix: '/5', label: 'Client Rating', icon: Star, decimals: 1 },
];

export function VideoSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[20%] left-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[10%] right-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10 text-center">
        <FadeUp>
          <SectionBadge>See Us In Action</SectionBadge>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionTitle className="mt-4">
            Watch How We <span className="gradient-text">Work</span>
          </SectionTitle>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SectionDescription className="mx-auto mt-4">
            Get a behind-the-scenes look at our process, team culture, and the results we deliver.
          </SectionDescription>
        </FadeUp>

        {/* Video Placeholder */}
        <FadeUp delay={0.3} className="mt-12">
          <div className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto group cursor-pointer">
            <div className="relative aspect-video bg-[var(--bg-tertiary)] flex items-center justify-center">
              {/* Placeholder gradient background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, var(--blue-primary) 0%, var(--orange-primary) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--border-soft) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Pulsing play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <button
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-soft)]
                    text-white shadow-[0_8px_32px_var(--orange-glow)]
                    transition-all duration-300 group-hover:scale-110
                    video-play-pulse"
                  aria-label="Play video"
                  suppressHydrationWarning
                >
                  <CirclePlay className="w-10 h-10 md:w-12 md:h-12" />
                </button>
                <span className="text-[var(--text-muted)] text-sm font-medium">Watch Showreel</span>
              </div>

              {/* YouTube iframe placeholder - update src with real video URL */}
              {/* <iframe
                className="absolute inset-0 w-full h-full"
                src="about:blank"
                title="NueEra Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            </div>
          </div>
        </FadeUp>

        {/* Stats below video */}
        <FadeUp delay={0.4} className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {VIDEO_STATS.map((stat) => (
              <div key={stat.label} className="stat-card flex flex-col items-center gap-2 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-[var(--orange-primary)]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
