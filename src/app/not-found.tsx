'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-main)]">
      <div className="container-nueera text-center py-24">
        <div className="mb-8">
          <span className="text-[8rem] md:text-[10rem] font-black gradient-text leading-none">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-sm transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
