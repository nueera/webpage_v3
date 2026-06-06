'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { House, Layers, Briefcase, MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: House, target: '#home' },
  { id: 'services', label: 'Services', icon: Layers, target: '#services' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase, target: '#portfolio' },
  { id: 'contact', label: 'Contact', icon: MessageCircle, target: null },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = useCallback((target: string | null) => {
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Observe section elements for active state
    const sections = ['home', 'services', 'portfolio'];
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current.set(id, el);
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleNavClick = (item: typeof NAV_ITEMS[number]) => {
    if (item.id === 'contact') {
      window.open('https://wa.me/917066607424', '_blank');
    } else {
      scrollToSection(item.target);
    }
  };

  return (
    <nav className="mobile-bottom-nav md:hidden" aria-label="Mobile navigation">
      {/* Gradient top border */}
      <div
        className="h-[1px] w-full"
        style={{
          background: 'linear-gradient(90deg, var(--blue-primary), var(--orange-primary))',
        }}
      />
      <div className="flex items-center justify-around px-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`mobile-nav-item touch-press ${isActive ? 'active' : ''}`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className={`mobile-nav-icon w-5 h-5 transition-all duration-200 ${
                  isActive ? 'scale-110' : ''
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
