'use client';

import { MessageCircle } from 'lucide-react';
import { FadeUp } from '@/components/ui-extensions';

export default function QuickChatCta() {
  return (
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
  );
}
