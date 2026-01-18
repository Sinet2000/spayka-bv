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
    de: {
      title: "Spayka Air Cargo Solutions - Express Logistik in Europa",
      description:
        "24/7 Express- und zeitkritische Frachtlösungen in ganz Europa. Luftfracht, Lagerung, Zollabfertigung. Tätig in den Niederlanden, Belgien, Luxemburg, Deutschland, Frankreich.",
      siteName: "Spayka Air Cargo Solutions",
    },
    ru: {
      title: "Spayka Air Cargo Solutions - Экспресс-логистика по Европе",
      description:
        "Круглосуточные экспресс-решения и срочные грузоперевозки по Европе. Авиаперевозки, складирование, таможенное оформление. Работаем в Нидерландах, Бельгии, Люксембурге, Германии, Франции.",
      siteName: "Spayka Air Cargo Solutions",
    },
    fr: {
      title: "Spayka Air Cargo Solutions - Logistique Express en Europe",
      description:
        "Solutions de fret express et urgent 24/7 en Europe. Fret aérien, entreposage, dédouanement. Opérant aux Pays-Bas, Belgique, Luxembourg, Allemagne, France.",
      siteName: "Spayka Air Cargo Solutions",
    },
    zh: {
      title: "Spayka Air Cargo Solutions - 欧洲快递物流",
      description:
        "全天候欧洲快递和时效性货运解决方案。航空货运、仓储、清关服务。服务范围：荷兰、比利时、卢森堡、德国、法国。",
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
      "express delivery",
      "urgent freight",
      "time-critical cargo",
      "same day delivery",
      "next day delivery",
      "warehousing",
      "customs clearance",
      "customs broker",
      "freight forwarding",
      "cargo solutions",
      "B2B logistics",
      "sea freight",
      "road transport",
      "Europe logistics",
      "Netherlands cargo",
      "Belgium freight",
      "Luxembourg logistics",
      "Germany transport",
      "France shipping",
      "Benelux logistics",
      "European freight network",
      "PMC pallets",
      "pallet transport",
      "cargo tracking",
      "24/7 logistics",
      "Heerhugowaard",
      "Amsterdam cargo",
      "international shipping",
      "supply chain solutions",
    ],
    authors: [{ name: "Spayka Air Cargo Solutions B.V." }],
    creator: "Dexlaris",
    publisher: "Spayka Air Cargo Solutions B.V.",
    metadataBase: new URL("https://spayka.nl"),
    manifest: "/manifest.json",
    alternates: {
      canonical: `https://spayka.nl/${locale}`,
      languages: {
        en: "https://spayka.nl/en",
        nl: "https://spayka.nl/nl",
        de: "https://spayka.nl/de",
        ru: "https://spayka.nl/ru",
        fr: "https://spayka.nl/fr",
        zh: "https://spayka.nl/zh",
        "x-default": "https://spayka.nl/nl",
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
    icons: {
      icon: [
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/icon-192.png",
      apple: "/icon-192.png",
    },
    openGraph: {
      type: "website",
      locale:
        locale === "nl"
          ? "nl_NL"
          : locale === "de"
          ? "de_DE"
          : locale === "ru"
          ? "ru_RU"
          : locale === "fr"
          ? "fr_FR"
          : locale === "zh"
          ? "zh_CN"
          : "en_US",
      url: `https://spayka.nl/${locale}`,
      title: t.title,
      description: t.description,
      siteName: t.siteName,
      images: [
        {
          url: "/og-image.jpg",
          width: 549,
          height: 573,
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

  // Translations for JSON-LD
  const translations = {
    en: {
      description:
        "24/7 express and time-critical cargo solutions across Europe. Air freight, warehousing, customs clearance. Operating in Netherlands, Belgium, Luxembourg, Germany, France.",
    },
    nl: {
      description:
        "24/7 express en tijdkritieke vrachtoplossingen in Europa. Luchtvracht, opslag, douane-afhandeling. Actief in Nederland, België, Luxemburg, Duitsland, Frankrijk.",
    },
    de: {
      description:
        "24/7 Express- und zeitkritische Frachtlösungen in ganz Europa. Luftfracht, Lagerung, Zollabfertigung. Tätig in den Niederlanden, Belgien, Luxemburg, Deutschland, Frankreich.",
    },
    ru: {
      description:
        "Круглосуточные экспресс-решения и срочные грузоперевозки по Европе. Авиаперевозки, складирование, таможенное оформление. Работаем в Нидерландах, Бельгии, Люксембурге, Германии, Франции.",
    },
    fr: {
      description:
        "Solutions de fret express et urgent 24/7 en Europe. Fret aérien, entreposage, dédouanement. Opérant aux Pays-Bas, Belgique, Luxembourg, Allemagne, France.",
    },
    zh: {
      description:
        "全天候欧洲快递和时效性货运解决方案。航空货运、仓储、清关服务。服务范围：荷兰、比利时、卢森堡、德国、法国。",
    },
  };

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spayka.nl/#organization",
    name: "Spayka Air Cargo Solutions B.V.",
    legalName: "Spayka Air Cargo Solutions B.V.",
    url: "https://spayka.nl",
    logo: "https://spayka.nl/logo.png",
    description:
      translations[locale as keyof typeof translations]?.description ||
      translations.en.description,
    foundingDate: "2020",
    email: "info@spayka.nl",
    telephone: "+31628585428",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+31-62-858-5428",
        contactType: "customer service",
        availableLanguage: ["en", "nl", "de", "ru", "fr", "zh"],
        areaServed: ["NL", "BE", "LU", "DE", "FR"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+31-62-858-5428",
        contactType: "sales",
        availableLanguage: ["en", "nl", "de", "ru", "fr", "zh"],
        areaServed: ["NL", "BE", "LU", "DE", "FR"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tilly de Vriestuin 7",
      addressLocality: "Heerhugowaard",
      addressRegion: "Noord-Holland",
      postalCode: "1705 HL",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.6719",
      longitude: "4.8419",
    },
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Luxembourg" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
    ],
    serviceType: [
      "Air Freight",
      "Express Transport",
      "Sea Freight",
      "Warehousing",
      "Customs Clearance",
      "B2B Logistics",
      "Time-Critical Cargo",
      "Freight Forwarding",
    ],
    sameAs: ["https://www.linkedin.com/company/spayka", "https://spayka.nl"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "127",
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512.png"
        />
        <link rel="apple-touch-icon" href="/icon-192.png" />
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
