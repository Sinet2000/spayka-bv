"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  DollarSign,
  Headphones,
  Plane,
  Ship,
  Package,
  Warehouse,
  FileCheck,
  Truck,
  Globe2,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");

  const keyFeatures = [
    {
      icon: Zap,
      title: t("features.speed.title"),
      description: t("features.speed.description"),
    },
    {
      icon: DollarSign,
      title: t("features.price.title"),
      description: t("features.price.description"),
    },
    {
      icon: Headphones,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
  ];
  return (
    <>
      <section className="relative min-h-[650px] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/gen-spayka-featured-2.jpeg"
            alt="Air Cargo"
            fill
            className="object-cover object-center brightness-[0.5]"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>

        {/* Enhanced Gradient Overlay with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-slate-900/60 to-red-950/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-blue-900/20 z-[1]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse opacity-30 z-[1]" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse opacity-30 z-[1]"
          style={{ animationDelay: "1s" }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-white py-6 sm:py-12">
          <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-primary to-blue-600 text-white border-0 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 animate-fade-in-up shadow-lg shadow-primary/30">
            <Globe2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            {t("badge")}
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up animation-delay-100 leading-tight px-2 drop-shadow-2xl">
            {t("title")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4 leading-relaxed drop-shadow-lg">
            {t("subtitle")}
          </p>

          {/* Key Features - Enhanced Glassy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto mb-6 sm:mb-8 px-4 animate-fade-in-up animation-delay-300">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const gradients = [
                "from-blue-500/30 to-primary/30",
                "from-red-500/30 to-secondary/30",
                "from-blue-600/30 to-cyan-600/30",
              ];
              const glowColors = [
                "shadow-blue-500/40",
                "shadow-red-500/40",
                "shadow-blue-600/40",
              ];
              return (
                <div
                  key={index}
                  className={`relative group bg-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/40 transition-all duration-500 hover:scale-[1.08] hover:shadow-2xl ${glowColors[index]} hover:-translate-y-1`}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Top shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                  {/* Icon with glow effect */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl backdrop-blur-sm border border-white/20">
                      <Icon className="h-7 w-7 sm:h-9 sm:w-9 text-white drop-shadow-2xl" />
                    </div>
                    {/* Icon glow ring */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-2 border-2 border-white/30 rounded-2xl animate-ping" />
                    </div>
                  </div>

                  <h3 className="relative font-bold text-base sm:text-lg lg:text-xl mb-2 text-white drop-shadow-lg">
                    {feature.title}
                  </h3>
                  <p className="relative text-xs sm:text-sm text-white/95 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Corner accents */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-white/30 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-white/30 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4">
            <Link href="/contact" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="relative overflow-hidden w-full sm:w-auto gap-2 bg-primary hover:bg-blue-700 text-white border-2 border-blue-400/60 hover:border-blue-300 hover:scale-[1.05] text-sm sm:text-base lg:text-lg px-8 sm:px-10 min-h-[52px] sm:min-h-[60px] shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 font-bold"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">{t("getQuote")}</span>
                <ArrowRight className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="relative overflow-hidden w-full sm:w-auto gap-2 text-sm sm:text-base lg:text-lg px-8 sm:px-10 bg-white/10 backdrop-blur-2xl hover:bg-white/20 text-white border-2 border-white/50 hover:border-white/80 hover:scale-[1.05] min-h-[52px] sm:min-h-[60px] shadow-2xl hover:shadow-white/30 transition-all duration-300 font-bold group"
              asChild
            >
              <a href="tel:+31628585428">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">{t("callNow")}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
