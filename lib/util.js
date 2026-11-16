"use strict";
const TZ = "Africa/Kampala";

const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Only allow normal links. Blocks javascript:, data: and similar schemes.
const safeHref = (h) => {
  const v = String(h == null ? "" : h).trim();
  return /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(v) ? v : "#";
};

function formatDate(iso) {
  const d = new Date(iso);
  if (!iso || isNaN(d)) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: TZ });
}

const longDate = (d = new Date()) =>
  d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ });

const postUrl = (slug) => "/post.html?slug=" + encodeURIComponent(slug);
const catUrl = (cat, page) => "/category.html?cat=" + encodeURIComponent(cat) + (page > 1 ? "&page=" + page : "");

// JSON for a <script type="application/ld+json"> tag (escapes "<" so it can't close the tag).
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

module.exports = { esc, safeHref, formatDate, longDate, postUrl, catUrl, jsonLd };
