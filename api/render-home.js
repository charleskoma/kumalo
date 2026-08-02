const TEMPLATE = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Kumalo \u2014 News, Politics, Business, Sports, Entertainment & More</title>\n<meta name=\"description\" content=\"Kumalo covers everything trending in Uganda \u2014 news, politics, business, sports, entertainment, lifestyle, health and culture. Fresh from Kampala, daily.\">\n<meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"Kumalo \u2014 News, Politics, Business, Sports, Entertainment & More\">\n<meta property=\"og:description\" content=\"Everything trending in Uganda \u2014 news, politics, business, sports, entertainment, lifestyle, health and culture.\">\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23101418'/%3E%3Ctext x='32' y='46' font-family='Arial,sans-serif' font-size='36' font-weight='800' text-anchor='middle' fill='%23FFFFFF'%3EK%3C/text%3E%3C/svg%3E\">\n\n<!-- ============================================================\n     GOOGLE ANALYTICS (GA4) \u2014 STEP 1 of 1\n     Free at analytics.google.com \u2192 Admin \u2192 Data Streams \u2192 Web.\n     Replace G-XXXXXXXXXX (both places below) with your real\n     Measurement ID, then this page starts reporting immediately.\n============================================================ -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-XXXXXXXXXX');\n</script>\n\n<!-- ============================================================\n     VERCEL WEB ANALYTICS \u2014 free, built into your Vercel project.\n     Click \"Enable\" once under your project's Analytics tab in\n     the Vercel dashboard, then this script starts working.\n============================================================ -->\n<script>\n  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n</script>\n<script defer src=\"/_vercel/insights/script.js\"></script>\n\n<!-- ============================================================\n     GOOGLE ADSENSE \u2014 STEP 1 of 2\n     After approval: paste your publisher ID below AND in\n     AD_CONFIG.adsenseClient (bottom of this file), then\n     uncomment this tag.\n============================================================ -->\n<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2663538820791254\" crossorigin=\"anonymous\"></script>\n\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\">\n\n<style>\n/* ============ TOKENS ============ */\n:root{\n  --bg:#FFFFFF;\n  --surface:#F6F7F8;\n  --ink:#101418;\n  --muted:#5F6672;\n  --line:#E8EAED;\n  --accent:#E03E2D;\n  --max:1200px;\n  --r-sm:10px; --r-md:14px; --r-lg:18px;\n}\n*{margin:0;padding:0;box-sizing:border-box}\nhtml{scroll-behavior:smooth}\nbody{background:var(--bg);color:var(--ink);font-family:'Inter',system-ui,sans-serif;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}\nimg{max-width:100%;display:block}\na{color:inherit;text-decoration:none}\nbutton{font:inherit;cursor:pointer}\n:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}\n.wrap{max-width:var(--max);margin:0 auto;padding:0 24px}\n.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.skip{position:absolute;left:-9999px;top:0;background:var(--ink);color:#fff;padding:8px 16px;border-radius:0 0 10px 0;font-size:14px;font-weight:600;z-index:200}\n.skip:focus{left:0}\n@media (prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;animation:none!important}}\n\n.kicker{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}\n.meta{font-size:13px;color:var(--muted)}\n.meta b{color:var(--ink);font-weight:600}\n\n/* ============ HEADER ============ */\nheader.site{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.88);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}\nheader.site .wrap{display:flex;align-items:center;gap:24px;height:64px}\n.logo{font-size:22px;font-weight:800;letter-spacing:-.03em}\n.logo span{color:var(--accent)}\nnav.main{display:flex;gap:2px;margin-left:auto}\nnav.main a{font-size:14px;font-weight:500;color:var(--muted);padding:8px 11px;border-radius:8px;transition:color .15s,background .15s;white-space:nowrap}\nnav.main a:hover{color:var(--ink);background:var(--surface)}\nnav.main a[aria-current]{color:var(--ink);font-weight:600}\n.subscribe-btn{background:var(--ink);color:#fff;border:none;font-size:13.5px;font-weight:600;padding:9px 18px;border-radius:999px;transition:opacity .15s;white-space:nowrap}\n.subscribe-btn:hover{opacity:.85}\n.menu-btn{display:none;background:none;border:1px solid var(--line);border-radius:10px;width:40px;height:38px;font-size:17px;margin-left:auto}\nnav.main.open{display:flex;position:absolute;top:64px;left:0;right:0;background:var(--bg);flex-direction:column;gap:2px;padding:12px 24px 16px;border-bottom:1px solid var(--line);box-shadow:0 12px 24px rgba(16,20,24,.06)}\nnav.main.open a{padding:12px}\n\n/* ============ TRENDING TICKER (rolling) ============ */\n.trending{border-bottom:1px solid var(--line);background:var(--bg)}\n.trending .wrap{display:flex;align-items:center;gap:16px;height:44px}\n.trending .lbl{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);white-space:nowrap;flex:none;display:flex;align-items:center;gap:6px}\n.trending .lbl::before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse 2s ease-in-out infinite}\n@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}\n.ticker{flex:1;min-width:0;overflow:hidden;position:relative}\n.ticker::before,.ticker::after{content:\"\";position:absolute;top:0;bottom:0;width:28px;z-index:1;pointer-events:none}\n.ticker::before{left:0;background:linear-gradient(to right,var(--bg),transparent)}\n.ticker::after{right:0;background:linear-gradient(to left,var(--bg),transparent)}\n.ticker-track{display:flex;width:max-content;animation:ticker-roll var(--dur,40s) linear infinite}\n.ticker:hover .ticker-track{animation-play-state:paused}\n.ticker-group{display:flex;gap:36px;align-items:center;white-space:nowrap;padding-right:36px}\n.trending a{font-size:13.5px;font-weight:500;color:var(--muted);transition:color .15s}\n.trending a:hover{color:var(--ink)}\n.trending .sep{color:#D3D7DC;flex:none}\n@keyframes ticker-roll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n@media (prefers-reduced-motion:reduce){\n  .ticker-track{animation:none}\n  .ticker{overflow-x:auto;scrollbar-width:none}\n  .ticker::-webkit-scrollbar{display:none}\n}\n\n/* ============ AD SLOTS ============ */\n.ad-slot{margin:28px auto;text-align:center}\n.ad-slot .ad-label{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#9AA1AB;margin-bottom:8px}\n.ad-frame{background:var(--surface);border:1px solid var(--line);border-radius:var(--r-md);min-height:96px;display:flex;align-items:center;justify-content:center;overflow:hidden}\n.ad-frame.mpu{min-height:250px;max-width:336px;margin:0 auto}\n.house-ad{display:block;padding:26px 22px;width:100%}\n.house-ad h4{font-size:16px;font-weight:700;letter-spacing:-.01em;margin-bottom:4px}\n.house-ad p{font-size:13.5px;color:var(--muted);max-width:440px;margin:0 auto}\n.house-ad .go{color:var(--accent);font-weight:600;font-size:13.5px}\n.custom-ad{display:flex;align-items:stretch;width:100%;text-align:left;background:var(--bg)}\n.custom-ad .art{width:150px;flex:none;background-size:cover;background-position:center;border-radius:var(--r-sm);margin:12px 0 12px 12px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px}\n.custom-ad .txt{padding:16px 18px;flex:1;display:flex;flex-direction:column;justify-content:center}\n.custom-ad .txt h4{font-size:15.5px;font-weight:700;margin-bottom:3px}\n.custom-ad .txt p{font-size:13px;color:var(--muted);margin-bottom:8px}\n.custom-ad .cta{align-self:flex-start;font-size:12.5px;font-weight:600;color:var(--accent)}\n.custom-ad.stack{flex-direction:column;max-width:336px;margin:0 auto}\n.custom-ad.stack .art{width:auto;height:150px;margin:12px 12px 0}\n\n/* ============ HERO ============ */\n.hero{padding:36px 0 8px}\n.hero-grid{display:grid;grid-template-columns:7fr 5fr;gap:40px}\n.thumb{position:relative;overflow:hidden;border-radius:var(--r-lg);background:var(--surface);aspect-ratio:16/9}\n.thumb img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}\na:hover .thumb img{transform:scale(1.03)}\n.lead .kicker{margin:16px 0 8px}\n.lead h2{font-size:clamp(26px,3.2vw,38px);font-weight:800;letter-spacing:-.025em;line-height:1.15;transition:color .15s}\n.lead a:hover h2{color:var(--accent)}\n.lead .dek{font-size:16.5px;color:var(--muted);margin:10px 0 12px;line-height:1.55}\n.hero-side{display:flex;flex-direction:column}\n.hero-side .item{display:grid;grid-template-columns:1fr 132px;gap:18px;padding:18px 0;border-bottom:1px solid var(--line)}\n.hero-side .item:first-child{padding-top:4px}\n.hero-side .item:last-child{border-bottom:none}\n.hero-side .thumb{aspect-ratio:4/3;border-radius:var(--r-sm)}\n.hero-side h3{font-size:17px;font-weight:700;letter-spacing:-.015em;line-height:1.35;margin:4px 0 8px;transition:color .15s}\n.hero-side a:hover h3{color:var(--accent)}\n\n/* ============ SECTION HEAD ============ */\n.section-head{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:12px;margin:44px 0 4px}\n.section-head h2{font-size:20px;font-weight:800;letter-spacing:-.02em}\n.section-head .more{font-size:13.5px;font-weight:600;color:var(--muted);transition:color .15s}\n.section-head .more:hover{color:var(--accent)}\n\n/* ============ LATEST (list rows) + SIDEBAR ============ */\n.layout{display:grid;grid-template-columns:1fr 320px;gap:48px;align-items:start}\n.layout.single-col{grid-template-columns:1fr;max-width:480px;margin:0 auto}\n.feed .row{display:grid;grid-template-columns:1fr 200px;gap:24px;padding:24px 0;border-bottom:1px solid var(--line)}\n.feed .row:last-of-type{border-bottom:none}\n.feed .thumb{aspect-ratio:16/10;border-radius:var(--r-sm)}\n.feed h3{font-size:19px;font-weight:700;letter-spacing:-.015em;line-height:1.35;margin:4px 0 6px;transition:color .15s}\n.feed a:hover h3{color:var(--accent)}\n.feed .dek{font-size:14.5px;color:var(--muted);margin-bottom:8px;line-height:1.55}\n.feed .ad-row{padding:8px 0;border-bottom:1px solid var(--line)}\n.feed .ad-row .ad-slot{margin:16px auto}\n\naside.rail{position:sticky;top:88px;display:flex;flex-direction:column;gap:32px}\n.rail h3.rail-title{font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);padding-bottom:10px;border-bottom:1px solid var(--line);margin-bottom:4px}\n.trend-list{list-style:none}\n.trend-list li{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--line)}\n.trend-list li:last-child{border-bottom:none}\n.trend-list .n{font-size:20px;font-weight:800;color:#C9CDD3;line-height:1.3;flex:none;width:22px}\n.trend-list h4{font-size:14.5px;font-weight:600;line-height:1.4;transition:color .15s}\n.trend-list a:hover h4{color:var(--accent)}\n.trend-list span{font-size:12px;color:var(--muted)}\n\n.newsletter{background:var(--surface);border-radius:var(--r-lg);padding:22px}\n.newsletter h3{font-size:17px;font-weight:800;letter-spacing:-.02em;margin-bottom:4px}\n.newsletter p{font-size:13.5px;color:var(--muted);margin-bottom:14px}\n.newsletter input{width:100%;border:1px solid var(--line);border-radius:var(--r-sm);padding:11px 14px;font:inherit;font-size:14px;background:var(--bg)}\n.newsletter input:focus{outline:none;border-color:var(--ink)}\n.newsletter button{width:100%;margin-top:10px;background:var(--ink);color:#fff;border:none;border-radius:var(--r-sm);padding:11px;font-size:14px;font-weight:600;transition:opacity .15s}\n.newsletter button:hover{opacity:.85}\n.newsletter .ok{display:none;font-size:13.5px;font-weight:600;color:#1E7A46;margin-top:10px}\n\n/* ============ SECTION BLOCKS (Sports / Politics / etc.) ============ */\n.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;padding:24px 0 4px}\n.card .thumb{aspect-ratio:16/10;border-radius:var(--r-sm);margin-bottom:12px}\n.card h3{font-size:16.5px;font-weight:700;letter-spacing:-.01em;line-height:1.4;margin:6px 0;transition:color .15s}\n.card a:hover h3{color:var(--accent)}\n\n/* ============ FOOTER ============ */\nfooter.site{border-top:1px solid var(--line);margin-top:56px;padding:40px 0 28px}\n.foot-top{display:flex;align-items:flex-start;justify-content:space-between;gap:32px;flex-wrap:wrap;padding-bottom:28px}\n.foot-top p{font-size:13.5px;color:var(--muted);max-width:340px;margin-top:8px}\n.foot-links{display:flex;gap:4px;flex-wrap:wrap;max-width:560px;justify-content:flex-end}\n.foot-links a{font-size:13.5px;font-weight:500;color:var(--muted);padding:6px 12px;border-radius:8px;transition:color .15s,background .15s}\n.foot-links a:hover{color:var(--ink);background:var(--surface)}\n.foot-bottom{border-top:1px solid var(--line);padding-top:20px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12.5px;color:var(--muted)}\n.foot-bottom a{font-weight:500}\n.foot-bottom a:hover{color:var(--accent)}\n\n/* ============ RESPONSIVE ============ */\n@media (max-width:1000px){\n  .layout{grid-template-columns:1fr}\n  aside.rail{position:static}\n  .hero-grid{grid-template-columns:1fr;gap:8px}\n  .hero-side .item:first-child{padding-top:18px}\n  .card-grid{grid-template-columns:repeat(2,1fr)}\n}\n@media (max-width:920px){\n  nav.main{display:none}\n  .menu-btn{display:block}\n}\n@media (max-width:720px){\n  .subscribe-btn{display:none}\n  .feed .row{grid-template-columns:1fr 120px;gap:16px}\n  .feed .thumb{aspect-ratio:1/1}\n  .feed .dek{display:none}\n  .hero-side .item{grid-template-columns:1fr 108px}\n  .card-grid{grid-template-columns:1fr;gap:22px}\n  .foot-links{justify-content:flex-start}\n  .wrap{padding:0 18px}\n}\n</style>\n</head>\n<body>\n\n<a class=\"skip\" href=\"#main\">Skip to content</a>\n\n<header class=\"site\">\n  <div class=\"wrap\">\n    <a class=\"logo\" href=\"index.html\" aria-label=\"Kumalo home\">Kumalo<span>.</span></a>\n    <nav class=\"main\" id=\"mainNav\" aria-label=\"Main\">\n      <a href=\"index.html\" aria-current=\"page\">Home</a>\n      <a href=\"category.html?cat=Politics\">Politics</a>\n      <a href=\"category.html?cat=Business\">Business</a>\n      <a href=\"category.html?cat=Sports\">Sports</a>\n      <a href=\"category.html?cat=Entertainment\">Entertainment</a>\n      <a href=\"category.html?cat=Lifestyle\">Lifestyle</a>\n      <a href=\"category.html?cat=Health\">Health</a>\n    </nav>\n    <button class=\"menu-btn\" aria-label=\"Open menu\" onclick=\"document.getElementById('mainNav').classList.toggle('open')\">\u2630</button>\n    <button class=\"subscribe-btn\" onclick=\"document.getElementById('nlEmail').focus();document.getElementById('nlEmail').scrollIntoView({block:'center'})\">Subscribe</button>\n  </div>\n</header>\n\n<div class=\"trending\" aria-label=\"Trending stories\">\n  <div class=\"wrap\">\n    <span class=\"lbl\">Trending</span>\n    <div class=\"ticker\">\n      <div class=\"ticker-track\" id=\"tickerTrack\">\n        <div class=\"ticker-group\" id=\"tickerGroupInner\">\n          <span class=\"sep\">Loading trending stories\u2026</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<main class=\"wrap\" id=\"main\">\n  <h1 class=\"sr-only\">Kumalo \u2014 Ugandan news: politics, business, sports, entertainment, lifestyle, health and culture</h1>\n\n  <!-- AD: leaderboard -->\n  <div class=\"ad-slot\" data-ad-slot=\"leaderboard\">\n    <div class=\"ad-label\">Advertisement</div>\n    <div class=\"ad-frame\"></div>\n  </div>\n\n  <!-- ============ HERO (populated from Sanity) ============ -->\n  <section class=\"hero\" aria-label=\"Top stories\">\n    <div class=\"hero-grid\">\n      <article class=\"lead\" id=\"heroLead\">\n        <p class=\"meta\" style=\"padding:40px 0\">Loading latest stories\u2026</p>\n      </article>\n      <div class=\"hero-side\" id=\"heroSide\"></div>\n    </div>\n  </section>\n\n  <!-- ============ LATEST (populated from Sanity) + SIDEBAR ============ -->\n  <div class=\"section-head\" id=\"latestHeading\" style=\"display:none\">\n    <h2>Latest</h2>\n    <a class=\"more\" href=\"index.html#latestHeading\">View all</a>\n  </div>\n\n  <div class=\"layout\" id=\"latestLayout\">\n    <section class=\"feed\" aria-label=\"Latest stories\" id=\"feedSection\" style=\"display:none\">\n      <div id=\"feedRowsBeforeAd\"></div>\n      <div class=\"ad-row\" id=\"feedAdRow\" style=\"display:none\">\n        <div class=\"ad-slot\" data-ad-slot=\"infeed\">\n          <div class=\"ad-label\">Sponsored</div>\n          <div class=\"ad-frame\" style=\"min-height:110px\"></div>\n        </div>\n      </div>\n      <div id=\"feedRowsAfterAd\"></div>\n    </section>\n\n    <aside class=\"rail\">\n      <div>\n        <h3 class=\"rail-title\">More Stories</h3>\n        <ol class=\"trend-list\" id=\"sidebarList\"></ol>\n      </div>\n\n      <!-- AD: sidebar MPU -->\n      <div class=\"ad-slot\" data-ad-slot=\"sidebar\" style=\"margin:0\">\n        <div class=\"ad-label\">Advertisement</div>\n        <div class=\"ad-frame mpu\"></div>\n      </div>\n\n      <div class=\"newsletter\">\n        <h3>The Kumalo Brief</h3>\n        <p>One email a day: the stories everyone will be talking about \u2014 news, sports, business and more.</p>\n        <input type=\"email\" id=\"nlEmail\" placeholder=\"you@example.com\" aria-label=\"Email address\" onkeydown=\"if(event.key==='Enter')joinNewsletter()\">\n        <button onclick=\"joinNewsletter()\">Subscribe \u2014 it's free</button>\n        <div class=\"ok\" id=\"nlOk\" role=\"status\">You're in. See you tomorrow morning.</div>\n      </div>\n    </aside>\n  </div>\n\n  <!-- ============ SECTION BLOCKS (populated from Sanity, hidden if empty) ============ -->\n\n  <div id=\"entertainmentSection\" style=\"display:none\">\n    <div class=\"section-head\">\n      <h2>Entertainment</h2>\n      <a class=\"more\" href=\"category.html?cat=Entertainment\">More entertainment</a>\n    </div>\n    <div class=\"card-grid\" id=\"entertainmentCards\"></div>\n  </div>\n\n  <div id=\"sportsSection\" style=\"display:none\">\n    <div class=\"section-head\">\n      <h2>Sports</h2>\n      <a class=\"more\" href=\"category.html?cat=Sports\">More sports</a>\n    </div>\n    <div class=\"card-grid\" id=\"sportsCards\"></div>\n  </div>\n\n  <!-- AD: mid-page billboard -->\n  <div class=\"ad-slot\" data-ad-slot=\"midpage\">\n    <div class=\"ad-label\">Advertisement</div>\n    <div class=\"ad-frame\"></div>\n  </div>\n\n  <div id=\"politicsBusinessSection\" style=\"display:none\">\n    <div class=\"section-head\">\n      <h2>Politics &amp; Business</h2>\n      <a class=\"more\" href=\"category.html?cat=Politics\">More politics &amp; business</a>\n    </div>\n    <div class=\"card-grid\" id=\"politicsBusinessCards\"></div>\n  </div>\n\n  <div id=\"lifestyleHealthSection\" style=\"display:none\">\n    <div class=\"section-head\">\n      <h2>Lifestyle &amp; Health</h2>\n      <a class=\"more\" href=\"category.html?cat=Lifestyle\">More lifestyle &amp; health</a>\n    </div>\n    <div class=\"card-grid\" id=\"lifestyleHealthCards\"></div>\n  </div>\n\n  <!-- AD: footer billboard -->\n  <div class=\"ad-slot\" data-ad-slot=\"footer\">\n    <div class=\"ad-label\">Advertisement</div>\n    <div class=\"ad-frame\"></div>\n  </div>\n\n</main>\n\n<footer class=\"site\">\n  <div class=\"wrap\">\n    <div class=\"foot-top\">\n      <div>\n        <a class=\"logo\" href=\"index.html\">Kumalo<span>.</span></a>\n        <p>Independent coverage of everything trending in Uganda \u2014 news, politics, business, sports, entertainment, lifestyle, health and culture. Written in Kampala, read everywhere.</p>\n      </div>\n      <nav class=\"foot-links\" aria-label=\"Footer\">\n        <a href=\"category.html?cat=Politics\">Politics</a>\n        <a href=\"category.html?cat=Business\">Business</a>\n        <a href=\"category.html?cat=Sports\">Sports</a>\n        <a href=\"category.html?cat=Entertainment\">Entertainment</a>\n        <a href=\"category.html?cat=Lifestyle\">Lifestyle</a>\n        <a href=\"category.html?cat=Health\">Health</a>\n        <a href=\"category.html?cat=Culture\">Culture</a>\n        <a href=\"category.html?cat=Events\">Events</a>\n        <a href=\"about.html\">About</a>\n        <a href=\"about.html#contact\">Contact</a>\n        <a href=\"privacy.html\">Privacy</a>\n      </nav>\n    </div>\n    <div class=\"foot-bottom\">\n      <span>\u00a9 2026 Kumalo \u00b7 Made in Kampala</span>\n      <a href=\"mailto:ads@kumalo.biz\">Advertise with us \u2192 ads@kumalo.biz</a>\n    </div>\n  </div>\n</footer>\n\n<script>\n/* ============================================================\n   SANITY CONNECTION\n   Public dataset \u2014 no token needed to read published posts.\n============================================================ */\nconst SANITY_PROJECT_ID = \"y0yye7lu\";\nconst SANITY_DATASET = \"production\";\nconst SANITY_API_VERSION = \"v2024-01-01\";\n\nfunction sanityQueryUrl(query, params){\n  const base = \"https://\" + SANITY_PROJECT_ID + \".api.sanity.io/\" + SANITY_API_VERSION + \"/data/query/\" + SANITY_DATASET;\n  const usp = new URLSearchParams();\n  usp.set(\"query\", query);\n  if (params){\n    Object.keys(params).forEach(function(k){ usp.set(\"$\" + k, JSON.stringify(params[k])); });\n  }\n  return base + \"?\" + usp.toString();\n}\n\nasync function sanityFetch(query, params){\n  const res = await fetch(sanityQueryUrl(query, params));\n  if (!res.ok) throw new Error(\"Sanity request failed: \" + res.status);\n  const json = await res.json();\n  return json.result;\n}\n\nfunction urlForImage(source, width){\n  if (!source || !source.asset || !source.asset._ref) return \"\";\n  const parts = source.asset._ref.split(\"-\"); // [\"image\", id, \"WxH\", format]\n  const id = parts[1], dims = parts[2], format = parts[3];\n  let url = \"https://cdn.sanity.io/images/\" + SANITY_PROJECT_ID + \"/\" + SANITY_DATASET + \"/\" + id + \"-\" + dims + \".\" + format;\n  if (width) url += \"?w=\" + width + \"&auto=format\";\n  return url;\n}\n\nfunction escapeHTML(str){\n  const div = document.createElement(\"div\");\n  div.textContent = str == null ? \"\" : String(str);\n  return div.innerHTML;\n}\n\nfunction formatDate(iso){\n  if (!iso) return \"\";\n  const d = new Date(iso);\n  if (isNaN(d.getTime())) return \"\";\n  return d.toLocaleDateString(\"en-US\", {month: \"short\", day: \"numeric\", year: \"numeric\"});\n}\n\nfunction postUrl(slug){\n  return \"post.html?slug=\" + encodeURIComponent(slug);\n}\n\nfunction metaLine(post){\n  return formatDate(post.publishedAt) + (post.readTime ? \" \u00b7 \" + post.readTime + \" min\" : \"\");\n}\n\n/* ============ CARD RENDERERS ============ */\nfunction renderHeroLead(post){\n  const img = urlForImage(post.coverImage, 1200);\n  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);\n  return '<a href=\"' + postUrl(post.slug) + '\">' +\n    '<div class=\"thumb\"><img src=\"' + img + '\" width=\"1200\" height=\"675\" alt=\"' + alt + '\" loading=\"eager\"></div>' +\n    '<span class=\"kicker\">' + escapeHTML(post.category) + '</span>' +\n    '<h2>' + escapeHTML(post.title) + '</h2>' +\n    '<p class=\"dek\">' + escapeHTML(post.excerpt) + '</p>' +\n    '<div class=\"meta\"><b>' + escapeHTML(post.author || \"Kumalo\") + '</b> \u00b7 ' + metaLine(post) + '</div>' +\n    '</a>';\n}\n\nfunction renderHeroSideItem(post){\n  const img = urlForImage(post.coverImage, 400);\n  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);\n  return '<article class=\"item\"><a href=\"' + postUrl(post.slug) + '\" style=\"display:contents\">' +\n    '<div><span class=\"kicker\">' + escapeHTML(post.category) + '</span>' +\n    '<h3>' + escapeHTML(post.title) + '</h3>' +\n    '<div class=\"meta\">' + metaLine(post) + '</div></div>' +\n    '<div class=\"thumb\"><img src=\"' + img + '\" width=\"400\" height=\"300\" alt=\"' + alt + '\" loading=\"lazy\"></div>' +\n    '</a></article>';\n}\n\nfunction renderFeedRow(post){\n  const img = urlForImage(post.coverImage, 500);\n  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);\n  return '<article class=\"row\"><a href=\"' + postUrl(post.slug) + '\" style=\"display:contents\">' +\n    '<div><span class=\"kicker\">' + escapeHTML(post.category) + '</span>' +\n    '<h3>' + escapeHTML(post.title) + '</h3>' +\n    '<p class=\"dek\">' + escapeHTML(post.excerpt) + '</p>' +\n    '<div class=\"meta\">' + metaLine(post) + '</div></div>' +\n    '<div class=\"thumb\"><img src=\"' + img + '\" width=\"500\" height=\"320\" alt=\"' + alt + '\" loading=\"lazy\"></div>' +\n    '</a></article>';\n}\n\nfunction renderSectionCard(post){\n  const img = urlForImage(post.coverImage, 500);\n  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);\n  return '<article class=\"card\"><a href=\"' + postUrl(post.slug) + '\">' +\n    '<div class=\"thumb\"><img src=\"' + img + '\" width=\"500\" height=\"320\" alt=\"' + alt + '\" loading=\"lazy\"></div>' +\n    '<span class=\"kicker\">' + escapeHTML(post.category) + '</span>' +\n    '<h3>' + escapeHTML(post.title) + '</h3>' +\n    '<div class=\"meta\">' + metaLine(post) + '</div>' +\n    '</a></article>';\n}\n\nfunction renderSidebarItem(post, rank){\n  return '<li><span class=\"n\">' + rank + '</span><a href=\"' + postUrl(post.slug) + '\">' +\n    '<h4>' + escapeHTML(post.title) + '</h4><span>' + escapeHTML(post.category) +\n    (post.readTime ? \" \u00b7 \" + post.readTime + \" min\" : \"\") + '</span></a></li>';\n}\n\nfunction renderTickerItem(post){\n  return '<a href=\"' + postUrl(post.slug) + '\">' + escapeHTML(post.title) + '</a><span class=\"sep\">\u00b7</span>';\n}\n\n/* ============ SECTION HELPERS ============ */\nfunction showSection(id, gridId, items){\n  const section = document.getElementById(id);\n  if (!items.length){ section.style.display = \"none\"; return; }\n  document.getElementById(gridId).innerHTML = items.map(renderSectionCard).join(\"\");\n  section.style.display = \"\";\n}\n\nfunction setupTickerLoop(){\n  const track = document.getElementById(\"tickerTrack\");\n  if (!track) return;\n  const extraGroups = track.querySelectorAll(\".ticker-group:not(#tickerGroupInner)\");\n  extraGroups.forEach(function(g){ g.remove(); });\n  const group = document.getElementById(\"tickerGroupInner\");\n  if (!group) return;\n  const reduced = window.matchMedia && window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n  if (reduced) return;\n  const clone = group.cloneNode(true);\n  clone.removeAttribute(\"id\");\n  clone.setAttribute(\"aria-hidden\", \"true\");\n  track.appendChild(clone);\n  const setDur = function(){\n    const w = group.scrollWidth || 0;\n    if (w > 0) track.style.setProperty(\"--dur\", Math.max(18, Math.round(w / 60)) + \"s\");\n  };\n  if (window.requestAnimationFrame) requestAnimationFrame(setDur); else setTimeout(setDur, 50);\n}\n\n/* ============ MAIN LOAD ============ */\nconst HOME_QUERY = '*[_type == \"post\" && defined(slug.current)] | order(publishedAt desc){' +\n  'title, \"slug\": slug.current, category, excerpt, coverImage, author, publishedAt, readTime}';\n\nasync function loadHomepage(){\n  let posts;\n  try {\n    posts = await sanityFetch(HOME_QUERY);\n  } catch (e) {\n    console.error(e);\n    document.getElementById(\"heroLead\").innerHTML =\n      '<p class=\"meta\" style=\"padding:40px 0\">Unable to load posts right now \u2014 please refresh.</p>';\n    return;\n  }\n\n  if (!posts || posts.length === 0){\n    document.getElementById(\"heroLead\").innerHTML =\n      '<p class=\"meta\" style=\"padding:40px 0\">No posts published yet \u2014 check back soon.</p>';\n    document.getElementById(\"heroSide\").style.display = \"none\";\n    document.getElementById(\"latestHeading\").style.display = \"none\";\n    document.getElementById(\"feedSection\").style.display = \"none\";\n    document.getElementById(\"latestLayout\").classList.add(\"single-col\");\n    document.getElementById(\"sidebarList\").innerHTML = \"\";\n    [\"entertainmentSection\",\"sportsSection\",\"politicsBusinessSection\",\"lifestyleHealthSection\"].forEach(function(id){\n      document.getElementById(id).style.display = \"none\";\n    });\n    document.getElementById(\"tickerGroupInner\").innerHTML = '<span class=\"sep\">No stories yet</span>';\n    setupTickerLoop();\n    return;\n  }\n\n  // Hero: most recent post as lead, next 2 as side items\n  document.getElementById(\"heroLead\").innerHTML = renderHeroLead(posts[0]);\n  const sideItems = posts.slice(1, 3);\n  const heroSideEl = document.getElementById(\"heroSide\");\n  if (sideItems.length){\n    heroSideEl.innerHTML = sideItems.map(renderHeroSideItem).join(\"\");\n    heroSideEl.style.display = \"\";\n  } else {\n    heroSideEl.style.display = \"none\";\n  }\n\n  // Latest feed: everything after what the hero used. Heading + feed rows\n  // hide together when there's nothing extra, but the sidebar (More Stories,\n  // ad, newsletter) always stays visible regardless of post count.\n  const feedPosts = posts.slice(3);\n  const latestHeading = document.getElementById(\"latestHeading\");\n  const feedSection = document.getElementById(\"feedSection\");\n  const latestLayout = document.getElementById(\"latestLayout\");\n  if (feedPosts.length === 0){\n    latestHeading.style.display = \"none\";\n    feedSection.style.display = \"none\";\n    latestLayout.classList.add(\"single-col\");\n  } else {\n    latestHeading.style.display = \"\";\n    feedSection.style.display = \"\";\n    latestLayout.classList.remove(\"single-col\");\n    const before = feedPosts.slice(0, 3), after = feedPosts.slice(3);\n    document.getElementById(\"feedRowsBeforeAd\").innerHTML = before.map(renderFeedRow).join(\"\");\n    document.getElementById(\"feedRowsAfterAd\").innerHTML = after.map(renderFeedRow).join(\"\");\n    document.getElementById(\"feedAdRow\").style.display = \"\";\n  }\n\n  // Sidebar \"More Stories\": most recent 5 overall \u2014 always populated\n  const sidebarPosts = posts.slice(0, 5);\n  document.getElementById(\"sidebarList\").innerHTML =\n    sidebarPosts.map(function(p, i){ return renderSidebarItem(p, i + 1); }).join(\"\");\n\n  // Trending ticker: same recent-5 pool\n  document.getElementById(\"tickerGroupInner\").innerHTML = sidebarPosts.map(renderTickerItem).join(\"\");\n  setupTickerLoop();\n\n  // Category section blocks \u2014 hidden automatically if no matching posts yet\n  showSection(\"entertainmentSection\", \"entertainmentCards\",\n    posts.filter(function(p){ return p.category === \"Entertainment\"; }).slice(0, 3));\n  showSection(\"sportsSection\", \"sportsCards\",\n    posts.filter(function(p){ return p.category === \"Sports\"; }).slice(0, 3));\n  showSection(\"politicsBusinessSection\", \"politicsBusinessCards\",\n    posts.filter(function(p){ return p.category === \"Politics\" || p.category === \"Business\"; }).slice(0, 3));\n  showSection(\"lifestyleHealthSection\", \"lifestyleHealthCards\",\n    posts.filter(function(p){ return p.category === \"Lifestyle\" || p.category === \"Health\"; }).slice(0, 3));\n}\n\n/* ============================================================\n   KUMALO AD ENGINE (unchanged)\n   Every element with data-ad-slot=\"name\" is an ad placement.\n   Modes per slot:\n     \"adsense\" \u2014 Google AdSense unit (needs client + slot IDs)\n     \"custom\"  \u2014 your direct-sold ads (customAds below), weighted\n     \"auto\"    \u2014 AdSense if configured \u2192 custom ads \u2192 house ad\n============================================================ */\nconst AD_CONFIG = {\n\n  // STEP 2 of 2: your AdSense publisher ID, e.g. \"ca-pub-1234567890123456\"\n  adsenseClient: \"ca-pub-2663538820791254\",\n\n  slots: {\n    leaderboard: { mode: \"auto\", adsenseSlotId: \"\", format: \"horizontal\" },\n    infeed:      { mode: \"auto\", adsenseSlotId: \"\", format: \"fluid\" },\n    sidebar:     { mode: \"auto\", adsenseSlotId: \"\", format: \"rectangle\" },\n    midpage:     { mode: \"auto\", adsenseSlotId: \"\", format: \"horizontal\" },\n    footer:      { mode: \"auto\", adsenseSlotId: \"\", format: \"horizontal\" }\n  },\n\n  /* Direct-sold campaigns. weight = relative frequency. */\n  customAds: [\n    // {\n    //   id: \"telco-data-jul\",\n    //   headline: \"Double data weekends are back\",\n    //   body: \"Buy any weekly bundle Fri\u2013Sun and get it doubled.\",\n    //   cta: \"Dial *100#\",\n    //   url: \"https://example.com\",\n    //   art: \"2X\",\n    //   bg: \"#101418\",\n    //   imageUrl: \"\",\n    //   weight: 3\n    // }\n  ],\n\n  houseAd: {\n    headline: \"Advertise on Kumalo\",\n    body: \"Reach Ugandan readers across news, sports, business and entertainment \u2014 every day.\",\n    cta: \"Get the rate card\",\n    url: \"mailto:ads@kumalo.biz\"\n  }\n};\n\n(function initAds(){\n  document.querySelectorAll(\"[data-ad-slot]\").forEach(function(el){\n    const name = el.getAttribute(\"data-ad-slot\");\n    const cfg  = AD_CONFIG.slots[name] || { mode: \"auto\" };\n    const frame = el.querySelector(\".ad-frame\") || el;\n    let mode = cfg.mode;\n    if (mode === \"auto\") {\n      if (AD_CONFIG.adsenseClient && cfg.adsenseSlotId) mode = \"adsense\";\n      else if (AD_CONFIG.customAds.length) mode = \"custom\";\n      else mode = \"house\";\n    }\n    if (mode === \"adsense\") renderAdsense(frame, cfg);\n    else if (mode === \"custom\" && AD_CONFIG.customAds.length) renderCustom(frame, name);\n    else renderHouse(frame);\n  });\n\n  function renderAdsense(frame, cfg){\n    frame.style.background = \"transparent\"; frame.style.border = \"none\";\n    frame.innerHTML = '<ins class=\"adsbygoogle\" style=\"display:block;width:100%\"' +\n      ' data-ad-client=\"' + AD_CONFIG.adsenseClient + '\"' +\n      ' data-ad-slot=\"' + cfg.adsenseSlotId + '\"' +\n      ' data-ad-format=\"' + (cfg.format || \"auto\") + '\"' +\n      ' data-full-width-responsive=\"true\"></ins>';\n    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e){}\n  }\n\n  function renderCustom(frame, slotName){\n    const ad = pickWeighted(AD_CONFIG.customAds);\n    const stacked = (slotName === \"sidebar\" || slotName === \"article_end\");\n    const art = ad.imageUrl\n      ? '<div class=\"art\" style=\"background-image:url(' + ad.imageUrl + ')\"></div>'\n      : '<div class=\"art\" style=\"background:' + (ad.bg || \"#101418\") + '\">' + (ad.art || \"AD\") + '</div>';\n    frame.innerHTML =\n      '<a class=\"custom-ad' + (stacked ? \" stack\" : \"\") + '\" href=\"' + ad.url + '\" target=\"_blank\" rel=\"noopener sponsored\">' +\n        art +\n        '<div class=\"txt\"><h4>' + ad.headline + '</h4><p>' + ad.body + '</p>' +\n        '<span class=\"cta\">' + (ad.cta || \"Learn more\") + ' \u2192</span></div>' +\n      '</a>';\n  }\n\n  function renderHouse(frame){\n    frame.innerHTML =\n      '<a class=\"house-ad\" href=\"' + AD_CONFIG.houseAd.url + '\">' +\n      '<h4>' + AD_CONFIG.houseAd.headline + '</h4><p>' + AD_CONFIG.houseAd.body + '</p>' +\n      '<span class=\"go\">' + AD_CONFIG.houseAd.cta + ' \u2192</span></a>';\n  }\n\n  function pickWeighted(list){\n    const total = list.reduce((s,a)=>s+(a.weight||1),0);\n    let r = Math.random()*total;\n    for (const a of list){ r -= (a.weight||1); if (r <= 0) return a; }\n    return list[0];\n  }\n})();\n\nfunction joinNewsletter(){\n  const e = document.getElementById(\"nlEmail\"), ok = document.getElementById(\"nlOk\");\n  if (/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(e.value.trim())){\n    ok.style.display = \"block\"; e.value = \"\"; e.style.borderColor = \"\";\n  } else {\n    e.style.borderColor = \"var(--accent)\"; e.focus();\n  }\n}\n\nloadHomepage();\n</script>\n</body>\n</html>\n";

