'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Mail, MessageCircle, Calendar, Clock,
  CheckCircle2, Send, MapPin, AlertCircle, Loader2,
  ChevronRight, Upload, Timer,
} from 'lucide-react';
import { SectionBadge, FadeUp, AnimatedCounter } from '@/components/ui-extensions';

/* ─── Static data (outside component to avoid hydration issues) ────── */

const SERVICE_OPTIONS = [
  'Website & Mobile App Development',
  'Growth Marketing System',
  'Tech Automation System',
  'UI/UX Design',
  'Branding & Strategy',
  'Video Production & Motion Graphics',
  'Content Strategy & Copywriting',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under ₹2L',
  '₹2L - ₹5L',
  '₹5L - ₹10L',
  '₹10L - ₹20L',
  '₹20L+',
];

const TIMELINE_OPTIONS = [
  'ASAP (Urgent)',
  'Within 1 Month',
  '1-3 Months',
  '3-6 Months',
  'Flexible',
];

const SOURCE_OPTIONS = [
  'Google Search',
  'Instagram',
  'LinkedIn',
  'Facebook',
  'Referral',
  'Other',
];

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'Drop us a detailed email and we\'ll respond within 24 hours.',
    action: 'Send Email',
    href: 'mailto:hello@nueera.com',
    gradient: 'from-[var(--blue-primary)] to-[var(--orange-primary)]',
  },
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    desc: 'Quick chat? Message us directly for an instant response.',
    action: 'Chat Now',
    href: 'https://wa.me/917066607424',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Calendar,
    title: 'Book a Call',
    desc: 'Schedule a free 30-min strategy call with our team.',
    action: 'Schedule Call',
    href: 'https://calendly.com',
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
  },
];

