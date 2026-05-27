'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/help-center', label: 'Help Center' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
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

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[2001] h-20 flex items-center px-4 md:px-8 transition-all duration-300
          ${scrolled ? 'shadow-lg' : ''}
        `}
        style={{
          background: 'var(--bg-navbar)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-soft)',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 h-full">
          {/* Left - Logo */}
          <div className="justify-self-start flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:-translate-y-0.5 transition-transform duration-300">
              <div className="relative h-11 flex items-center">
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
          </div>

          {/* Center - Nav Links */}
          <div className="justify-self-center hidden lg:flex">
            <ul className="flex list-none gap-10 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-semibold text-sm tracking-wide px-1 py-1.5 transition-colors duration-200
                      ${pathname === link.href
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]'
                        : 'text-[var(--text-primary)] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--blue-primary)] hover:to-[var(--orange-primary)]'
                      }
                    `}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-sm transition-all duration-200
                        bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]
                        ${pathname === link.href ? 'w-full' : 'w-0'}
                      `}
                    />
                    <span
                      className="absolute bottom-0 left-0 h-[3px] rounded-sm w-0 transition-all duration-200
                        bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)]
                        peer-hover:w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Theme + CTA + Mobile */}
          <div className="justify-self-end flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://wa.me/917066607424"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-[var(--orange-primary)] to-[var(--core-gold)]
                text-[#0B0F14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center w-12 h-12 rounded-xl
                bg-[var(--bg-mobile-btn)] border border-[var(--border-mobile-btn)]
                transition-all duration-300 hover:border-[var(--blue-primary)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-[var(--blue-primary)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[2005] transition-all duration-400
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[85vw] max-w-[390px] flex flex-col
            p-8 pt-10 transition-all duration-450
            ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
          style={{
            background: 'var(--bg-main)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.32)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-soft)]">
            <Image
              src="/assets/images/lightlogo.webp"
              alt="NueEra"
              width={100}
              height={32}
              className="h-8 w-auto object-contain block dark:hidden"
            />
            <Image
              src="/assets/images/darklogo.webp"
              alt="NueEra"
              width={100}
              height={32}
              className="h-8 w-auto object-contain hidden dark:block"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-white/95 border-none cursor-pointer transition-all duration-300
                hover:scale-105 hover:shadow-lg shadow-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col list-none gap-3 py-4 flex-1 overflow-y-auto">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  animation: mobileOpen ? `mobileLinkSlideIn 0.45s ease-out ${i * 0.06}s forwards` : 'none',
                  opacity: mobileOpen ? undefined : 0,
                }}
              >
                <Link
                  href={link.href}
                  className={`flex flex-col items-center justify-center gap-1 w-full min-h-[72px]
                    px-4 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest
                    transition-all duration-250
                    ${pathname === link.href
                      ? 'bg-gradient-to-r from-[var(--blue-primary)]/20 to-[var(--orange-primary)]/20 text-[var(--blue-primary)] border border-[var(--border-active)]'
                      : 'bg-[var(--bg-glass)] text-[var(--text-primary)] border border-[var(--border-soft)] hover:border-[var(--border-active)]'
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-[var(--border-soft)]">
            <a
              href="https://wa.me/917066607424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-[var(--orange-primary)] to-[var(--core-gold)]
                text-[#0B0F14] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
