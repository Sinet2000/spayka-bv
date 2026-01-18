"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslations } from "next-intl";

export function MainNav() {
  const t = useTranslations("nav");
  const tTopBar = useTranslations("topBar");
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-900/5">
      <div className="container mx-auto px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative transition-all duration-300 group-hover:scale-110">
              <Image
                src="/logo/spayka_logo.svg"
                alt="Spayka Logo"
                width={380}
                height={171}
                className="h-12 w-auto sm:h-16 transition-all duration-300"
                priority
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </Link>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Call Us Button - Desktop */}
            <a href="tel:+31628585428" className="hidden sm:block">
              <Button
                variant="outline"
                className="relative overflow-hidden gap-2 border-2 border-primary/30 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/50 min-h-[40px] transition-all duration-300 font-semibold group"
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span className="hidden md:inline">{tTopBar("phone")}</span>
                <span className="md:hidden">{t("callUs")}</span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Button>
            </a>

            {/* Call Us - Mobile Only */}
            <a href="tel:+31628585428" className="sm:hidden">
              <Button
                size="sm"
                variant="outline"
                className="min-h-[40px] min-w-[40px] border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all"
              >
                <Phone className="h-4 w-4" />
                <span className="sr-only">{t("callUs")}</span>
              </Button>
            </a>

            {/* Contact Us Button - Primary CTA */}
            <Link href="/contact">
              <Button className="relative overflow-hidden gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 min-h-[40px] font-semibold group">
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageSquare className="h-4 w-4 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline relative z-10">
                  {t("contactUs")}
                </span>
                <span className="sm:hidden relative z-10">{t("contact")}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