const CONTACT_DETAILS = [
  { icon: Mail, title: 'Email', value: 'hello@nueera.com', href: 'mailto:hello@nueera.com', color: 'blue' as const },
  { icon: Clock, title: 'Working Hours', value: 'Mon-Sat, 10 AM – 7 PM IST', color: 'orange' as const },
  { icon: Timer, title: 'Response Time', value: 'Within 24 hours', color: 'blue' as const },
  { icon: MessageCircle, title: 'WhatsApp', value: '+91 70666 07424', href: 'https://wa.me/917066607424', color: 'green' as const },
  { icon: MapPin, title: 'Location', value: 'Pune, Maharashtra, India', color: 'orange' as const },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nueera',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_nueera_',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/115797053',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

const TRUST_SIGNALS = [
  { icon: '🔒', text: 'Your data is secure' },
  { icon: '📄', text: 'NDA available on request' },
  { icon: '⏱️', text: 'We respond within 24 hours' },
  { icon: '🛡️', text: 'Spam-protected' },
];

const NEXT_STEPS = [
  { step: 1, title: 'We review your inquiry', desc: 'Our team reviews your project details (1-2 hours)' },
  { step: 2, title: 'Strategy preparation', desc: 'We prepare a tailored strategy for you (within 24 hours)' },
  { step: 3, title: 'Free strategy call scheduled', desc: 'Pick a time that works for you' },
  { step: 4, title: 'Custom proposal delivered', desc: 'Detailed scope, timeline, and investment breakdown' },
];

/* ─── Helper: input class ───────────────────────────────── */

function inputClass(hasError = false): string {
  return `w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${hasError ? 'border-red-400' : 'border-[var(--input-border)]'} text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors`;
}

/* ─── Helper: Select wrapper with custom chevron ───────── */

function GlassSelect({
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  value: string;
  onChange: (val: string) => void;
  options: readonly string[];
  placeholder: string;
  hasError?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        suppressHydrationWarning
        className={`${inputClass(hasError)} appearance-none pr-10 cursor-pointer`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <ChevronRight className="w-4 h-4 text-[var(--text-muted)] -rotate-90" />
      </div>
    </div>
  );
}

/* ─── Form errors interface ───────────────────────────── */

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

/* ─── Page ──────────────────────────────────────────────── */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    source: '',
    message: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrors({ general: data.errors ? data.errors.join('. ') : 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <>
      {/* ═══════════ 1. HERO (enhanced) ═══════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src="/assets/images/about.webp" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        </div>
        {/* Hero mesh overlay */}
        <div className="hero-mesh" aria-hidden="true">
          <div className="orb orb-blue" style={{ opacity: 0.3 }} />
          <div className="orb orb-orange" style={{ opacity: 0.25 }} />
        </div>
        <div className="container-nueera relative z-10 text-center">
          {/* Breadcrumb */}
          <FadeUp>
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--blue-primary)] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[var(--text-primary)]">Contact</span>
            </nav>
          </FadeUp>
          <FadeUp delay={0.05}>
            <SectionBadge className="text-base px-5 py-2">Get In Touch</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4">Let&apos;s Build Something Great</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Ready to transform your digital presence? We&apos;re here to help. Reach out and let&apos;s start the conversation.
            </p>
          </FadeUp>
          {/* Animated inline stats */}
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10">
              {[
                { value: 50, suffix: '+', label: 'Projects' },
                { value: 98, suffix: '%', label: 'Satisfaction' },
                { value: 24, suffix: 'h', label: 'Response' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-extrabold gradient-text">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════ 2. CONTACT OPTIONS (3 unique) ═══════════ */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_OPTIONS.map((opt, idx) => (
              <FadeUp key={opt.title} delay={idx * 0.1}>
                <a
                  href={opt.href}
                  target={opt.href.startsWith('http') || opt.href.startsWith('mailto:') ? '_blank' : undefined}
                  rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card rounded-2xl p-8 text-center block cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${opt.gradient} shadow-lg`}>
                    <opt.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{opt.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{opt.desc}</p>
                  <span className="text-[var(--blue-primary)] text-sm font-semibold inline-flex items-center gap-1">
                    {opt.action} <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. CONTACT FORM + DETAILS ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ── Form ── */}
            <div>
              <FadeUp>
                <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Send Us a Message</h2>
              </FadeUp>

              {submitted ? (
                <FadeUp>
                  <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                    <div className="text-center mb-8">
                      <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-xl text-[var(--text-primary)] mb-2">Inquiry Received!</h3>
                      <p className="text-[var(--text-secondary)] text-sm">
                        Thank you, {formData.name.split(' ')[0]}! Our team has received your message.
                      </p>
                    </div>

                    {/* What happens next */}
                    <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-4 text-center">What Happens Next</h4>
                    <div className="space-y-4 mb-8">
                      {NEXT_STEPS.map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">{item.step}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--text-primary)] text-sm">{item.title}</h5>
                            <p className="text-[var(--text-muted)] text-xs mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-green-500/20">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[var(--bg-glass)] border border-[var(--border-soft)] flex items-center justify-center hover:border-[var(--border-active)] transition-colors"
                          aria-label={social.name}
                        >
                          <svg className="w-5 h-5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="currentColor">
                            <path d={social.path} />
                          </svg>
                        </a>
                      ))}
                    </div>

                    {/* WhatsApp quick help */}
                    <div className="mt-6 text-center">
                      <p className="text-[var(--text-muted)] text-xs mb-3">Need immediate help?</p>
                      <a
                        href="https://wa.me/917066607424"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errors.general && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" /> {errors.general}
                    </div>
                  )}

                  {/* Honeypot field (hidden from humans) */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>

                  {/* Row 1: Name | Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        suppressHydrationWarning
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={inputClass(!!errors.name)}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        suppressHydrationWarning
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={inputClass(!!errors.email)}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone | Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        suppressHydrationWarning
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={inputClass()}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        suppressHydrationWarning
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={inputClass()}
                        placeholder="Acme Inc"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service | Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Service</label>
                      <GlassSelect
                        value={formData.service}
                        onChange={(val) => handleInputChange('service', val)}
                        options={SERVICE_OPTIONS}
                        placeholder="Select a service"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Budget (INR ₹)</label>
                      <GlassSelect
                        value={formData.budget}
                        onChange={(val) => handleInputChange('budget', val)}
                        options={BUDGET_OPTIONS}
                        placeholder="Select budget range"
                      />
                    </div>
                  </div>

                  {/* Row 4: Timeline | Source */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Timeline</label>
                      <GlassSelect
                        value={formData.timeline}
                        onChange={(val) => handleInputChange('timeline', val)}
                        options={TIMELINE_OPTIONS}
                        placeholder="Select timeline"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">How did you hear about us?</label>
                      <GlassSelect
                        value={formData.source}
                        onChange={(val) => handleInputChange('source', val)}
                        options={SOURCE_OPTIONS}
                        placeholder="Select source"
                      />
                    </div>
                  </div>

                  {/* Row 5: File Upload (visual) */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Project Files (Optional)</label>
                    <div
                      onClick={handleFileClick}
                      className="relative border-2 border-dashed border-[var(--input-border)] rounded-xl p-6 text-center cursor-pointer hover:border-[var(--blue-primary)] hover:bg-[var(--bg-glass)] transition-all duration-300"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.rar"
                      />
                      <Upload className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-2" />
                      {selectedFile ? (
                        <div>
                          <p className="text-sm font-medium text-[var(--text-primary)]">{selectedFile}</p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">File selected. Files will be shared during your strategy call.</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm text-[var(--text-secondary)]">Drop files here or click to browse</p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">Project briefs, wireframes, brand guidelines (Max 10MB)</p>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 italic">Files will be shared during your strategy call.</p>
                  </div>

                  {/* Row 6: Message */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      suppressHydrationWarning
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`${inputClass(!!errors.message)} resize-none`}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>

                  {/* Trust Signals */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                    {TRUST_SIGNALS.map((signal) => (
                      <div
                        key={signal.text}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)]"
                      >
                        <span className="text-sm">{signal.icon}</span>
                        <span className="text-xs text-[var(--text-muted)]">{signal.text}</span>
                      </div>
                    ))}
                  </div>
                </form>
              )}
            </div>

            {/* ── Sidebar: Contact Details ── */}
            <div>
              <FadeUp delay={0.1}>
                <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Contact Details</h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="space-y-4">
                  {CONTACT_DETAILS.map((item) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)] flex items-start gap-4"
                    >
                      <item.icon
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          item.color === 'blue'
                            ? 'text-[var(--blue-primary)]'
                            : item.color === 'green'
                              ? 'text-green-500'
                              : 'text-[var(--orange-primary)]'
                        }`}
                      />
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] text-sm">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[var(--text-secondary)] text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Social Links */}
              <FadeUp delay={0.3}>
                <div className="mt-6">
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-soft)] flex items-center justify-center hover:border-[var(--border-active)] hover:bg-[var(--blue-primary)]/10 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <svg className="w-5 h-5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Map */}
              <FadeUp delay={0.4}>
                <div className="mt-6 rounded-2xl overflow-hidden border border-[var(--border-soft)] h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70398568854!2d73.69815529999999!3d18.5248904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NueEra Location"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. CTA — Prefer a Quick Chat? ═══════════ */}
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <FadeUp>
            <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Prefer a Quick Chat?</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
              Skip the form and message us directly on WhatsApp for an instant response.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <a
              href="https://wa.me/917066607424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
