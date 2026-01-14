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
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive air cargo solutions tailored to meet your logistics
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
