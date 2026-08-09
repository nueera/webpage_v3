'use client';

import { useState, useRef } from 'react';
import {
  AlertCircle, Send, Loader2, Upload,
} from 'lucide-react';
import { FadeUp } from '@/components/ui-extensions';
import {
  SERVICE_OPTIONS, BUDGET_OPTIONS, TIMELINE_OPTIONS, SOURCE_OPTIONS,
  TRUST_SIGNALS, inputClass, GlassSelect,
} from './data';
import SuccessView from './success-view';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function ContactFormSection() {
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
    website: '',
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
    <div>
      <FadeUp>
        <h2 className="heading-gradient text-2xl md:text-3xl font-extrabold mb-6">Send Us a Message</h2>
      </FadeUp>

      {submitted ? (
        <SuccessView name={formData.name} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.general && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" /> {errors.general}
            </div>
          )}

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
  );
}
