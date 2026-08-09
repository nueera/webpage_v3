'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Zap, TrendingUp, Lock } from 'lucide-react';

export function Hero3DMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 12,
    rotateY: -8,
    rotateZ: 2,
    scale: 1,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const calcRotateX = 12 + ((y - centerY) / centerY) * -10;
    const calcRotateY = -8 + ((x - centerX) / centerX) * 10;

    setTransform({
      rotateX: parseFloat(calcRotateX.toFixed(2)),
      rotateY: parseFloat(calcRotateY.toFixed(2)),
      rotateZ: 1.5,
      scale: 1.02,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 12,
      rotateY: -8,
      rotateZ: 2,
      scale: 1,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto mt-12 mb-8 [perspective:1400px]"
    >
      {/* Ambient background glow ring */}
      <div
        className="absolute w-[80%] h-[80%] top-[10%] left-[10%] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, var(--orange-primary) 100%)' }}
        aria-hidden="true"
      />

      {/* Main 3D Perspective Browser Frame */}
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`,
          transition: transform.scale === 1 ? 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s ease-out',
        }}
        className="relative rounded-3xl bg-[var(--bg-tertiary)]/80 border border-white/20 backdrop-blur-2xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden [transform-style:preserve-3d]"
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--bg-glass)] border-b border-[var(--border-soft)]">
          {/* Traffic light dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>

          {/* Address bar URL */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-main)]/60 border border-[var(--border-soft)] text-xs text-[var(--text-muted)] font-mono max-w-md w-full justify-center shadow-inner">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>https://app.nueera.io/dashboard</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--blue-primary)] animate-ping" />
            <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Live System</span>
          </div>
        </div>

        {/* Dashboard Preview Body */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
          <Image
            src="/assets/images/img4.webp"
            alt="NueEra Digital Empire Dashboard"
            fill
            className="object-cover object-top opacity-90 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Gradient Overlay for high-end feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60" />
        </div>

        {/* 3D Floating Badge 1: Top Right (+180% Growth) */}
        <div
          className="absolute top-12 right-6 md:right-12 p-4 rounded-2xl bg-[var(--bg-glass)]/90 border border-white/30 backdrop-blur-xl shadow-2xl flex items-center gap-3 transition-transform duration-500 [transform:translateZ(60px)]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white shadow-lg">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-[var(--text-muted)]">Conversion Lift</div>
            <div className="text-base font-extrabold text-[var(--text-primary)] font-display">+180% Revenue</div>
          </div>
        </div>

        {/* 3D Floating Badge 2: Bottom Left (0.6s Page Speed) */}
        <div
          className="absolute bottom-8 left-6 md:left-12 p-4 rounded-2xl bg-[var(--bg-glass)]/90 border border-white/30 backdrop-blur-xl shadow-2xl flex items-center gap-3 transition-transform duration-500 [transform:translateZ(75px)]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--blue-primary)] to-cyan-500 flex items-center justify-center text-white shadow-lg">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-[var(--text-muted)]">Lighthouse Score</div>
            <div className="text-base font-extrabold text-[var(--text-primary)] font-display">0.6s Sub-Second Load</div>
          </div>
        </div>

        {/* 3D Floating Badge 3: Top Left (Enterprise Security) */}
        <div
          className="absolute top-12 left-6 hidden md:flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-glass)]/90 border border-white/30 backdrop-blur-xl shadow-2xl [transform:translateZ(50px)]"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--orange-primary)] to-amber-500 flex items-center justify-center text-white shadow-md">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-[var(--text-primary)]">Enterprise Grade</div>
            <div className="text-[10px] text-[var(--text-muted)]">SOC2 & ISO Ready</div>
          </div>
        </div>

        {/* 3D Floating Badge 4: Bottom Right (AI Powered) */}
        <div
          className="absolute bottom-8 right-6 hidden md:flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-glass)]/90 border border-white/30 backdrop-blur-xl shadow-2xl [transform:translateZ(65px)]"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-[var(--text-primary)]">AI Engine Active</div>
            <div className="text-[10px] text-[var(--text-muted)]">Automated Workflows</div>
          </div>
        </div>
      </div>
    </div>
  );
}
