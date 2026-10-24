import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE, localBusinessJsonLd } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Isaiah Café | Breakfast, Bakery & Specialty Coffee in NW Calgary",
    template: "%s | Isaiah Café",
  },
  description:
    "Welcome to Isaiah Café in NW Calgary — a culture-driven community café serving specialty roasted Ethiopian Aggüdo coffee, fresh daily bakery treats, breakfast, and full-service catering.",
  keywords: [
    "Calgary cafe",
    "NW Calgary coffee shop",
    "Ethiopian coffee Calgary",
    "cafe catering Calgary",
    "breakfast Calgary",
    "bakery Calgary",
    "Aggüdo coffee",
    "Isaiah Café",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: "Isaiah Café | Breakfast, Bakery & Specialty Coffee in NW Calgary",
    description:
      "A culture-driven community café in NW Calgary — specialty Aggüdo coffee, fresh bakery, breakfast & catering.",
    images: [{ url: "/assets/hero-home.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah Café | NW Calgary",
    description:
      "Specialty Aggüdo coffee, fresh bakery, breakfast & catering — rooted in community.",
    images: ["/assets/hero-home.jpg"],
  },
  icons: {
    icon: "/assets/Isaiah_Cafe_Logo_Circle.png",
    apple: "/assets/Isaiah_Cafe_Logo_Circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-dvh antialiased">
        {/* Structured Local Business data for Calgary map visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
