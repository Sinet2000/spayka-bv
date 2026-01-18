"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactInfo() {
  const t = useTranslations("contactInfo");
  const tTopBar = useTranslations("topBar");

  const contactInfo = [
    {
      icon: Phone,
      title: t("call247"),
      details: [tTopBar("phone")],
      highlight: true,
    },
    {
      icon: Mail,
      title: t("email"),
      details: [tTopBar("email")],
    },
    {
      icon: MapPin,
      title: t("visitOffice"),
      details: ["Tilly de Vriestuin 7", "1705 HL Heerhugowaard", "Netherlands"],
    },
    {
      icon: Clock,
      title: t("availability"),
      details: [t("operations247"), t("emergencySupport")],
    },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("title")}</h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card
              key={index}
              className={
                info.highlight ? "border-2 border-primary/30 bg-primary/5" : ""
              }
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      info.highlight ? "bg-primary/20" : "bg-slate-100"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        info.highlight ? "text-primary" : "text-slate-700"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className={`text-sm sm:text-base ${
                          info.highlight
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
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

      <Card className="bg-slate-900 text-white border-slate-800">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {t("urgentSupport")}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-3">
                {t("urgentText")}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-primary">
                {tTopBar("phone")}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                {t("available247")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
