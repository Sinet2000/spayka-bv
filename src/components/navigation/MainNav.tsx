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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/spayka_logo.svg"
              alt="Spayka Logo"
              width={380}
              height={171}
              className="h-12 w-auto sm:h-20"
              priority
            />
          </Link>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Call Us Button - Hidden on small mobile */}
            <a href="tel:+31628585428" className="hidden sm:block">
              <Button
                variant="outline"
                className="gap-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-600 min-h-[44px] shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">{tTopBar("phone")}</span>
                <span className="md:hidden">{t("callUs")}</span>
              </Button>
            </a>

            {/* Call Us - Mobile Only (Icon) */}
            <a href="tel:+31628585428" className="sm:hidden">
              <Button
                size="sm"
                variant="outline"
                className="min-h-[44px] min-w-[44px] border-red-500 text-red-500 hover:bg-red-50"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">{t("callUs")}</span>
              </Button>
            </a>

            {/* Contact Us Button */}
            <Link href="/contact">
              <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transition-all min-h-[44px]">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">{t("contactUs")}</span>
                <span className="sm:hidden">{t("contact")}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
