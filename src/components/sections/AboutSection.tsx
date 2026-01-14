"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Shipments Annually" },
  { value: "99.8%", label: "On-Time Delivery" },
];

const features = [
  "Licensed and certified air cargo operator",
  "24/7 customer support and tracking",
  "Competitive pricing and transparent quotes",
  "Experienced logistics professionals",
  "State-of-the-art cargo handling facilities",
  "Flexible scheduling and routing options",
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div>
            <Badge
              className="mb-3 sm:mb-4 text-xs sm:text-sm"
              variant="secondary"
            >
              About Spayka
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Leading Air Cargo Solutions Provider in the Netherlands
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Based at Schiphol Airport, Amsterdam, Spayka Air Cargo Solutions
              has been at the forefront of air freight logistics for over 15
              years. We specialize in providing fast, reliable, and
              cost-effective air cargo services to businesses of all sizes.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Our strategic location at Europe's third-busiest airport, combined
              with our extensive network of global partners, enables us to offer
              unparalleled service quality and competitive transit times to
              destinations worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Why Choose Spayka?
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
