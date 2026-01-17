"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Tilly de Vriestuin 7",
      "1705 HL",
      "Heerhugowaard",
      "Netherlands",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+31 62 858 5428", "Mon-Fri: 09:00 - 18:00"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["contact@spayka.nl", "quotes@spayka.nl"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 09:00 - 18:00"],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">
          Have questions about our services? Our team is here to help. Reach out
          to us through any of the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2">Emergency Services</h3>
          <p className="mb-2">
            For urgent shipments and 24/7 emergency support:
          </p>
          <p className="text-xl font-bold">+31 62 858 5428</p>
        </CardContent>
      </Card>
    </div>
  );
}
