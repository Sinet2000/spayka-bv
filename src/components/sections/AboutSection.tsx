"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");
  const tCountries = useTranslations("countries");
  const tServices = useTranslations("services");

  const operatingCountries = [
    { name: tCountries("netherlands"), flag: "🇳🇱" },
    { name: tCountries("belgium"), flag: "🇧🇪" },
    { name: tCountries("luxembourg"), flag: "🇱🇺" },
    { name: tCountries("germany"), flag: "🇩🇪" },
    { name: tCountries("france"), flag: "🇫🇷" },
  ];

  const services = [
    tServices("expressTransport"),
    tServices("airFreight"),
    tServices("seaFreight"),
    tServices("warehousing"),
    tServices("customsClearance"),
    tServices("b2b"),
  ];
  return (
    <section
      id="about"
      className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 text-xs sm:text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            {t("title")}
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("tagline")}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {/* Who We Are */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t("whoWeAre")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("whoWeAreText")}
            </p>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* What We Do */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t("whatWeDo")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
              {t("whatWeDoText")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm max-w-3xl mx-auto">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* Where We Operate */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {t("whereWeOperate")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {operatingCountries.map((country, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* Specialized Equipment */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {t("specializedEquipment")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              {t("equipmentText")}
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 shadow-lg">
            <CardContent className="p-8 sm:p-10 text-center">
              <div className="inline-block mb-4">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  {t("mission")}
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                {t("missionText")}
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-secondary">
                  {t("whenMinutes")}
                </span>
                <span>•</span>
                <span className="font-semibold text-primary">
                  {t("weMove")}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
