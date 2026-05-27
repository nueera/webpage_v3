'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Glow orbs background */}
      <div className="glow-orb-blue" style={{ top: '20%', left: '20%' }} />
      <div className="glow-orb-orange" style={{ top: '60%', right: '15%' }} />

      <div className="container-nueera relative z-10 text-center py-20">
        {/* Large 404 */}
        <h1
          className="text-[8rem] md:text-[12rem] font-extrabold leading-none mb-4 select-none"
          style={{
            background: 'linear-gradient(135deg, var(--blue-primary) 0%, var(--orange-primary) 50%, var(--blue-primary) 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 8s linear infinite',
          }}
        >
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
          >
            <Home className="w-4 h-4" /> Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
