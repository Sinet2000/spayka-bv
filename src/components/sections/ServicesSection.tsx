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
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-red-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  {t("badge")}
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}{" "}
              <span className="font-bold text-sky-600">
                {countries.join(", ")}
              </span>
            </p>
          </div>

          {/* Services Grid - Compact Modern Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const gradients = [
                "from-blue-500/10 to-primary/10",
                "from-primary/10 to-cyan-500/10",
                "from-red-500/10 to-secondary/10",
                "from-blue-600/10 to-blue-800/10",
                "from-primary/10 to-blue-400/10",
                "from-secondary/10 to-red-600/10",
              ];
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border-2 border-slate-200/80 rounded-2xl p-5 hover:bg-white hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                  <div className="relative flex items-start gap-4">
                    {/* Icon Container - Compact */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md border border-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content - Left Aligned */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
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
