import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dpita.com"),
  title: {
    default: "DPITA • Daily Productivity Toolkit & Accessibility Hub",
    template: "%s | DPITA",
  },
  description:
    "DPITA is a sleek, privacy-first digital toolkit delivering multilingual productivity experiences, inclusive accessibility, and lightning-fast performance.",
  keywords: [
    "DPITA",
    "daily productivity tools",
    "multilingual toolkit",
    "privacy-first web apps",
    "accessible online utilities",
    "fast digital tools",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dpita.com",
    siteName: "DPITA",
    title: "DPITA • Daily Productivity Toolkit & Accessibility Hub",
    description:
      "Access privacy-first, multilingual daily tools with inclusive accessibility and sub-two-second performance.",
    images: [
      {
        url: "https://dpita.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "DPITA productivity toolkit preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPITA • Daily Productivity Toolkit & Accessibility Hub",
    description:
      "Lightning-fast, privacy-first, multilingual tools designed for inclusive daily productivity.",
    site: "@dpita",
    creator: "@dpita",
    images: ["https://dpita.com/og-image.svg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/?lang=es",
      "fr-FR": "/?lang=fr",
    },
  },
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
