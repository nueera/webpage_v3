'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Mail, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/preone', label: 'PreOne' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services#web-development', label: 'Web Development' },
  { href: '/services#mobile-apps', label: 'Mobile Apps' },
  { href: '/services#ui-ux-design', label: 'UI/UX Design' },
  { href: '/services#branding', label: 'Branding' },
  { href: '/services#digital-marketing', label: 'Digital Marketing' },
  { href: '/services#software-solutions', label: 'Software Solutions' },
];

function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

function AccordionSection({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-[var(--border-soft)] md:border-t-0">
      <button
        className="footer-accordion-trigger w-full flex items-center justify-between py-4 px-0 md:p-0"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider">
          {title}
        </h4>
        <span className="md:hidden ml-2">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
          )}
        </span>
      </button>
      <div
        className={`footer-accordion-content ${isOpen ? 'open' : ''} md:!max-h-none md:!opacity-100 md:!overflow-visible`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>('quickLinks');

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="bg-[var(--bg-secondary)] mt-auto" suppressHydrationWarning>
      {/* Premium gradient top border */}
      <div className="footer-gradient-border" />

      <div className="container-nueera py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Logo + Description + Social - Always visible */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/assets/images/lightlogo.webp" alt="NueEra" width={120} height={46} className="h-10 w-auto object-contain block dark:hidden" />
              <Image src="/assets/images/darklogo.webp" alt="NueEra" width={120} height={46} className="h-10 w-auto object-contain hidden dark:block" />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-xs">
              Building digital empires with precision, creativity, and cutting-edge technology. Your vision, our expertise.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://www.facebook.com/nueera', label: 'Facebook', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, color: 'hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.3)]' },
                { href: 'https://www.instagram.com/_nueera_', label: 'Instagram', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, color: 'hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-[0_0_12px_rgba(228,64,95,0.3)]' },
                { href: 'https://www.linkedin.com/company/115797053', label: 'LinkedIn', svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, color: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_12px_rgba(10,102,194,0.3)]' },
                { href: 'https://wa.me/917066607424', label: 'WhatsApp', svg: <MessageCircle className="w-4 h-4" />, color: 'hover:text-green-500 hover:border-green-500 hover:shadow-[0_0_12px_rgba(34,197,94,0.3)]' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] transition-all duration-300 ${social.color} hover:-translate-y-0.5`}
                  aria-label={social.label}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links - Accordion on mobile */}
          <div className="md:hidden">
            <AccordionSection
              title="Quick Links"
              isOpen={openSection === 'quickLinks'}
              onToggle={() => toggleSection('quickLinks')}
            >
              <ul className="space-y-2.5 pb-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>
          </div>
          {/* Desktop: Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services - Accordion on mobile */}
          <div className="md:hidden">
            <AccordionSection
              title="Services"
              isOpen={openSection === 'services'}
              onToggle={() => toggleSection('services')}
            >
              <ul className="space-y-2.5 pb-4">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>
          </div>
          {/* Desktop: Services */}
          <div className="hidden md:block">
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter - Accordion on mobile */}
          <div className="md:hidden">
            <AccordionSection
              title="Stay Updated"
              isOpen={openSection === 'newsletter'}
              onToggle={() => toggleSection('newsletter')}
            >
              <div className="pb-4">
                <p className="text-[var(--text-secondary)] text-sm mb-4">Get the latest insights on digital growth delivered to your inbox.</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                    <input
                      type="email"
                      placeholder="Your email"
                      suppressHydrationWarning
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white hover:shadow-[0_0_16px_var(--glow-blue)] transition-all duration-300"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                <div className="mt-4 space-y-2">
                  <a href="mailto:hello@nueera.io" suppressHydrationWarning className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors block">
                    hello@nueera.io
                  </a>
                  <a href="https://wa.me/917066607424" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-sm hover:text-green-500 transition-colors block">
                    +91 70666 07424
                  </a>
                  <p className="text-[var(--text-muted)] text-sm">Pune, Maharashtra, India</p>
                </div>
              </div>
            </AccordionSection>
          </div>
          {/* Desktop: Newsletter */}
          <div className="hidden md:block">
            <h4 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Get the latest insights on digital growth delivered to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="email"
                  placeholder="Your email"
                  suppressHydrationWarning
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                suppressHydrationWarning
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white hover:shadow-[0_0_16px_var(--glow-blue)] transition-all duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-4 space-y-2">
              <a href="mailto:hello@nueera.io" suppressHydrationWarning className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors block">
                hello@nueera.io
              </a>
              <a href="https://wa.me/917066607424" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] text-sm hover:text-green-500 transition-colors block">
                +91 70666 07424
              </a>
              <p className="text-[var(--text-muted)] text-sm">Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-soft)]">
        <div className="container-nueera py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[var(--text-muted)] text-xs">
            &copy; <CurrentYear /> NueEra. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            Crafted with passion in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
