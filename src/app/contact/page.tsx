'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Phone, Mail, MessageCircle, Clock,
  CheckCircle2, Shield, Zap, Users, Send, MapPin,
  AlertCircle, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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
        if (data.errors && Array.isArray(data.errors)) {
          setErrors({ general: data.errors.join('. ') });
        } else {
          setErrors({ general: 'Something went wrong. Please try again.' });
        }
      }
    } catch {
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error on change
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="glow-orb-blue" style={{ top: '10%', left: '10%' }} />
        <div className="glow-orb-orange" style={{ top: '60%', left: '60%' }} />
        <div className="container-nueera relative z-10 text-center">
          <span className="section-badge mb-4 inline-block">Contact Us</span>
          <h1 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Let&apos;s Build Something Great</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? We&apos;re here to help. Reach out and let&apos;s start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Strategy Call', desc: 'Book a free 30-minute strategy session to discuss your project.', action: 'Book a Call', href: 'https://wa.me/917066607424' },
              { icon: Mail, title: 'General Inquiry', desc: 'Have questions? Drop us an email and we\'ll get back to you.', action: 'Send Email', href: 'email', emailTo: 'hello@nueera.io' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Quick chat? Reach us instantly on WhatsApp.', action: 'Chat Now', href: 'https://wa.me/917066607424' },
            ].map((opt) => (
              <a
                key={opt.title}
                href={opt.href === 'email' ? undefined : opt.href}
                onClick={opt.href === 'email' ? (e) => { e.preventDefault(); window.location.href = `mailto:${opt.emailTo}`; } : undefined}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-2xl p-8 text-center block cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--blue-primary)] to-[var(--orange-primary)] shadow-lg">
                  <opt.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{opt.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{opt.desc}</p>
                <span className="text-[var(--blue-primary)] text-sm font-semibold inline-flex items-center gap-1">
                  {opt.action} <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What Happens Next */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Process" title="What Happens Next?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'We Listen', desc: 'We understand your goals, challenges, and vision in detail.' },
              { num: '02', title: 'We Plan', desc: 'Our team crafts a tailored strategy and project roadmap.' },
              { num: '03', title: 'We Deliver', desc: 'We execute with precision and keep you updated every step.' },
            ].map((s) => (
              <div key={s.num} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-gradient-to-r from-[var(--blue-primary)] to-[var(--orange-primary)] text-white font-bold text-sm">
                  {s.num}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form + Details */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div ref={formRef}>
              <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Send Us a Message</h2>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-bold text-xl text-[var(--text-primary)] mb-2"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-[var(--text-secondary)] text-sm mb-6"
                    >
                      We&apos;ll get back to you within 24 hours. Thank you for reaching out!
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-2 text-green-400 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Your submission has been recorded</span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    {/* General error */}
                    {errors.general && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errors.general}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${
                            errors.name ? 'border-red-400' : 'border-[var(--input-border)]'
                          } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${
                            errors.email ? 'border-red-400' : 'border-[var(--input-border)]'
                          } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                          placeholder="Acme Inc"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Service</label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option>Web Development</option>
                          <option>Mobile Apps</option>
                          <option>UI/UX Design</option>
                          <option>Branding</option>
                          <option>Digital Marketing</option>
                          <option>Software Solutions</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option>Under $2,500</option>
                          <option>$2,500 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${
                          errors.message ? 'border-red-400' : 'border-[var(--input-border)]'
                        } text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors resize-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Details + Map */}
            <div>
              <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <Mail className="w-6 h-6 text-[var(--blue-primary)] mb-2" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Email</h3>
                  <span
                    className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors cursor-pointer"
                    role="link"
                    tabIndex={0}
                    onClick={() => { window.location.href = 'mailto:hello@nueera.io'; }}
                    onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = 'mailto:hello@nueera.io'; }}
                  >
                    hello@nueera.io
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <Clock className="w-6 h-6 text-[var(--orange-primary)] mb-2" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Response Time</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Within 24 hours on business days</p>
                </div>
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <MessageCircle className="w-6 h-6 text-green-500 mb-2" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/917066607424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] text-sm hover:text-green-500 transition-colors"
                  >
                    +91 70666 07424
                  </a>
                </div>
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <MapPin className="w-6 h-6 text-[var(--orange-primary)] mb-2" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Location</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Pune, Maharashtra, India</p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-[var(--border-soft)] h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70398568854!2d73.69815529999999!3d18.5248904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NueEra Location - Pune, India"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Contact NueEra */}
      <SectionWrapper>
        <div className="container-nueera">
          <SectionHeader badge="Why Us" title="Why Contact NueEra?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Trusted Partner', desc: 'We work with you, not just for you.' },
              { icon: Zap, title: 'Fast Response', desc: 'We respond within 24 hours, guaranteed.' },
              { icon: Users, title: 'Expert Team', desc: 'Skilled professionals across all domains.' },
              { icon: CheckCircle2, title: 'Proven Results', desc: '100% client satisfaction track record.' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--blue-primary)]" />
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-[var(--bg-secondary)]">
        <div className="container-nueera text-center">
          <h2 className="heading-gradient text-3xl md:text-4xl font-extrabold mb-6">Prefer a Quick Chat?</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            Skip the form and message us directly on WhatsApp for an instant response.
          </p>
          <a
            href="https://wa.me/917066607424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
