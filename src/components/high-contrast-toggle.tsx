'use client';

import { useState, useCallback } from 'react';
import { Contrast } from 'lucide-react';

export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('high-contrast');
    if (saved === 'true') {
      document.documentElement.classList.add('high-contrast');
      return true;
    }
    return false;
  });

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
      localStorage.setItem('high-contrast', String(next));
      return next;
    });
  }, []);

  return (
    <button
      onClick={toggleHighContrast}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg
        bg-[var(--bg-glass)] border border-[var(--border-soft)]
        text-[var(--text-secondary)] hover:text-[var(--text-primary)]
        hover:border-[var(--border-active)] transition-all duration-300"
      aria-label={isHighContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      title={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
    >
      <Contrast className="w-4 h-4" />
    </button>
  );
}
