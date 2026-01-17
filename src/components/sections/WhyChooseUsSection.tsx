"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyChooseUsSection() {
  const t = useTranslations("whyUs");

  const coreValues = [
    {
      icon: Zap,
      title: t("speed.title"),
      subtitle: t("speed.subtitle"),
      description: t("speed.description"),
      color: "from-primary to-orange-600",
    },
    {
      icon: DollarSign,
      title: t("price.title"),
      subtitle: t("price.subtitle"),
      description: t("price.description"),
      color: "from-secondary to-blue-700",
    },
    {
      icon: Headphones,
      title: t("support.title"),
      subtitle: t("support.subtitle"),
      description: t("support.description"),
      color: "from-primary via-secondary to-primary",
    },
  ];
  return (
    <section
      id="why-us"
      className="relative py-12 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              {t("badge")}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-px bg-slate-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-5 sm:p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 rounded-xl bg-slate-700/50 group-hover:bg-slate-700 transition-all duration-300">
                    <Icon className="h-7 w-7 sm:h-9 sm:w-9 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-3xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-base text-primary font-semibold">
                    {value.subtitle}
                  </p>
                  <div className="h-px bg-slate-700 my-2 sm:my-3" />
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/30 bg-slate-800/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-5 sm:p-8 text-center">
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                {t("whenMinutes")}{" "}
                <span className="text-primary">{t("weMove")}</span>
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700">
                <p className="text-xs sm:text-base text-slate-400 italic">
                  {t("tagline")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
