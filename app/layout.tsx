import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { METADATA } from "@/components/constant/metadata";

// Metadata for Next.js
export const metadata: Metadata = {
  title: {
    default: METADATA.title,
    template: `%s | ${METADATA.title}`,
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: [
    {
      name: METADATA.authors.name,
      url: METADATA.authors.url,
    },
  ],
  openGraph: {
    type: 'website', // Tipe diperbaiki menjadi 'website'
    locale: METADATA.openGraph.locale,
    url: METADATA.openGraph.url,
    title: METADATA.openGraph.title,
    description: METADATA.openGraph.description,
    siteName: METADATA.openGraph.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.twitter.title,
    description: METADATA.twitter.description,
  },
  robots: {
    index: METADATA.robots.index,
    follow: METADATA.robots.follow,
  },
  alternates: {
    canonical: METADATA.canonical,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={METADATA.canonical} />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
