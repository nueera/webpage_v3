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
  title: "NueEra - IT & Digital Solutions | Build Your Digital Empire",
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
  ],
  authors: [{ name: "NueEra" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "NueEra - IT & Digital Solutions",
    description: "Build Your Digital Empire with NueEra's premium IT & digital solutions.",
    type: "website",
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
