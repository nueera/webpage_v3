'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { PremiumButton } from './premium-button';
import { ScrollProgress } from './ui-extensions';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
                src="/assets/images/lightlogo.webp"
                alt="NueEra"
                width={140}
                height={54}
                className="h-11 w-auto object-contain block dark:hidden"
                priority
              />
              <Image
                src="/assets/images/darklogo.webp"
                alt="NueEra"
                width={140}
                height={54}
                className="h-11 w-auto object-contain hidden dark:block"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex list-none gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
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
            <ThemeToggle />
            <PremiumButton
              className="!px-5 !py-2.5 !text-sm hidden md:inline-flex"
              onClick={() => window.open('https://wa.me/917066607424', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </PremiumButton>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-mobile-btn)] border border-[var(--border-mobile-btn)] transition-all hover:border-[var(--blue-primary)] hover:shadow-[0_0_12px_var(--glow-blue)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-[var(--blue-primary)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[2005] animate-fade-in"
            style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(18px)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed right-0 top-0 h-full w-[85vw] max-w-[390px] flex flex-col z-[2006] mobile-drawer"
            style={{
              background: 'var(--bg-main)',
              animation: 'slideInRight 0.3s ease-out forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />

            <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--border-soft)]">
              <div className="flex items-center gap-2">
                <Image src="/assets/images/lightlogo.webp" alt="NueEra" width={100} height={39} className="h-8 w-auto object-contain block dark:hidden" />
                <Image src="/assets/images/darklogo.webp" alt="NueEra" width={100} height={39} className="h-8 w-auto object-contain hidden dark:block" />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--border-active)] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[var(--text-primary)]" />
              </button>
            </div>

            <ul className="flex flex-col list-none gap-2 p-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all
                      ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                        ? 'bg-gradient-to-r from-[var(--blue-primary)]/15 to-[var(--orange-primary)]/15 text-[var(--blue-primary)] border border-[var(--border-active)]'
                        : 'text-[var(--text-primary)] border border-transparent hover:bg-[var(--bg-glass)] hover:border-[var(--border-soft)]'
                      }`}
                  >
                    <span className="uppercase tracking-wider text-xs">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="p-6 pt-4 border-t border-[var(--border-soft)]">
              <PremiumButton
                className="!w-full !justify-center"
                onClick={() => window.open('https://wa.me/917066607424', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </PremiumButton>
            </div>
          </div>
        </>
      )}
    </>
  );
}
