import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Spayka Air Cargo Solutions B.V. - Reliable Air Freight Logistics",
    template: "%s | Spayka Air Cargo Solutions B.V.",
  },
  description:
    "Leading air cargo logistics provider based at Schiphol Airport, Amsterdam. Fast, reliable, and cost-effective air freight services worldwide.",
  keywords: [
    "air cargo",
    "air freight",
    "logistics",
    "Netherlands",
    "Amsterdam",
    "Schiphol",
    "cargo services",
    "international shipping",
    "express delivery",
    "supply chain",
    "customs clearance",
  ],
  authors: [{ name: "Spayka B.V." }],
  creator: "Spayka Air Cargo Solutions B.V.",
  publisher: "Spayka B.V.",
  metadataBase: new URL("https://spayka.nl"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Spayka Air Cargo Solutions B.V.",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spayka.nl",
    title: "Spayka Air Cargo Solutions B.V. - Reliable Air Freight Logistics",
    description:
      "Leading air cargo logistics provider based at Schiphol Airport, Amsterdam.",
    siteName: "Spayka Air Cargo Solutions B.V.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spayka Air Cargo Solutions B.V.",
    description:
      "Leading air cargo logistics provider based at Schiphol Airport, Amsterdam.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
