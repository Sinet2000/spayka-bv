"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#000814" }}
      className="border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              Spayka Air Cargo Solutions B.V.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Express and time-critical cargo solutions across Europe. Operating
              24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span className="text-slate-400">
                  Tilly de Vriestuin 7, 1705 HL
                  <br />
                  Heerhugowaard, Netherlands
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+31628585428"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  +31 62 858 5428
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:contact@spayka.nl"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  contact@spayka.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Spayka Air Cargo Solutions B.V.
            </p>
            <span className="hidden md:inline text-slate-700">•</span>
            <div className="flex gap-3 text-xs">
              <span>KvK: 99224704</span>
              <span>•</span>
              <span>BTW: NL86887882B01</span>
            </div>
          </div>
          <div className="text-xs">
            <a
              href="https://dexlaris.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Developed by <span className="font-semibold">Dexlaris</span>
              <span className="text-slate-600 ml-1">(Dexterity × Clarity)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
