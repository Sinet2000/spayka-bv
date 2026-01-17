"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const operatingCountries = [
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 text-xs sm:text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Spayka Air Cargo Solutions B.V.
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Express without compromise. European logistics done right.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {/* Who We Are */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Who We Are
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Netherlands-based logistics company specializing in express and
              time-critical cargo solutions across Europe. Operating{" "}
              <span className="font-semibold text-primary">24/7</span> with{" "}
              <span className="text-primary font-semibold">
                speed without chaos
              </span>
              .
            </p>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* What We Do */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              What We Do
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
              End-to-end logistics from vans to full air cargo solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm max-w-3xl mx-auto">
              {[
                "24/7 Express Transport",
                "Air Freight (PMC)",
                "Sea Freight",
                "Warehousing",
                "Customs Clearance",
                "B2B & B2C",
              ].map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* Where We Operate */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Where We Operate
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {operatingCountries.map((country, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 max-w-md mx-auto" />

          {/* Specialized Equipment */}
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Specialized Equipment
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Rollerbed trailers optimized for PMC air cargo units — fast
              handling, reduced loading times, maximum safety
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 shadow-lg">
            <CardContent className="p-8 sm:p-10 text-center">
              <div className="inline-block mb-4">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Our Mission
                </div>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                To deliver{" "}
                <span className="text-primary font-bold">
                  reliable, high-speed cargo solutions
                </span>{" "}
                across Europe by combining smart logistics, dedicated equipment,
                and nonstop support —{" "}
                <span className="font-bold">
                  without unnecessary complexity
                </span>
                .
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="font-semibold text-secondary">
                  When minutes matter
                </span>
                <span>•</span>
                <span className="font-semibold text-primary">we move</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
