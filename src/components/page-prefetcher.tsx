'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const HOME_PREFETCH = ['/about', '/services', '/portfolio'];
const OTHER_PREFETCH = ['/', '/contact'];

export function PagePrefetcher() {
  const pathname = usePathname();
  const router = useRouter();
  const prefetchedRef = useRef<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const prefetchPage = useCallback(
    (href: string) => {
      if (prefetchedRef.current.has(href)) return;
      prefetchedRef.current.add(href);
      router.prefetch(href);
    },
    [router]
  );

  // Prefetch likely next pages based on current route
  useEffect(() => {
    const pagesToPrefetch = pathname === '/' ? HOME_PREFETCH : OTHER_PREFETCH;

    // Use requestIdleCallback for non-blocking prefetch
    const schedulePrefetch = (href: string) => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
          prefetchPage(href);
        });
      } else {
        // Fallback: setTimeout
        setTimeout(() => {
          prefetchPage(href);
        }, 200);
      }
    };

    pagesToPrefetch.forEach(schedulePrefetch);
  }, [pathname, prefetchPage]);

  // IntersectionObserver for visible internal links
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          const href = link.getAttribute('href');
          if (href && href.startsWith('/') && !href.startsWith('//')) {
            // Low-priority prefetch using requestIdleCallback
            if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
              (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
                prefetchPage(href);
              });
            } else {
              setTimeout(() => {
                prefetchPage(href);
              }, 500);
            }
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '100px',
      threshold: 0.1,
    });

    // Observe all internal links on the page
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('//')) {
        observerRef.current!.observe(link);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname, prefetchPage]);

  // This component doesn't render anything
  return null;
}
