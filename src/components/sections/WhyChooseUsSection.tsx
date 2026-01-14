"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Headphones, DollarSign, Truck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Over 15 years of specialized experience in air cargo logistics with certified professionals.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service and real-time shipment tracking for complete peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description:
      "Transparent pricing with no hidden fees, offering the best value for your logistics investment.",
  },
  {
    icon: Truck,
    title: "Reliable Network",
    description:
      "Extensive global network of trusted partners ensuring seamless end-to-end delivery.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 bg-secondary text-secondary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Spayka?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We go beyond transportation to deliver exceptional logistics
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="bg-background">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
