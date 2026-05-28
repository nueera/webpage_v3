'use client';

import { useState, lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Box } from 'lucide-react';

// Lazy load Spline to avoid SSR issues and reduce initial bundle
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineEmbedProps {
  scene: string;
  className?: string;
  fallbackMessage?: string;
}

function SplineFallback({ message }: { message: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] rounded-2xl">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 flex items-center justify-center mb-4">
        <Box className="w-8 h-8 text-[var(--blue-primary)]" />
      </div>
      <p className="text-[var(--text-muted)] text-sm">{message}</p>
    </div>
  );
}

export function SplineEmbed({
  scene,
  className = '',
  fallbackMessage = 'Loading 3D Experience...',
}: SplineEmbedProps) {
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion || hasError) {
    return (
      <div className={`spline-container ${className}`}>
        <SplineFallback message={hasError ? '3D experience unavailable' : '3D experience paused'} />
      </div>
    );
  }

  return (
    <motion.div
      className={`spline-container ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Suspense fallback={<SplineFallback message={fallbackMessage} />}>
        <Spline
          scene={scene}
          onError={() => setHasError(true)}
        />
      </Suspense>
    </motion.div>
  );
}

/* ──────────────── Pre-built Spline section for About page ──────────────── */
export function SplineShowcaseSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="section-badge mb-4 inline-block">Immersive Experience</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight mt-4">
              Innovation in{' '}
              <span className="gradient-text">Every Dimension</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mt-4 max-w-xl">
              We bring ideas to life with cutting-edge 3D experiences and interactive design that
              captivates audiences and sets brands apart in the digital landscape.
            </p>
          </div>

          {/* Spline 3D scene */}
          <div className="flex-1 w-full max-w-xl">
            <SplineEmbed
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              className="!h-[400px] md:!h-[500px]"
              fallbackMessage="Loading 3D..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
