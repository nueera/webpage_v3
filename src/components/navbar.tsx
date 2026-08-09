'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, House, Info, Layers, Briefcase, Mail, Star } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { ThemeSwitcher } from './theme-switcher';
import { ScrollProgress } from './ui-extensions';

const navLinks = [
  { href: '/', label: 'Home', icon: House },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Layers },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/preone', label: 'PreOne', icon: Star, isPill: true },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileOpen(false);
      return;
    }
    if (e.key === 'Tab' && drawerRef.current) {
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not-[tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  return (
    <>
      <ScrollProgress />

      <nav
        className={`fixed top-0 left-0 right-0 z-[2001] flex items-center px-4 md:px-8 transition-all duration-500 ${
          scrolled ? 'navbar-scrolled' : 'navbar-top'
        }`}
        style={{
          height: scrolled ? '64px' : '80px',
          background: scrolled ? 'var(--bg-navbar)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(8px)',
        }}
      >
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--blue-primary), var(--orange-primary), transparent)',
              opacity: 0.6,
            }}
          />
        )}

        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex items-center overflow-hidden rounded-lg" style={{ transform: scrolled ? 'scale(0.85)' : 'scale(1)', transition: 'transform 0.3s' }}>
              <Image
                src="/assets/images/nueera-logo.png"
                alt="NueEra"
                width={140}
                height={54}
                className="h-11 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex list-none gap-2.5 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.isPill) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative font-bold text-sm tracking-wide px-5 py-2 rounded-full text-white inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.85)] bg-gradient-to-r from-purple-600 via-violet-600 to-blue-500 border border-white/20"
                    >
                      <Star className="w-4 h-4 text-pink-300 fill-pink-300/30" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-all duration-300
                      ${isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                        : 'text-[var(--text-primary)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--blue-primary)] hover:to-[var(--orange-primary)]'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="nav-link-active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
                          boxShadow: '0 0 8px var(--glow-blue)',
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              suppressHydrationWarning
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] transition-all hover:border-[var(--blue-primary)] hover:shadow-[0_0_12px_var(--glow-blue)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-[var(--blue-primary)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[2005] animate-fade-in"
            style={{ background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(18px)' }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            className="fixed right-0 top-0 h-full w-[85vw] max-w-[380px] flex flex-col z-[2006] mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleKeyDown}
            style={{
              background: 'var(--bg-main)',
              animation: 'slideInRight 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />

            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--border-soft)]">
              <div className="flex items-center gap-2">
                <Image src="/assets/images/nueera-logo.png" alt="NueEra" width={110} height={42} className="h-8 w-auto object-contain" />
              </div>
              <button
                ref={closeBtnRef}
                onClick={() => setMobileOpen(false)}
                suppressHydrationWarning
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--border-active)] transition-colors text-[var(--text-primary)]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col list-none gap-2 p-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                if (link.isPill) {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-blue-500 shadow-[0_4px_20px_rgba(139,92,246,0.5)] border border-white/20 transition-transform active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/20 text-pink-300">
                            <Star className="w-4 h-4 fill-pink-300/30" />
                          </div>
                          <span className="tracking-wide text-white font-extrabold">{link.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200
                        ${isActive
                          ? 'bg-gradient-to-r from-[var(--blue-primary)]/15 to-[var(--orange-primary)]/15 text-[var(--blue-primary)] border border-[var(--border-active)] shadow-[0_4px_16px_var(--glow-blue)]'
                          : 'text-[var(--text-primary)] border border-transparent hover:bg-[var(--bg-glass)] hover:border-[var(--border-soft)]'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isActive
                            ? 'bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] text-white'
                            : 'bg-[var(--bg-glass)] text-[var(--text-muted)]'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="tracking-wide">{link.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[var(--blue-primary)] translate-x-1' : 'text-[var(--text-muted)]'}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Drawer Footer Action */}
            <div className="p-6 pt-4 border-t border-[var(--border-soft)] space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_6px_20px_var(--glow-blue)] active:scale-[0.98] transition-transform"
              >
                Book Strategy Call <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
