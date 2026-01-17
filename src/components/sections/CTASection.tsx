"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative h-[400px] sm:h-[450px] overflow-hidden flex items-center">
      {/* Background Image with Fixed Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/media/plane-in-sky.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Subtle overlay only for text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
          Ready to Optimize Your Air Cargo Logistics?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-white drop-shadow-lg px-4">
          Get in touch with our team today for a customized logistics solution
          tailored to your business needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/contact" className="w-full sm:w-auto group">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 bg-white text-primary hover:bg-white hover:scale-105 text-base sm:text-lg px-8 sm:px-10 min-h-[56px] sm:min-h-[60px] shadow-2xl hover:shadow-white/50 transition-all duration-300 font-semibold cursor-pointer"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 text-base sm:text-lg px-8 sm:px-10 bg-white/15 backdrop-blur-md text-white border-2 border-white/80 hover:bg-white/25 hover:border-white hover:scale-105 min-h-[56px] sm:min-h-[60px] transition-all duration-300 shadow-2xl font-semibold cursor-pointer group"
            asChild
          >
            <a href="tel:+31628585428">
              <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
