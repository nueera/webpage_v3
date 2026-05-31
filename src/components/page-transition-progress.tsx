'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Slim gradient progress bar at the top of the page
 * that animates in when navigating between routes.
 * Think YouTube / GitHub style navigation indicator.
 */
export default function PageTransitionProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // When pathname changes, animate the progress bar
    setIsVisible(true);
    setProgress(0);

    // Quick start - jump to 30%
    const t1 = requestAnimationFrame(() => setProgress(30));

    // Ease to 70%
    const t2 = setTimeout(() => setProgress(70), 150);

    // Ease to 90% (never quite reaches 100% until complete)
    const t3 = setTimeout(() => setProgress(90), 400);

    // Complete
    const t4 = setTimeout(() => {
      setProgress(100);
      // Hide after animation completes
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    }, 600);

    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  if (!isVisible && progress === 0) return null;

  return (
    <div className="page-transition-bar">
      <div
        className="page-transition-progress"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
