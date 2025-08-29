import { Analytics } from "@vercel/analytics/react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Seo from "@/components/Seo";
import { buildDefaultMetadata } from "@/utils/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Lume Insurance",
  url: "https://www.getlume.co.uk",
  logo: {
    "@type": "ImageObject",
    url: "https://www.getlume.co.uk/images/logo.png",
    width: 180,
    height: 180,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-586-3669",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/getlume",
    "https://www.twitter.com/getlume",
    "https://www.linkedin.com/company/getlume",
    "https://www.instagram.com/getlume",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lume Insurance",
  url: "https://www.getlume.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.getlume.co.uk/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = buildDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Nav />
        <main className="md:min-h-[800px]">{children}</main>
        <Footer />
        <Seo />
        <Analytics />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
