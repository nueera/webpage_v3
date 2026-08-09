import { Mail, MessageCircle, Calendar, Clock, MapPin, Timer, ChevronRight } from 'lucide-react';

export const SERVICE_OPTIONS = [
  'Website & Mobile App Development',
  'Growth Marketing System',
  'Tech Automation System',
  'UI/UX Design',
  'Branding & Strategy',
  'Video Production & Motion Graphics',
  'Content Strategy & Copywriting',
  'Other',
];

export const BUDGET_OPTIONS = [
  'Under ₹2L',
  '₹2L - ₹5L',
  '₹5L - ₹10L',
  '₹10L - ₹20L',
  '₹20L+',
];

export const TIMELINE_OPTIONS = [
  'ASAP (Urgent)',
  'Within 1 Month',
  '1-3 Months',
  '3-6 Months',
  'Flexible',
];

export const SOURCE_OPTIONS = [
  'Google Search',
  'Instagram',
  'LinkedIn',
  'Facebook',
  'Referral',
  'Other',
];

export const CONTACT_OPTIONS = [
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

export const CONTACT_DETAILS = [
  { icon: Mail, title: 'Email', value: 'hello@nueera.com', href: 'mailto:hello@nueera.com', color: 'blue' as const },
  { icon: Clock, title: 'Working Hours', value: 'Mon-Sat, 10 AM – 7 PM IST', color: 'orange' as const },
  { icon: Timer, title: 'Response Time', value: 'Within 24 hours', color: 'blue' as const },
  { icon: MessageCircle, title: 'WhatsApp', value: '+91 70666 07424', href: 'https://wa.me/917066607424', color: 'green' as const },
  { icon: MapPin, title: 'Location', value: 'Pune, Maharashtra, India', color: 'orange' as const },
];

export const SOCIAL_LINKS = [
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

export const TRUST_SIGNALS = [
  { icon: '🔒', text: 'Your data is secure' },
  { icon: '📄', text: 'NDA available on request' },
  { icon: '⏱️', text: 'We respond within 24 hours' },
  { icon: '🛡️', text: 'Spam-protected' },
];

export const NEXT_STEPS = [
  { step: 1, title: 'We review your inquiry', desc: 'Our team reviews your project details (1-2 hours)' },
  { step: 2, title: 'Strategy preparation', desc: 'We prepare a tailored strategy for you (within 24 hours)' },
  { step: 3, title: 'Free strategy call scheduled', desc: 'Pick a time that works for you' },
  { step: 4, title: 'Custom proposal delivered', desc: 'Detailed scope, timeline, and investment breakdown' },
];

export function inputClass(hasError = false): string {
  return `w-full px-4 py-3 rounded-xl text-sm bg-[var(--input-bg)] border ${hasError ? 'border-red-400' : 'border-[var(--input-border)]'} text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--blue-primary)] focus:outline-none transition-colors`;
}

export function GlassSelect({
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
