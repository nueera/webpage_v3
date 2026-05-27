import type { Metadata } from "next";
import { Outfit } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
