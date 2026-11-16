"use strict";
/* ============================================================
   KUMALO — SITE SETTINGS
   Everything you are likely to change lives in this one file.
============================================================ */

module.exports = {
  SITE_NAME: "Kumalo",
  BASE_URL: "https://www.kumalo.biz",
  DEFAULT_TITLE: "Kumalo — News, Politics, Business, Sports, Entertainment & More",
  DEFAULT_DESCRIPTION:
    "Kumalo covers everything trending in Uganda — news, politics, business, sports, entertainment, lifestyle, health and culture. Fresh from Kampala, daily.",

  SANITY: { projectId: "y0yye7lu", dataset: "production", apiVersion: "v2024-01-01" },

  // Google Analytics 4. Paste your real Measurement ID (looks like G-AB12CD34EF).
  // While it is still the placeholder, no analytics script is loaded.
  GA_ID: "G-XXXXXXXXXX",

  // AdSense loader (Auto ads + site verification). Set to "" to remove it.
  ADSENSE_CLIENT: "ca-pub-2663538820791254",

  // Bump this number whenever you edit style.css or site.js so browsers fetch the new file
  // (also change the ?v= number inside 404.html).
  ASSET_VERSION: "3",

  // Must match the category list in your Sanity post schema. Order = order in the menu.
  CATEGORIES: ["News", "Politics", "Business", "Sports", "Entertainment", "Lifestyle", "Health", "Culture", "Events"],

  // Homepage blocks under the main feed (3 newest stories from each group).
  SECTIONS: [
    { title: "Politics & Business", cats: ["Politics", "Business"] },
    { title: "Sports", cats: ["Sports"] },
    { title: "Entertainment", cats: ["Entertainment"] },
    { title: "Lifestyle & Health", cats: ["Lifestyle", "Health"] },
    { title: "Culture & Events", cats: ["Culture", "Events"] },
  ],

  PAGE_SIZE: 20, // stories per page on category pages

  // How long Vercel's edge keeps a rendered page (seconds) before refreshing it.
  CACHE: "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
};
