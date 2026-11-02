import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZAInnovate Technologies (Pty) Ltd | Engineering South Africa's Digital Backbone",
  description:
    "100% Black Youth-Owned National Technology Studio based in East London, South Africa. Reg: 2025/572318/07. B-BBEE Level 1. Creators of SAMS (Smart Audit Management System) and Umbono (Offline-First AI Education Engine).",
  keywords: [
    "ZAInnovate Technologies",
    "South Africa National Technology Studio",
    "SAMS",
    "Smart Audit Management System",
    "Umbono",
    "Offline-First AI",
    "East London Tech",
    "B-BBEE Level 1 Technology",
    "Sovereign AI South Africa",
    "PFMA MFMA Compliance Software",
  ],
  authors: [{ name: "ZAInnovate Technologies (Pty) Ltd" }],
  openGraph: {
    title: "ZAInnovate Technologies | Engineering South Africa's Digital Backbone",
    description:
      "100% Black Youth-Owned National Technology Studio based in East London, South Africa. Reg: 2025/572318/07. B-BBEE Level 1.",
    url: "https://zainnovate.co.za",
    siteName: "ZAInnovate Technologies",
    locale: "en_ZA",
    type: "website",
  },
  metadataBase: new URL("https://zainnovate.co.za"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "ZAInnovate Technologies (Pty) Ltd",
    alternateName: "ZAInnovate",
    legalName: "ZAInnovate Technologies (Pty) Ltd",
    url: "https://zainnovate.co.za",
    taxID: "2025/572318/07",
    address: {
      "@type": "PostalAddress",
      addressLocality: "East London",
      addressRegion: "Eastern Cape",
      addressCountry: "ZA",
    },
    slogan: "Engineering South Africa's Digital Backbone",
    knowsAbout: [
      "Sovereign Artificial Intelligence",
      "Predictive Public Sector Governance",
      "Offline-First Education Technology",
      "Enterprise Cloud Infrastructure",
      "Public Finance Management Act (PFMA)",
      "Municipal Finance Management Act (MFMA)",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#08101C] font-sans text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
