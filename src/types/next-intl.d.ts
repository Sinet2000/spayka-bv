import "next-intl";

declare module "next-intl" {
  interface AppConfig {
    Locale: "nl" | "en" | "de" | "ru" | "fr" | "zh";
  }
}