// Server-renders index.html with the REAL homepage content — hero story,
// latest feed, category sections, sidebar, and trending ticker — baked
// directly into the page before it's sent. Without this, any tool that
// doesn't run JavaScript (AI browsing tools, many scrapers, some bots)
// only ever sees "Loading trending stories..." placeholders. Real
// browsers get the exact same page as before; the client-side script
// still runs afterward and refreshes the content live.

const SANITY_PROJECT_ID = "y0yye7lu";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "v2024-01-01";

/* ============ SANITY FETCH ============ */
function sanityQueryUrl(query, params){
  const usp = new URLSearchParams();
  usp.set("query", query);
  if (params){
    Object.keys(params).forEach(function(k){ usp.set("$" + k, JSON.stringify(params[k])); });
  }
  return "https://" + SANITY_PROJECT_ID + ".api.sanity.io/" + SANITY_API_VERSION +
    "/data/query/" + SANITY_DATASET + "?" + usp.toString();
}

async function sanityFetch(query, params){
  const res = await fetch(sanityQueryUrl(query, params));
  if (!res.ok) throw new Error("Sanity request failed: " + res.status);
  const json = await res.json();
  return json.result;
}

/* ============ NODE-SAFE VERSIONS OF THE SAME HELPERS USED CLIENT-SIDE ============
   Identical logic to index.html's own script — only escapeHTML differs,
   since there's no `document` on the server to build it from. */
