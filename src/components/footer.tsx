'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Share2, Link as LinkIcon, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Web Development' },
  { href: '/services', label: 'Mobile Apps' },
  { href: '/services', label: 'UI/UX Design' },
  { href: '/services', label: 'Branding' },
  { href: '/services', label: 'Digital Marketing' },
  { href: '/services', label: 'Software Solutions' },
];

function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] mt-auto" suppressHydrationWarning>
      {/* Premium gradient top border */}
      <div className="footer-gradient-border" />

      <div className="container-nueera py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Logo + Description + Social */}
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
                { href: 'https://facebook.com', icon: Globe, label: 'Website', color: 'hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] hover:shadow-[0_0_12px_var(--glow-blue)]' },
                { href: 'https://instagram.com', icon: Share2, label: 'Instagram', color: 'hover:text-[var(--orange-primary)] hover:border-[var(--orange-primary)] hover:shadow-[0_0_12px_var(--glow-orange)]' },
                { href: 'https://linkedin.com', icon: LinkIcon, label: 'LinkedIn', color: 'hover:text-[var(--blue-primary)] hover:border-[var(--blue-primary)] hover:shadow-[0_0_12px_var(--glow-blue)]' },
                { href: 'https://wa.me/917066607424', icon: MessageCircle, label: 'WhatsApp', color: 'hover:text-green-500 hover:border-green-500 hover:shadow-[0_0_12px_rgba(34,197,94,0.3)]' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-glass)] border border-[var(--border-soft)] text-[var(--text-muted)] transition-all duration-300 ${social.color} hover:-translate-y-0.5`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
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

          {/* Column 3: Services */}
          <div>
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

          {/* Column 4: Newsletter */}
          <div>
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
              <a href="mailto:hello@nueera.io" className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors block">
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
