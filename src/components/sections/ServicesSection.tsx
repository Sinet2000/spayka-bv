"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Package, Globe, Shield, Clock, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight Services",
    description:
      "Fast and reliable air cargo transportation to destinations worldwide with competitive rates and priority handling.",
  },
  {
    icon: Package,
    title: "Customs Clearance",
    description:
      "Expert customs brokerage services ensuring smooth clearance of your shipments through all regulatory requirements.",
  },
  {
    icon: Globe,
    title: "International Logistics",
    description:
      "Comprehensive door-to-door logistics solutions with tracking and management across multiple countries.",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description:
      "Comprehensive cargo insurance coverage to protect your valuable shipments during transit.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description:
      "Time-critical shipments handled with urgency, ensuring your cargo reaches its destination on schedule.",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Management",
    description:
      "Optimize your supply chain with our advanced logistics planning and inventory management solutions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive air cargo solutions tailored to meet your logistics
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
