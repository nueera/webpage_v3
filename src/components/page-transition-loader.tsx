'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Page transition loader — shows a top progress bar + subtle overlay
 * on every route change for 1.5 seconds minimum.
 */
export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const prevPathRef = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setProgress(0);

    // Animate progress bar: 0 → 70% quickly, then slow to 90%
    let p = 0;
    progressRef.current = setInterval(() => {
      if (p < 30) p += 12;
      else if (p < 60) p += 6;
      else if (p < 85) p += 2;
      else if (p < 92) p += 0.5;
      else clearInterval(progressRef.current!);
      setProgress(p);
    }, 40);

    // After 1.2s, jump to 100% and start fade
    timerRef.current = setTimeout(() => {
      setProgress(100);
      if (progressRef.current) clearInterval(progressRef.current);
      setTimeout(() => setIsLoading(false), 300); // 300ms fade out
    }, 1200);
  }, []);

  useEffect(() => {
    // Only trigger on actual path change (not search params)
    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname;
      startLoading();
    }
  }, [pathname, searchParams, startLoading]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  if (!isLoading && progress === 0) return null;

  return (
    <>
      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[10000] h-[3px] transition-opacity duration-300"
        style={{ opacity: isLoading ? 1 : 0 }}
      >
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--blue-primary), var(--orange-primary))',
            boxShadow: progress > 50 ? '0 0 12px var(--glow-blue), 0 0 24px var(--glow-orange)' : 'none',
          }}
        />
      </div>

      {/* Subtle page overlay */}
      <div
        className="fixed inset-0 z-[9998] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isLoading ? 0.04 : 0,
          background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
        }}
      />
    </>
  );
}
