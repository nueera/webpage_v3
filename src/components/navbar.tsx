'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';
import { MagneticGlowButton } from './premium-effects';

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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const [activeLink, setActiveLink] = useState('/');

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
                height={44}
                className="h-11 w-auto object-contain block dark:hidden"
                priority
              />
              <Image
                src="/assets/images/darklogo.webp"
                alt="NueEra"
                width={140}
                height={44}
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
                    className={`relative font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-colors duration-200
                      ${isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                        : 'text-[var(--text-primary)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--blue-primary)] hover:to-[var(--orange-primary)]'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, var(--blue-primary), var(--orange-primary))',
                        }}
                        layoutId="nav-indicator"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
            <MagneticGlowButton
              className="!px-5 !py-2.5 !text-sm hidden md:inline-flex"
              onClick={() => window.open('https://wa.me/917066607424', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </MagneticGlowButton>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-mobile-btn)] border border-[var(--border-mobile-btn)] transition-all hover:border-[var(--blue-primary)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-[var(--blue-primary)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[2005]"
              style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(18px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={shouldReduceMotion ? { x: 0 } : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 h-full w-[85vw] max-w-[390px] flex flex-col z-[2006] mobile-drawer"
              style={{ background: 'var(--bg-main)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--blue-primary)] via-[var(--orange-primary)] to-[var(--blue-primary)]" />

              <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--border-soft)]">
                <div className="flex items-center gap-2">
                  <Image src="/assets/images/lightlogo.webp" alt="NueEra" width={100} height={32} className="h-8 w-auto object-contain block dark:hidden" />
                  <Image src="/assets/images/darklogo.webp" alt="NueEra" width={100} height={32} className="h-8 w-auto object-contain hidden dark:block" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] hover:border-[var(--border-active)]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[var(--text-primary)]" />
                </button>
              </div>

              <ul className="flex flex-col list-none gap-2 p-6 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
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
                  </motion.li>
                ))}
              </ul>

              <div className="p-6 pt-4 border-t border-[var(--border-soft)]">
                <MagneticGlowButton
                  className="!w-full !justify-center"
                  onClick={() => window.open('https://wa.me/917066607424', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </MagneticGlowButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
