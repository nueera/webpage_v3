'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <button
      onClick={scrollUp}
      suppressHydrationWarning
      className="fixed bottom-24 md:bottom-8 right-6 z-50 w-12 h-12 rounded-full
        flex items-center justify-center
        bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]
        text-white shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
