"use client";

import { TopBar } from "@/components/navigation/TopBar";
import { MainNav } from "@/components/navigation/MainNav";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/forms/ContactInfo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Truck,
  Plane,
  Ship,
  Warehouse,
  FileCheck,
  Package,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  const tCountries = useTranslations("countries");

  const services = [
    {
      icon: Truck,
      name: tServices("expressTransport"),
      description: t("expressTransportDesc"),
      features: [t("feature1_1"), t("feature1_2"), t("feature1_3")],
    },
    {
      icon: Plane,
      name: tServices("airFreight"),
      description: t("airFreightDesc"),
      features: [t("feature2_1"), t("feature2_2"), t("feature2_3")],
    },
    {
      icon: Ship,
      name: tServices("seaFreight"),
      description: t("seaFreightDesc"),
      features: [t("feature3_1"), t("feature3_2"), t("feature3_3")],
    },
    {
      icon: Warehouse,
      name: tServices("warehousing"),
      description: t("warehousingDesc"),
      features: [t("feature4_1"), t("feature4_2"), t("feature4_3")],
    },
    {
      icon: FileCheck,
      name: tServices("customsClearance"),
      description: t("customsClearanceDesc"),
      features: [t("feature5_1"), t("feature5_2"), t("feature5_3")],
    },
    {
      icon: Package,
      name: tServices("b2b"),
      description: t("b2bDesc"),
      features: [t("feature6_1"), t("feature6_2"), t("feature6_3")],
    },
  ];

  const operatingCountries = [
    { name: tCountries("netherlands"), flag: "🇳🇱" },
    { name: tCountries("belgium"), flag: "🇧🇪" },
    { name: tCountries("luxembourg"), flag: "🇱🇺" },
    { name: tCountries("germany"), flag: "🇩🇪" },
    { name: tCountries("france"), flag: "🇫🇷" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainNav />
      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/logo/spayka_logo.svg"
                  alt="Spayka Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              {t("pageTitle")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold">{t("operating247")}</span>
              <span className="text-slate-500">•</span>
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">{t("covering")}</span>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {tServices("badge")}
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {t("servicesTitle")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("servicesSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
                  >
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Operating Countries */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {t("operateAcross")}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                  {operatingCountries.map((country, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-3xl sm:text-4xl">
                        {country.flag}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-foreground">
                        {country.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  {t("countriesTagline")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("quoteTitle")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("quoteSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Why Choose Us CTA */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t("ctaTitle")}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6">
                {t("ctaSubtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  {t("expressNoCompromise")}
                </span>
                <span>•</span>
                <span>{t("transparentPricing")}</span>
                <span>•</span>
                <span>{t("realPeople")}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