function escapeHTML(str){
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function urlForImage(source, width){
  if (!source || !source.asset || !source.asset._ref) return "";
  const parts = source.asset._ref.split("-");
  const id = parts[1], dims = parts[2], format = parts[3];
  let url = "https://cdn.sanity.io/images/" + SANITY_PROJECT_ID + "/" + SANITY_DATASET + "/" + id + "-" + dims + "." + format;
  if (width) url += "?w=" + width + "&auto=format";
  return url;
}

function formatDate(iso){
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
}

function postUrl(slug){
  return "post.html?slug=" + encodeURIComponent(slug);
}

function metaLine(post){
  return formatDate(post.publishedAt) + (post.readTime ? " · " + post.readTime + " min" : "");
}

/* ============ CARD RENDERERS (identical output to the client-side versions) ============ */
function renderHeroLead(post){
  const img = urlForImage(post.coverImage, 1200);
  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);
  return '<a href="' + postUrl(post.slug) + '">' +
    '<div class="thumb"><img src="' + img + '" width="1200" height="675" alt="' + alt + '" loading="eager"></div>' +
    '<span class="kicker">' + escapeHTML(post.category) + '</span>' +
    '<h2>' + escapeHTML(post.title) + '</h2>' +
    '<p class="dek">' + escapeHTML(post.excerpt) + '</p>' +
    '<div class="meta"><b>' + escapeHTML(post.author || "Kumalo") + '</b> · ' + metaLine(post) + '</div>' +
    '</a>';
}

