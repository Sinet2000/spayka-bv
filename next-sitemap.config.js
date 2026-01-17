/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://spayka.nl",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/server-sitemap.xml"],
  alternateRefs: [
    {
      href: "https://spayka.nl",
      hreflang: "en",
    },
    {
      href: "https://spayka.nl/nl",
      hreflang: "nl",
    },
    {
      href: "https://spayka.nl/de",
      hreflang: "de",
    },
    {
      href: "https://spayka.nl/ru",
      hreflang: "ru",
    },
    {
      href: "https://spayka.nl/fr",
      hreflang: "fr",
    },
    {
      href: "https://spayka.nl/zh",
      hreflang: "zh",
    },
    {
      href: "https://spayka.nl",
      hreflang: "x-default",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://spayka.nl/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Add language alternates to each URL
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
