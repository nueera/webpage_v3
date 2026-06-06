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
  const [springKey, setSpringKey] = useState(0);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prevActiveRef = useRef('home');

  const scrollToSection = useCallback((target: string | null) => {
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sections = ['home', 'services', 'portfolio'];
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActive = entry.target.id;
          setActiveSection(newActive);
          if (prevActiveRef.current !== newActive) {
            prevActiveRef.current = newActive;
            setSpringKey((k) => k + 1);
          }
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
    if (item.id !== activeSection) {
      setActiveSection(item.id);
      prevActiveRef.current = item.id;
      setSpringKey((k) => k + 1);
    }
    if (item.id === 'contact') {
      window.open('https://wa.me/917066607424', '_blank');
    } else {
      scrollToSection(item.target);
    }
  };

  return (
    <nav className="bubble-nav-container md:hidden" aria-label="Mobile navigation">
      {/* Top glow line */}
      <div className="bubble-nav-glow-line" />

      <div className="bubble-nav-inner">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`bubble-nav-item ${isActive ? 'active' : ''}`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active bubble background */}
              <div className={`bubble-nav-bubble ${isActive ? 'active' : ''}`}>
                {/* Inner glow ring */}
                <div className="bubble-nav-bubble-glow" />
                {/* Gradient fill */}
                <div className="bubble-nav-bubble-fill" />
              </div>

              {/* Icon with spring animation */}
              <div
                className={`bubble-nav-icon-wrap ${isActive ? 'active' : ''}`}
                style={isActive ? { animationName: 'bubbleSpring' } : undefined}
              >
                <Icon
                  className={`bubble-nav-icon ${isActive ? 'active' : ''}`}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>

              {/* Label */}
              <span className={`bubble-nav-label ${isActive ? 'active' : ''}`}>
                {item.label}
              </span>

              {/* Active dot below label */}
              <div className={`bubble-nav-dot ${isActive ? 'active' : ''}`} />
            </button>
          );
        })}
      </div>

      {/* Bottom safe area spacer */}
      <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </nav>
  );
}
