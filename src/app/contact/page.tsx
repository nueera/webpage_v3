'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Phone, Mail, MessageCircle, Clock,
  CheckCircle2, Shield, Zap, Users, Send
} from 'lucide-react';
import Breadcrumb from '@/components/breadcrumb';
import { SectionWrapper, SectionHeader } from '@/components/section-utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              { icon: Mail, title: 'General Inquiry', desc: 'Have questions? Drop us an email and we\'ll get back to you.', action: 'Send Email', href: 'mailto:hello@nueera.io' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Quick chat? Reach us instantly on WhatsApp.', action: 'Chat Now', href: 'https://wa.me/917066607424' },
            ].map((opt) => (
              <a
                key={opt.title}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-2xl p-8 text-center block"
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
            <div>
              <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)] text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary-gradient inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white w-full sm:w-auto justify-center"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--bg-glass)] border border-[var(--border-soft)]">
                  <Mail className="w-6 h-6 text-[var(--blue-primary)] mb-2" />
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Email</h3>
                  <a href="mailto:hello@nueera.io" className="text-[var(--text-secondary)] text-sm hover:text-[var(--blue-primary)] transition-colors">
                    hello@nueera.io
                  </a>
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
