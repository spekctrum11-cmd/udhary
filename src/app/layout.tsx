import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udhary.com"),
  title: "Udhary.com | Quick, Hassle-Free Loans",
  description: "Are you a salaried professional looking for extra financial support? Get quick, hassle-free loans to meet your every need at Udhary.com. Low interest, fast approval.",
  keywords: ["personal loan", "business loan", "home loan", "car loan", "credit card", "finance", "instant approval", "India"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Udhary.com | Quick, Hassle-Free Loans",
    description: "Get quick, hassle-free loans to meet your every need. Trusted by thousands of Indians.",
    url: "https://udhary.com",
    siteName: "Udhary.com",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udhary.com | Quick, Hassle-Free Loans",
    description: "Quick, hassle-free loans to meet your every need. Start your application today.",
  },
};

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body-md">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
