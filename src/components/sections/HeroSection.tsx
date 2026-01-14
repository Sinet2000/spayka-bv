"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] h-[70vh] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/featured-img.jpg"
          alt="Air Cargo"
          fill
          className="object-cover brightness-[0.45]"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
          Spayka Air Cargo Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
          Your trusted partner for reliable, fast, and efficient air freight
          logistics across the globe
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 min-h-[56px] shadow-lg hover:shadow-xl transition-all"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto gap-2 text-base sm:text-lg px-6 sm:px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white hover:border-white/90 min-h-[56px] shadow-lg transition-all"
            asChild
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
