'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { House, Layers, Briefcase, MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: House, href: '/', sectionId: 'home' },
  { id: 'services', label: 'Services', icon: Layers, href: '/services', sectionId: 'services' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase, href: '/portfolio', sectionId: 'portfolio' },
  { id: 'contact', label: 'Contact', icon: MessageCircle, href: '/contact', sectionId: null },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [activeSection, setActiveSection] = useState(isHomePage ? 'home' : '');
  const [springKey, setSpringKey] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prevActiveRef = useRef(isHomePage ? 'home' : '');

  // Determine active based on pathname when not on home
  useEffect(() => {
    if (!isHomePage) {
      const match = NAV_ITEMS.find((item) => item.href === pathname);
      const newActive = match ? match.id : '';
      if (prevActiveRef.current !== newActive) {
        prevActiveRef.current = newActive;
        setActiveSection(newActive);
        setSpringKey((k) => k + 1);
      }
    }
  }, [pathname, isHomePage]);

  // IntersectionObserver — only on home page
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'services', 'portfolio'];
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActive = entry.target.id;
            if (prevActiveRef.current !== newActive) {
              prevActiveRef.current = newActive;
              setActiveSection(newActive);
              setSpringKey((k) => k + 1);
            }
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => { observerRef.current?.disconnect(); };
  }, [isHomePage]);

  const scrollToSection = useCallback((target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleNavClick = useCallback((item: typeof NAV_ITEMS[number]) => {
    const newId = item.id;
    if (prevActiveRef.current !== newId) {
      prevActiveRef.current = newId;
      setActiveSection(newId);
      setSpringKey((k) => k + 1);
    }

    // If we're on home page, scroll to section
    if (isHomePage && item.sectionId) {
      scrollToSection(`#${item.sectionId}`);
      return;
    }

    // If navigating to home, go to / and then scroll to section
    if (item.href === '/' && !isHomePage) {
      window.location.href = '/';
      return;
    }

    // For other pages, navigate to the page route
    if (!isHomePage) {
      window.location.href = item.href;
    }
  }, [isHomePage, scrollToSection]);

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
                <div className="bubble-nav-bubble-glow" />
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
