"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services");
  const tTopBar = useTranslations("topBar");
  return (
    <footer
      style={{ backgroundColor: "#000814" }}
      className="border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/spayka_logo.png"
                alt="Spayka Logo"
                width={60}
                height={63}
                className="h-14 w-auto"
              />
              <h3 className="font-bold text-lg text-white">{t("company")}</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {t("description")}
            </p>
            <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-semibold">
              {t("operating247")}
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm inline-block"
                >
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm inline-block"
                >
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm inline-block"
                >
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-us"
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm inline-block"
                >
                  {tNav("whyUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-red-500 transition-colors text-sm inline-block"
                >
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              {t("services")}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>{tServices("expressTransport")}</li>
              <li>{tServices("airFreight")}</li>
              <li>{tServices("seaFreight")}</li>
              <li>{tServices("warehousing")}</li>
              <li>{tServices("customsClearance")}</li>
              <li>{tServices("b2b")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">
              {t("getInTouch")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  Tilly de Vriestuin 7<br />
                  1705 HL Heerhugowaard
                  <br />
                  Netherlands
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                <a
                  href="tel:+31628585428"
                  className="text-slate-400 hover:text-red-500 transition-colors font-medium"
                >
                  {tTopBar("phone")}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-red-500 shrink-0" />
                <a
                  href="mailto:contact@spayka.nl"
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  {tTopBar("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Spayka Air Cargo Solutions B.V.
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex gap-3 text-slate-500">
              <span>KvK: 99224704</span>
              <span>•</span>
              <span>BTW: NL86887882B01</span>
            </div>
          </div>
          <div>
            <a
              href="https://dexlaris.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-500 transition-colors"
            >
              {t("developed")}{" "}
              <span className="font-semibold text-slate-400">
                {t("dexlaris")}
              </span>
              <span className="text-slate-600 ml-1 text-[10px]">
                (Dexterity × Clarity)
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