function renderHeroSideItem(post){
  const img = urlForImage(post.coverImage, 400);
  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);
  return '<article class="item"><a href="' + postUrl(post.slug) + '" style="display:contents">' +
    '<div><span class="kicker">' + escapeHTML(post.category) + '</span>' +
    '<h3>' + escapeHTML(post.title) + '</h3>' +
    '<div class="meta">' + metaLine(post) + '</div></div>' +
    '<div class="thumb"><img src="' + img + '" width="400" height="300" alt="' + alt + '" loading="lazy"></div>' +
    '</a></article>';
}

function renderFeedRow(post){
  const img = urlForImage(post.coverImage, 500);
  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);
  return '<article class="row"><a href="' + postUrl(post.slug) + '" style="display:contents">' +
    '<div><span class="kicker">' + escapeHTML(post.category) + '</span>' +
    '<h3>' + escapeHTML(post.title) + '</h3>' +
    '<p class="dek">' + escapeHTML(post.excerpt) + '</p>' +
    '<div class="meta">' + metaLine(post) + '</div></div>' +
    '<div class="thumb"><img src="' + img + '" width="500" height="320" alt="' + alt + '" loading="lazy"></div>' +
    '</a></article>';
}

function renderSectionCard(post){
  const img = urlForImage(post.coverImage, 500);
  const alt = escapeHTML((post.coverImage && post.coverImage.alt) || post.title);
  return '<article class="card"><a href="' + postUrl(post.slug) + '">' +
    '<div class="thumb"><img src="' + img + '" width="500" height="320" alt="' + alt + '" loading="lazy"></div>' +
    '<span class="kicker">' + escapeHTML(post.category) + '</span>' +
    '<h3>' + escapeHTML(post.title) + '</h3>' +
    '<div class="meta">' + metaLine(post) + '</div>' +
    '</a></article>';
}

