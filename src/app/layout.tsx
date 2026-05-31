import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollTopBtn from "@/components/scroll-top-btn";
import WhatsAppFloat from "@/components/whatsapp-float";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NueEra - IT & Digital Solutions | Build Your Digital Empire",
    template: "%s | NueEra",
  },
  description:
    "NueEra delivers premium IT & digital solutions: web development, mobile apps, growth marketing, tech automation, UI/UX design, and branding strategy.",
  keywords: [
    "NueEra",
    "IT Solutions",
    "Digital Solutions",
    "Web Development",
    "Mobile Apps",
    "Growth Marketing",
    "UI/UX Design",
    "Branding",
    "Software Development",
    "Pune",
    "India",
  ],
  authors: [{ name: "NueEra" }],
  creator: "NueEra",
  publisher: "NueEra",
  metadataBase: new URL("https://nueera.io"),
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "NueEra - IT & Digital Solutions",
    description: "Build Your Digital Empire with NueEra's premium IT & digital solutions.",
    type: "website",
    locale: "en_IN",
    url: "https://nueera.io",
    siteName: "NueEra",
  },
  twitter: {
    card: "summary_large_image",
    title: "NueEra - IT & Digital Solutions",
    description: "Build Your Digital Empire with NueEra's premium IT & digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NueEra",
              "url": "https://nueera.io",
              "logo": "https://nueera.io/assets/images/lightlogo.webp",
              "description": "NueEra delivers premium IT & digital solutions: web development, mobile apps, growth marketing, tech automation, UI/UX design, and branding strategy.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "email": "hello@nueera.io",
              "telephone": "+917066607424",
              "sameAs": [
                "https://linkedin.com/company/nueera",
                "https://instagram.com/nueera"
              ],
              "foundingDate": "2023",
              "founders": [
                { "@type": "Person", "name": "Nil Shinde", "jobTitle": "Founder & CEO" },
                { "@type": "Person", "name": "Dipanshu Awandkar", "jobTitle": "Co-Founder & CTO" }
              ],
              "knowsAbout": ["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "Branding", "Software Solutions"]
            }),
          }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--blue-primary)] focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <ScrollTopBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
