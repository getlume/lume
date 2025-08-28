import type { Metadata } from "next";

export const buildDefaultMetadata = (): Metadata => {
  const title = "Lume - Premium Watch Insurance";
  const description = "Protect your luxury timepieces with comprehensive watch insurance. Cover for damage, theft, and worldwide travel. Get an instant quote today.";
  const url = "https://www.getlume.co.uk";

  return {
    title: {
      default: title,
      template: `%s | Lume`,
    },
    description,
    keywords: ["watch insurance", "luxury watch protection", "timepiece insurance", "watch coverage", "Rolex insurance", "Omega insurance"],
    authors: [{ name: "Lume Insurance" }],
    creator: "Lume Insurance",
    publisher: "Lume Insurance",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Lume Insurance",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Lume - Premium Watch Insurance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
      creator: "@getlume",
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
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
        },
      ],
    },
  };
};