function renderSidebarItem(post, rank){
  return '<li><span class="n">' + rank + '</span><a href="' + postUrl(post.slug) + '">' +
    '<h4>' + escapeHTML(post.title) + '</h4><span>' + escapeHTML(post.category) +
    (post.readTime ? " · " + post.readTime + " min" : "") + '</span></a></li>';
}

function renderTickerItem(post){
  return '<a href="' + postUrl(post.slug) + '">' + escapeHTML(post.title) + '</a><span class="sep">·</span>';
}

/* ============================================================
   GENERIC HTML-STRING INJECTION HELPERS
   These operate on the raw template string (not a real DOM — there
   isn't one on the server) to inject content or toggle visibility
   for a specific element by its id, using its own tag type as the
   boundary so nested elements of the same tag never confuse it.
============================================================ */
function findTagBounds(html, id){
  const idMarker = 'id="' + id + '"';
  const markerPos = html.indexOf(idMarker);
  if (markerPos === -1) return null;
  const tagStart = html.lastIndexOf("<", markerPos);
  const tagNameMatch = /^<([a-zA-Z0-9]+)/.exec(html.slice(tagStart));
  if (!tagNameMatch) return null;
  const tagName = tagNameMatch[1];
  const openTagEnd = html.indexOf(">", markerPos) + 1;
  const openTagPrefix = "<" + tagName;
  const closeTag = "</" + tagName + ">";

  let depth = 1;
  let pos = openTagEnd;
  while (depth > 0){
    const nextOpen = html.indexOf(openTagPrefix, pos);
    const nextClose = html.indexOf(closeTag, pos);
    if (nextClose === -1) return null;
    if (nextOpen !== -1 && nextOpen < nextClose){
      const charAfter = html[nextOpen + openTagPrefix.length];
      if (charAfter === " " || charAfter === ">" || charAfter === "\n" || charAfter === "\t"){
        depth++;
      }
      pos = nextOpen + openTagPrefix.length;
      continue;
    }
    depth--;
    pos = nextClose + closeTag.length;
  }
  const contentEnd = pos - closeTag.length;
  return {tagStart: tagStart, openTagEnd: openTagEnd, contentEnd: contentEnd};
}

