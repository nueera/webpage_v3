import ContactHeroSection from '@/components/contact-page/hero-section';
import ContactOptionsSection from '@/components/contact-page/contact-options-section';
import ContactFormSection from '@/components/contact-page/contact-form';
import ContactDetailsSidebar from '@/components/contact-page/contact-details-sidebar';
import QuickChatCta from '@/components/contact-page/quick-chat-cta';

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactOptionsSection />
      <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="container-nueera">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactFormSection />
            </div>
            <div className="lg:col-span-2">
              <ContactDetailsSidebar />
            </div>
          </div>
        </div>
      </section>
      <QuickChatCta />
    </>
  );
}
