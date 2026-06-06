'use client';

import { useState } from 'react';
import {
  Send, Mail, MessageCircle, MapPin, CheckCircle2,
  AlertCircle, Loader2, Lock, FileText,
} from 'lucide-react';
import { SectionBadge, SectionTitle, SectionDescription, GlassCard, FadeUp } from './ui-extensions';
import { PremiumButton } from './premium-button';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@nueera.io',
    href: 'mailto:hello@nueera.io',
    color: 'blue' as const,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91 70666 07424',
    href: 'https://wa.me/917066607424',
    color: 'green' as const,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Pune, MH, India',
    href: undefined,
    color: 'orange' as const,
  },
];

export function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
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
    if (errors[field as keyof FormErrors]) setErrors({ ...errors, [field]: undefined });
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${hasError ? 'border-red-400' : 'border-[var(--input-border)]'} text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors`;

  return (
    <section className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] top-[10%] left-[-5%]"
          style={{ background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] bottom-[5%] right-[-3%]"
          style={{ background: 'radial-gradient(circle, var(--orange-primary) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-nueera relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <SectionBadge>Get Started</SectionBadge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SectionTitle className="mt-4">
              Let&apos;s Discuss Your <span className="gradient-text">Project</span>
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.2}>
            <SectionDescription className="mx-auto mt-4">
              Fill in a few details and we&apos;ll get back to you within 24 hours with a free strategy roadmap.
            </SectionDescription>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Form (3 cols) */}
          <FadeUp delay={0.2} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errors.general && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" /> {errors.general}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={inputClass(!!errors.name)}
                        placeholder="Your full name"
                        suppressHydrationWarning
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={inputClass(!!errors.email)}
                        placeholder="you@example.com"
                        suppressHydrationWarning
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={inputClass(false)}
                        placeholder="+91 98765 43210"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className={inputClass(false)}
                      >
                        <option value="">Select a service</option>
                        <option>Web Development</option>
                        <option>Mobile Apps</option>
                        <option>UI/UX Design</option>
                        <option>Branding & Strategy</option>
                        <option>Growth Marketing</option>
                        <option>Tech Automation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className={inputClass(false)}
                      >
                        <option value="">Select budget range</option>
                        <option>Under ₹2L</option>
                        <option>₹2L - ₹5L</option>
                        <option>₹5L - ₹10L</option>
                        <option>₹10L+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`${inputClass(!!errors.message)} resize-none`}
                        rows={3}
                        placeholder="Tell us about your project..."
                        suppressHydrationWarning
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </div>

                  <PremiumButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </PremiumButton>
                </form>
              )}

              {/* Trust signals */}
              <div className="mt-6 pt-4 border-t border-[var(--border-soft)] flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[var(--text-muted)] text-xs">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Your data is secure
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> NDA available on request
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Right: Quick Contact Cards (2 cols) */}
          <FadeUp delay={0.3} className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactCards.map((item) => (
                <GlassCard key={item.title} className="flex items-center gap-4 p-4" hover={false}>
                  <div
                    className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      item.color === 'blue'
                        ? 'bg-[var(--blue-primary)]/10'
                        : item.color === 'green'
                        ? 'bg-green-500/10'
                        : 'bg-[var(--orange-primary)]/10'
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === 'blue'
                          ? 'text-[var(--blue-primary)]'
                          : item.color === 'green'
                          ? 'text-green-500'
                          : 'text-[var(--orange-primary)]'
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--blue-primary)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Small Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border-soft)] h-[200px]">
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
    </section>
  );
}