function setContent(html, id, innerHTML){
  const bounds = findTagBounds(html, id);
  if (!bounds) return html;
  return html.slice(0, bounds.openTagEnd) + innerHTML + html.slice(bounds.contentEnd);
}

function showElement(html, id){
  // Removes a `style="display:none"` on this element's own opening tag.
  const idMarker = 'id="' + id + '"';
  const markerPos = html.indexOf(idMarker);
  if (markerPos === -1) return html;
  const tagStart = html.lastIndexOf("<", markerPos);
  const openTagEnd = html.indexOf(">", markerPos);
  const openTag = html.slice(tagStart, openTagEnd);
  const newOpenTag = openTag.replace(' style="display:none"', "");
  return html.slice(0, tagStart) + newOpenTag + html.slice(openTagEnd);
}

function hideElement(html, id){
  const idMarker = 'id="' + id + '"';
  const markerPos = html.indexOf(idMarker);
  if (markerPos === -1) return html;
  const tagStart = html.lastIndexOf("<", markerPos);
  const openTagEnd = html.indexOf(">", markerPos);
  const openTag = html.slice(tagStart, openTagEnd);
  if (openTag.indexOf("style=") !== -1) return html; // already has one — don't double up
  return html.slice(0, tagStart) + openTag + ' style="display:none"' + html.slice(openTagEnd);
}

