import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CinematicPreloader from "@/components/cinematic-preloader";
import ScrollTopBtn from "@/components/scroll-top-btn";
import WhatsAppFloat from "@/components/whatsapp-float";
import MobileBottomNav from "@/components/mobile-bottom-nav";
import CookieConsent, { ConsentProvider } from "@/components/cookie-consent";
import ScrollProgress from "@/components/scroll-progress";
import { PageTransition } from "@/components/cinematic-page-transition";
import { ErrorBoundary } from "@/components/error-boundary";
import { LayoutClientWrapper } from "@/components/layout-client-wrapper";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NueEra - IT & Digital Solutions | Build Your Digital Empire",
  description:
    "NueEra delivers premium IT & digital solutions: web development, mobile apps, growth marketing, tech automation, UI/UX design, and branding strategy. Transform your digital future today.",
  keywords: [
    "NueEra",
    "IT Solutions",
    "Digital Solutions",
    "Web Development",
    "Mobile Apps",
    "Growth Marketing",
    "Tech Automation",
    "UI/UX Design",
    "Branding Strategy",
  ],
  authors: [{ name: "NueEra" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NueEra - IT & Digital Solutions",
    description: "Build Your Digital Empire with NueEra's premium IT & digital solutions.",
    type: "website",
  },
};

/**
 * Inline theme script for FOUC (Flash of Unstyled Content) prevention.
 * Runs BEFORE React hydrates so the correct `dark`/`light` class is on <html>.
 * This replaces the <script> injection that next-themes used (which caused
 * React 19's "Encountered a script tag" warning in Next.js 16).
 */
const themeInitScript = `
(function(){
  try{
    var t=localStorage.getItem("theme");
    if(t==="light"){
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }catch(e){}
})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${outfit.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <ConsentProvider>
            {/* Skip to main content - accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--blue-primary)] focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
            >
              Skip to main content
            </a>
            <ScrollProgress />
            <CinematicPreloader />
            <Navbar />
            <main id="main-content" className="pt-20 min-h-screen pb-mobile-nav">
              <ErrorBoundary>
                <LayoutClientWrapper>
                  <PageTransition>
                    {children}
                  </PageTransition>
                </LayoutClientWrapper>
              </ErrorBoundary>
            </main>
            <Footer />
            <WhatsAppFloat />
            <ScrollTopBtn />
            <MobileBottomNav />
            <CookieConsent />
          </ConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
