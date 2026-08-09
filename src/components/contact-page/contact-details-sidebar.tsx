'use client';

import { FadeUp } from '@/components/ui-extensions';
import { CONTACT_DETAILS, SOCIAL_LINKS } from './data';

export default function ContactDetailsSidebar() {
  return (
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
  );
}
