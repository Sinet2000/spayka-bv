"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/featured-img.jpg"
          alt="Air Cargo"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Spayka Air Cargo Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Your trusted partner for reliable, fast, and efficient air freight
          logistics across the globe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link href="/contact">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-lg px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
            asChild
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