function addClass(html, id, className){
  const idMarker = 'id="' + id + '"';
  const markerPos = html.indexOf(idMarker);
  if (markerPos === -1) return html;
  const tagStart = html.lastIndexOf("<", markerPos);
  const openTagEnd = html.indexOf(">", markerPos);
  const openTag = html.slice(tagStart, openTagEnd);
  let newOpenTag;
  if (/class="/.test(openTag)){
    newOpenTag = openTag.replace(/class="([^"]*)"/, 'class="$1 ' + className + '"');
  } else {
    newOpenTag = openTag.replace(/^<([a-zA-Z0-9]+)/, "<$1 class=\"" + className + "\"");
  }
  return html.slice(0, tagStart) + newOpenTag + html.slice(openTagEnd);
}

function showSection(html, sectionId, gridId, items){
  if (!items.length) return html;
  html = setContent(html, gridId, items.map(renderSectionCard).join(""));
  html = showElement(html, sectionId);
  return html;
}

/* ============ MAIN RENDER ============ */
const HOME_QUERY = '*[_type == "post" && defined(slug.current)] | order(publishedAt desc){' +
  'title, "slug": slug.current, category, excerpt, coverImage, author, publishedAt, readTime}';

async function renderHomepage(){
  let html = TEMPLATE;
  let posts;

  try {
    posts = await sanityFetch(HOME_QUERY);
  } catch (e) {
    html = setContent(html, "heroLead",
      '<p class="meta" style="padding:40px 0">Unable to load posts right now — please refresh.</p>');
    return html;
  }

  if (!posts || posts.length === 0){
    html = setContent(html, "heroLead",
      '<p class="meta" style="padding:40px 0">No posts published yet — check back soon.</p>');
    html = hideElement(html, "heroSide");
    html = addClass(html, "latestLayout", "single-col");
    html = setContent(html, "tickerGroupInner", '<span class="sep">No stories yet</span>');
    return html;
  }

  // Hero: most recent post as lead, next 2 as side items
  html = setContent(html, "heroLead", renderHeroLead(posts[0]));
  const sideItems = posts.slice(1, 3);
  if (sideItems.length){
    html = setContent(html, "heroSide", sideItems.map(renderHeroSideItem).join(""));
  } else {
    html = hideElement(html, "heroSide");
  }

  // Latest feed: everything after what the hero used
  const feedPosts = posts.slice(3);
  if (feedPosts.length === 0){
    html = addClass(html, "latestLayout", "single-col");
  } else {
    html = showElement(html, "latestHeading");
    html = showElement(html, "feedSection");
    const before = feedPosts.slice(0, 3), after = feedPosts.slice(3);
    html = setContent(html, "feedRowsBeforeAd", before.map(renderFeedRow).join(""));
    html = setContent(html, "feedRowsAfterAd", after.map(renderFeedRow).join(""));
    html = showElement(html, "feedAdRow");
  }

  // Sidebar "More Stories": most recent 5 overall — always populated
  const sidebarPosts = posts.slice(0, 5);
  html = setContent(html, "sidebarList",
    sidebarPosts.map(function(p, i){ return renderSidebarItem(p, i + 1); }).join(""));

  // Trending ticker: same recent-5 pool (client JS still handles the
  // seamless-loop cloning once it loads — no need to replicate that here)
  html = setContent(html, "tickerGroupInner", sidebarPosts.map(renderTickerItem).join(""));

  // Category section blocks — stay hidden automatically if nothing matches yet
  html = showSection(html, "entertainmentSection", "entertainmentCards",
    posts.filter(function(p){ return p.category === "Entertainment"; }).slice(0, 3));
  html = showSection(html, "sportsSection", "sportsCards",
    posts.filter(function(p){ return p.category === "Sports"; }).slice(0, 3));
  html = showSection(html, "politicsBusinessSection", "politicsBusinessCards",
    posts.filter(function(p){ return p.category === "Politics" || p.category === "Business"; }).slice(0, 3));
  html = showSection(html, "lifestyleHealthSection", "lifestyleHealthCards",
    posts.filter(function(p){ return p.category === "Lifestyle" || p.category === "Health"; }).slice(0, 3));

  return html;
}

module.exports = async (req, res) => {
  const html = await renderHomepage();
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=900, stale-while-revalidate=86400");
  res.status(200).send(html);
};
