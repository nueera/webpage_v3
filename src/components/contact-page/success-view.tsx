'use client';

import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { FadeUp } from '@/components/ui-extensions';
import { NEXT_STEPS, SOCIAL_LINKS } from './data';

interface SuccessViewProps {
  name: string;
}

export default function SuccessView({ name }: SuccessViewProps) {
  return (
    <FadeUp>
      <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
        <div className="text-center mb-8">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-[var(--text-primary)] mb-2">Inquiry Received!</h3>
          <p className="text-[var(--text-secondary)] text-sm">
            Thank you, {name.split(' ')[0]}! Our team has received your message.
          </p>
        </div>

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
  );
}
