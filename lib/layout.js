"use strict";
/* Shared page frame: <head>, header, footer, newsletter box, and response helpers.
   Every page on the site is built through page(), so the look stays consistent. */
const C = require("./config");
const { esc, longDate, catUrl } = require("./util");

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23101418'/%3E%3Ctext x='32' y='46' font-family='Arial,sans-serif' font-size='36' font-weight='800' text-anchor='middle' fill='%23FFFFFF'%3EK%3C/text%3E%3C/svg%3E";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";

const analyticsOn = /^G-[A-Z0-9]{6,}$/.test(C.GA_ID) && !/^G-X+$/.test(C.GA_ID);
const newsletterOn = () => !!(process.env.SUPABASE_URL && process.env.SUPABASE_KEY);

function head({ title, description, path, image, type, robots, jsonld }) {
  const url = C.BASE_URL + path;
  const img = image || C.BASE_URL + "/social-default.jpg";
  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${robots ? `<meta name="robots" content="${robots}">` : ""}
<link rel="canonical" href="${esc(url)}">
<meta property="og:site_name" content="${C.SITE_NAME}">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(img)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(img)}">
<meta name="theme-color" content="#101418">
<link rel="icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="/style.css?v=${C.ASSET_VERSION}">
${jsonld || ""}
${analyticsOn ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${C.GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${C.GA_ID}');</script>` : ""}
${C.ADSENSE_CLIENT ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${C.ADSENSE_CLIENT}" crossorigin="anonymous"></script>` : ""}
<script defer src="/_vercel/insights/script.js"></script>`;
}

function header(active) {
  const link = (href, label, key) => `<a href="${href}"${active === key ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  return `<header class="site-header">
  <div class="wrap bar">
    <a class="logo" href="/" aria-label="Kumalo home">Kumalo<span>.</span></a>
    <span class="date">${esc(longDate())}</span>
    ${newsletterOn() ? '<a class="btn" href="/#newsletter">Subscribe</a>' : ""}
  </div>
  <div class="navbar"><nav class="wrap nav" aria-label="Sections">
    ${link("/", "Home", "home")}${C.CATEGORIES.map((c) => link(catUrl(c), c, c)).join("")}
  </nav></div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="logo" href="/">Kumalo<span>.</span></a>
        <p>Independent coverage of everything trending in Uganda — news, politics, business, sports, entertainment, lifestyle, health and culture. Written in Kampala, read everywhere.</p>
      </div>
      <nav aria-label="Topics"><h4>Topics</h4><ul>${C.CATEGORIES.map((c) => `<li><a href="${catUrl(c)}">${esc(c)}</a></li>`).join("")}</ul></nav>
      <nav aria-label="Company"><h4>Kumalo</h4><ul>
        <li><a href="/about.html">About</a></li>
        <li><a href="/about.html#contact">Contact</a></li>
        <li><a href="/privacy.html">Privacy</a></li>
        <li><a href="mailto:ads@kumalo.biz">Advertise with us</a></li>
      </ul></nav>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} Kumalo · Made in Kampala</span></div>
  </div>
</footer>`;
}

// Only appears when the signup backend is configured (see README), so visitors never see a dead form.
function newsletter() {
  if (!newsletterOn()) return "";
  return `<section class="news-card" id="newsletter" aria-labelledby="nl-h">
  <h2 id="nl-h">Get Kumalo in your inbox</h2>
  <p>The top Ugandan stories, delivered to your email.</p>
  <form data-newsletter novalidate>
    <label class="sr" for="nl-email">Email address</label>
    <input id="nl-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required>
    <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button class="btn" type="submit">Subscribe</button>
    <p class="form-msg" role="status" aria-live="polite"></p>
  </form>
</section>`;
}

function page({ title, description = C.DEFAULT_DESCRIPTION, path = "/", image, type = "website", robots, jsonld, active = "", before = "", main }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head({ title, description, path, image, type, robots, jsonld })}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(active)}
${before}
<main id="main">
${main}
</main>
${footer()}
<script defer src="/site.js?v=${C.ASSET_VERSION}"></script>
</body>
</html>`;
}

function send(res, html, { status = 200, cache = C.CACHE } = {}) {
  res.status(status);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", cache);
  res.send(html);
}

const notice = (title, message) =>
  `<div class="wrap"><div class="empty"><h1>${esc(title)}</h1><p>${esc(message)}</p><a class="btn" href="/">Back to the homepage</a></div></div>`;

function notFound(res, what = "page") {
  send(res, page({ title: "Not found — Kumalo", robots: "noindex", main: notice(`We couldn't find that ${what}`, "It may have moved or been removed. Try the menu above, or head back to the homepage.") }), {
    status: 404,
    cache: "public, max-age=0, s-maxage=60",
  });
}

// Used when Sanity can't be reached. Never cached, so the next visitor gets a fresh try.
function unavailable(res) {
  send(res, page({ title: "Temporarily unavailable — Kumalo", robots: "noindex", main: notice("Stories are taking a moment to load", "Please refresh in a minute — we're on it.") }), {
    status: 503,
    cache: "no-store",
  });
}

module.exports = { page, send, notFound, unavailable, newsletter };
