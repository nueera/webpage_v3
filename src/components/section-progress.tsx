'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionProgressProps {
  sections?: string[];
  className?: string;
}

export function SectionProgress({ sections = [], className = '' }: SectionProgressProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        rafRef.current = requestAnimationFrame(updateProgress);
        return;
      }

      const scrollPercent = scrollTop / docHeight;

      // Find active section
      const allSections = document.querySelectorAll('section[id]');
      let currentSection = '';
      let sectionProgress = 0;

      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionHeight = section.clientHeight;

        if (scrollTop >= sectionTop - window.innerHeight / 2) {
          currentSection = section.id;

          // Calculate progress within this section
          const sectionScrollStart = sectionTop - window.innerHeight / 2;
          const sectionScrollEnd = sectionTop + sectionHeight - window.innerHeight / 2;
          const range = sectionScrollEnd - sectionScrollStart;

          if (range > 0) {
            sectionProgress = Math.min(
              Math.max((scrollTop - sectionScrollStart) / range, 0),
              1
            );
          }
        }
      });

      setActiveSection(currentSection);
      setProgress(sectionProgress);

      rafRef.current = requestAnimationFrame(updateProgress);
    };

    rafRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-20 left-0 right-0 z-[2000] h-[3px] pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full bg-[var(--border-soft)]">
        <div
          className="absolute top-0 left-0 h-full transition-[width] duration-100 ease-linear"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, var(--blue-primary), var(--orange-primary))',
          }}
        />
      </div>
    </div>
  );
}
