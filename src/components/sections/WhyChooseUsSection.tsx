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
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/40 to-blue-600/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary/40 to-red-600/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400 mb-2 bg-sky-500/10 px-4 py-2 rounded-full border border-sky-500/30">
              {t("badge")}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            {t("title")}
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto mb-10 sm:mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            const colors = [
              {
                bg: "from-blue-500/10 to-primary/10",
                icon: "text-sky-400",
                accent: "border-sky-500/30",
              },
              {
                bg: "from-red-500/10 to-secondary/10",
                icon: "text-red-400",
                accent: "border-red-500/30",
              },
              {
                bg: "from-blue-600/10 to-cyan-500/10",
                icon: "text-cyan-400",
                accent: "border-cyan-500/30",
              },
            ];
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index].bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${colors[index].icon} to-transparent rounded-t-2xl`}
                />

                {/* Icon */}
                <div className="relative mb-5 sm:mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${colors[index].bg} border ${colors[index].accent} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon
                      className={`h-8 w-8 sm:h-10 sm:w-10 ${colors[index].icon} drop-shadow-lg`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-2 sm:space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${colors[index].icon} font-bold`}
                  >
                    {value.subtitle}
                  </p>
                  <div className="h-px bg-white/10 my-2 sm:my-3" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Bottom corner accent */}
                <div
                  className={`absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 ${colors[index].accent} rounded-br opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-600/10 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/50 shadow-2xl hover:shadow-primary/30 transition-all duration-500">
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4">
                {t("whenMinutes")}{" "}
                <span className="text-sky-400">{t("weMove")}</span>
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
              <p className="text-sm sm:text-base text-slate-400">
                {t("tagline")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
