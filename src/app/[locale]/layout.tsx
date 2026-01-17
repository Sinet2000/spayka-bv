import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";
import { routing } from "@/i18n/routing";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const translations = {
    en: {
      title: "Spayka Air Cargo Solutions - Express Logistics Across Europe",
      description:
        "24/7 express and time-critical cargo solutions across Europe. Air freight, warehousing, customs clearance. Operating in Netherlands, Belgium, Luxembourg, Germany, France.",
      siteName: "Spayka Air Cargo Solutions",
    },
    nl: {
      title: "Spayka Air Cargo Solutions - Express Logistiek in Europa",
      description:
        "24/7 express en tijdkritieke vrachtoplossingen in Europa. Luchtvracht, opslag, douane-afhandeling. Actief in Nederland, België, Luxemburg, Duitsland, Frankrijk.",
      siteName: "Spayka Air Cargo Solutions",
    },
  };

  const t =
    translations[locale as keyof typeof translations] || translations.en;

  return {
    title: {
      default: t.title,
      template: `%s | ${t.siteName}`,
    },
    description: t.description,
    keywords: [
      "air cargo",
      "air freight",
      "logistics",
      "express transport",
      "warehousing",
      "customs clearance",
      "Europe",
      "Netherlands",
      "Belgium",
      "Luxembourg",
      "Germany",
      "France",
      "PMC",
      "24/7",
    ],
    authors: [{ name: "Spayka Air Cargo Solutions B.V." }],
    creator: "Dexlaris",
    publisher: "Spayka Air Cargo Solutions B.V.",
    metadataBase: new URL("https://spayka.nl"),
    manifest: "/manifest.json",
    alternates: {
      canonical: `https://spayka.nl${locale === "nl" ? "/nl" : ""}`,
      languages: {
        en: "https://spayka.nl",
        nl: "https://spayka.nl/nl",
        "x-default": "https://spayka.nl",
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t.siteName,
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      url: `https://spayka.nl${locale === "nl" ? "/nl" : ""}`,
      title: t.title,
      description: t.description,
      siteName: t.siteName,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/og-image.jpg"],
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
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spayka Air Cargo Solutions B.V.",
    url: "https://spayka.nl",
    logo: "https://spayka.nl/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-62-858-5428",
      contactType: "customer service",
      availableLanguage: ["English", "Dutch"],
      areaServed: ["NL", "BE", "LU", "DE", "FR"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tilly de Vriestuin 7",
      addressLocality: "Heerhugowaard",
      postalCode: "1705 HL",
      addressCountry: "NL",
    },
    sameAs: ["https://www.linkedin.com/company/spayka"],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster richColors position="top-right" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
