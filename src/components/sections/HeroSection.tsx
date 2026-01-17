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
      <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/spayka-group.jpeg"
            alt="Air Cargo"
            fill
            className="object-cover brightness-[0.4]"
            priority
            quality={90}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-white py-6 sm:py-12">
          <Badge className="mb-3 sm:mb-4 bg-primary text-white border-0 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 animate-fade-in-up">
            <Globe2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            {t("badge")}
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up animation-delay-100 leading-tight px-2">
            {t("title")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4 leading-relaxed">
            {t("subtitle")}
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto mb-4 sm:mb-8 px-4 animate-fade-in-up animation-delay-300">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2.5 sm:p-4 hover:bg-white/15 transition-all"
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-1.5 sm:mb-2 text-primary" />
                  <h3 className="font-bold text-xs sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-white/90 leading-tight sm:leading-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center animate-fade-in-up animation-delay-400 px-4">
            <Link href="/contact" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 hover:scale-105 text-xs sm:text-base lg:text-lg px-5 sm:px-8 min-h-[44px] sm:min-h-[56px] shadow-2xl hover:shadow-primary/50 transition-all font-semibold"
              >
                {t("getQuote")}
                <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 text-xs sm:text-base lg:text-lg px-5 sm:px-8 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/80 hover:border-white hover:scale-105 min-h-[44px] sm:min-h-[56px] shadow-lg transition-all"
              asChild
            >
              <a href="tel:+31628585428">{t("callNow")}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
