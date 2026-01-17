"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plane,
  Package,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  ArrowRight,
  FileCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("services");
  const tCountries = useTranslations("countries");

  const services = [
    {
      icon: Truck,
      name: t("expressTransport"),
      description: t("expressTransportDesc"),
    },
    {
      icon: Plane,
      name: t("airFreight"),
      description: t("airFreightDesc"),
    },
    {
      icon: Ship,
      name: t("seaFreight"),
      description: t("seaFreightDesc"),
    },
    {
      icon: Warehouse,
      name: t("warehousing"),
      description: t("warehousingDesc"),
    },
    {
      icon: FileCheck,
      name: t("customsClearance"),
      description: t("customsClearanceDesc"),
    },
    {
      icon: Package,
      name: t("b2b"),
      description: t("b2bDesc"),
    },
  ];

  const countries = [
    tCountries("netherlands"),
    tCountries("belgium"),
    tCountries("luxembourg"),
    tCountries("germany"),
    tCountries("france"),
  ];
  return (
    <section id="services">
      {/* Services Section */}
      <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <div className="h-px w-8 bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {t("badge")}
                </span>
                <div className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}{" "}
              <span className="font-bold text-primary">
                {countries.join(", ")}
              </span>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ clipPath: "inset(0 0 calc(100% - 3px) 0)" }}
                  />

                  <CardContent className="relative p-4 sm:p-8">
                    {/* Icon Container */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <Icon className="h-6 w-6 sm:h-10 sm:w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Decorative Ring */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-primary/20 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-2 sm:mb-3 opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all" />
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div
                className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
