"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

export function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 border-b">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="tel:+31207771234"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            <span>+31 20 777 1234</span>
          </a>
          <a
            href="mailto:contact@spayka.nl"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            <span>contact@spayka.nl</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Schiphol, Amsterdam</span>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}
