"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative h-[350px] sm:h-[450px] overflow-hidden flex items-center">
      {/* Background Image - Using Next.js Image for better mobile support */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/plane-in-sky.jpg"
          alt="Air Cargo Plane"
          fill
          className="object-cover object-center"
          priority={false}
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-2xl leading-tight">
          {t("title")}
        </h2>
        <p className="text-xs sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-2xl mx-auto text-white drop-shadow-lg px-4 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4">
          <Link href="/contact" className="w-full sm:w-auto group">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 bg-transparent hover:bg-sky-500/10 text-white border-2 border-sky-500 hover:border-sky-400 hover:scale-105 text-sm sm:text-lg px-6 sm:px-10 min-h-[44px] sm:min-h-[60px] shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 font-semibold cursor-pointer"
            >
              {t("requestQuote")}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 text-sm sm:text-lg px-6 sm:px-10 bg-white/15 backdrop-blur-md text-white border-2 border-white/80 hover:bg-white/25 hover:border-white hover:scale-105 min-h-[44px] sm:min-h-[60px] transition-all duration-300 shadow-2xl font-semibold cursor-pointer group"
            asChild
          >
            <a href="tel:+31628585428">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
              {t("callUs")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
