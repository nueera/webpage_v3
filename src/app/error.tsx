'use client';

import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-main)]">
      <div className="container-nueera text-center py-24">
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto mb-8">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-soft)] text-[var(--text-primary)] font-semibold text-sm transition-all duration-300 hover:bg-[var(--bg-glass)] hover:border-[var(--border-active)]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
