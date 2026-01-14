"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Optimize Your Air Cargo Logistics?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
          Get in touch with our team today for a customized logistics solution
          tailored to your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 bg-white text-primary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 min-h-[56px] shadow-lg hover:shadow-xl transition-all"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            className="w-full sm:w-auto gap-2 text-base sm:text-lg px-6 sm:px-8 bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30 hover:text-white min-h-[56px] transition-all shadow-lg"
            asChild
          >
            <a href="tel:+31207771234">Call Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
