"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

export function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-3 px-4 border-b">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <a
            href="tel:+31628585428"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity min-h-11 sm:min-h-0"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">+31 62 858 5428</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="mailto:contact@spayka.nl"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity min-h-11 sm:min-h-0"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline">contact@spayka.nl</span>
            <span className="md:hidden">Email</span>
          </a>
          <div className="hidden lg:flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Schiphol, Amsterdam</span>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}
