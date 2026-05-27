'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917066607424"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8
        w-14 h-14 rounded-full flex items-center justify-center
        bg-green-500 text-white shadow-lg
        hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl
        transition-all duration-300
        animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
