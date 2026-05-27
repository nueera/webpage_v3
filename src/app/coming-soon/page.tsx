'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle2, Rocket } from 'lucide-react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Glow orbs background */}
      <div className="glow-orb-blue" style={{ top: '20%', left: '15%' }} />
      <div className="glow-orb-orange" style={{ top: '50%', right: '10%' }} />

      <div className="container-nueera relative z-10 text-center py-20 md:py-32">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
          style={{
            background: 'rgba(31, 106, 255, 0.1)',
            border: '1px solid rgba(31, 106, 255, 0.2)',
          }}
        >
          <Rocket className="w-4 h-4 text-[var(--blue-primary)]" />
          <span className="text-[var(--blue-primary)] text-sm font-medium">Launch Imminent</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up stagger-1"
          style={{ animationDelay: '0.2s' }}
        >
          Something{' '}
          <span className="gradient-text">Amazing</span>{' '}
          is Coming
        </h1>

        {/* Subtitle */}
        <p
          className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          We are building a new digital experience to help your business grow. Stay tuned for updates.
        </p>

        {/* Email Notify Form */}
        <div
          className="max-w-md mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium text-sm">You&apos;re on the list! We&apos;ll notify you.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap sm:flex-nowrap">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors backdrop-blur-sm"
              />
              <button
                type="submit"
                className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white whitespace-nowrap"
              >
                <Send className="w-4 h-4" /> Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Back to Home */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--blue-primary)] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
