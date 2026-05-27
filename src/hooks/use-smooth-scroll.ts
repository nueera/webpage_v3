'use client';

import { useCallback, useEffect } from 'react';

interface UseSmoothScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { offset = 80, behavior = 'smooth' } = options;

  const scrollToElement = useCallback(
    (selectorOrId: string) => {
      let element: Element | null = null;

      // Try as ID selector first
      if (selectorOrId.startsWith('#')) {
        element = document.querySelector(selectorOrId);
      } else {
        element = document.getElementById(selectorOrId);
      }

      if (!element) return;

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : behavior,
      });
    },
    [offset, behavior]
  );

  // Handle hash-based navigation on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        scrollToElement(hash);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [scrollToElement]);

  return { scrollToElement };
}
