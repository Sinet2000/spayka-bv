"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign, Headphones } from "lucide-react";

const coreValues = [
  {
    icon: Zap,
    title: "Speed",
    subtitle: "Time-critical means time-critical",
    description:
      "Express delivery without compromise. When every minute counts, our dedicated fleet and 24/7 operations ensure your cargo moves at the pace your business demands.",
    color: "from-primary to-orange-600",
  },
  {
    icon: DollarSign,
    title: "Price",
    subtitle: "Competitive, transparent, no surprises",
    description:
      "Fair pricing with complete transparency. No hidden fees, no unexpected costs — just honest logistics at rates that make business sense.",
    color: "from-secondary to-blue-700",
  },
  {
    icon: Headphones,
    title: "Support",
    subtitle: "Real people, real answers, 24/7",
    description:
      "Nonstop customer support from experienced logistics professionals. Direct communication, immediate responses, and solutions when you need them most.",
    color: "from-primary via-secondary to-primary",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Why Choose Us
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            We Don't Compete on Promises
          </h2>
          <div className="w-20 h-px bg-slate-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
            We compete on{" "}
            <span className="text-primary font-bold">execution</span>
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-slate-700/50 group-hover:bg-slate-700 transition-all duration-300">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary font-semibold">
                    {value.subtitle}
                  </p>
                  <div className="h-px bg-slate-700 my-3" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
            <CardContent className="p-6 sm:p-8 text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                When minutes matter,{" "}
                <span className="text-primary">we move</span>
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-sm sm:text-base text-slate-400 italic">
                  Express without compromise • Speed. Control. Reliability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
