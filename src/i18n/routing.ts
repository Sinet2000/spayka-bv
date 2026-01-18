import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["nl", "en", "de", "ru", "fr", "zh"],

  // Used when no locale matches
  defaultLocale: "nl",

  // Always show locale prefix in URL
  localePrefix: "always",
});
