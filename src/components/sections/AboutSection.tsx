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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <Badge className="mb-4" variant="secondary">
              About Spayka
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading Air Cargo Solutions Provider in the Netherlands
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Based at Schiphol Airport, Amsterdam, Spayka Air Cargo Solutions
              has been at the forefront of air freight logistics for over 15
              years. We specialize in providing fast, reliable, and
              cost-effective air cargo services to businesses of all sizes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our strategic location at Europe's third-busiest airport, combined
              with our extensive network of global partners, enables us to offer
              unparalleled service quality and competitive transit times to
              destinations worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Spayka?</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
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
