"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Optimize Your Air Cargo Logistics?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get in touch with our team today for a customized logistics solution
          tailored to your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 text-lg px-8"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-lg px-8 border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="tel:+31207771234">Call Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
