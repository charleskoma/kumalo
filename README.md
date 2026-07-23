# Kumalo — general news site with built-in monetization

Kumalo covers everything trending — news, politics, business, sports, entertainment, lifestyle, health, culture and events. The homepage is a full multi-section news front: mixed top-stories hero, mixed Latest feed, then dedicated Entertainment, Sports, Politics & Business, and Lifestyle & Health blocks.

**Design:** clean editorial system — Inter typography, white space, single red accent, list-style feed with photo thumbnails, sticky blurred header, quiet labeled ad slots. Article body set in Source Serif 4 for comfortable reading.

**Images:** all photos are placeholders served from picsum.photos (seeded, so they stay consistent). Replace each `<img src="https://picsum.photos/...">` with your own photos before launch — every image already has width/height and an aspect-ratio box, so swapping sources won't shift the layout.

Two self-contained pages, no build step, no dependencies. Open `index.html` in a browser and it works. Host it anywhere static files are served (Netlify, Vercel, Cloudflare Pages, GitHub Pages — all free).

## What's inside

- `index.html` — homepage: mixed hero, Latest feed, Most-read rail, 4 section blocks, newsletter, 5 ad slots (leaderboard, in-feed, sidebar, mid-page, footer)
- `post.html` — article page (sample: transport news explainer): byline, share buttons, pull quote, related posts, 3 ad slots
- `about.html` — About + Contact + Advertise page (footer links point here)
- `privacy.html` — Privacy policy covering cookies and AdSense (required for approval)

Every ad placement is an element with `data-ad-slot="name"`, driven by the `AD_CONFIG` object at the bottom of each page's script.

## Ad modes

Each slot runs in one of three modes (set per slot in `AD_CONFIG.slots`):

| Mode | What it shows |
|---|---|
| `adsense` | A Google AdSense unit |
| `custom` | Your own direct-sold ads, weighted rotation |
| `auto` (default) | AdSense if configured → else custom ads → else a house ad pointing advertisers to your email |

Right now everything is on `auto` with nothing configured, so all slots show the house ad ("This spot could be yours → ads@kumalo.ug"). That's intentional — the site earns you advertiser leads even before AdSense approval.

## Enabling AdSense (2 steps)

1. In the `<head>` of both pages, uncomment the AdSense `<script>` tag and replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID.
2. In `AD_CONFIG`, set `adsenseClient: "ca-pub-XXXXXXXXXXXXXXXX"` and paste each ad unit's slot ID into the matching entry in `AD_CONFIG.slots` (create the units in your AdSense dashboard: one horizontal/leaderboard, one in-feed/fluid, one rectangle).

Notes for approval: AdSense wants a site with real content (15–25+ solid posts) plus About, Contact, and Privacy pages — `about.html` and `privacy.html` are included and already linked from the footer. Get the site live on a custom domain (`kumalo.ug` or a .com) first; AdSense doesn't approve localhost or most free subdomains reliably.

## Adding direct-sold (custom) ads

Add campaign objects to `AD_CONFIG.customAds`:

```js
customAds: [
  {
    id: "club-nova-jul",
    headline: "Saturdays at Club Nova, Bukoto",
    body: "Amapiano all night. Ladies free before 10pm.",
    cta: "Get tickets",
    url: "https://example.com",
    art: "NOVA",                                   // big letters if no image
    bg: "linear-gradient(135deg,#5D3A8E,#2A1747)", // art background
    imageUrl: "",                                  // or a full creative image
    weight: 3                                      // 3x more likely to show than weight:1
  }
]
```

Direct ads are usually worth far more than AdSense per impression in markets AdSense underprices (Uganda included) — a club, telecom promo, or event promoter paying a flat weekly rate for the leaderboard will typically beat programmatic revenue. The "Advertise: ads@kumalo.ug" line in the top bar and footer is there to capture those leads.

## Mixing both

Set specific slots to specific modes, e.g. sell the leaderboard directly and let AdSense fill the rest:

```js
slots: {
  leaderboard: { mode: "custom" },
  infeed:      { mode: "adsense", adsenseSlotId: "1234567890", format: "fluid" },
  ...
}
```

## Customizing

- **Colors/typography:** all tokens are CSS variables at the top of each page (`--paper`, `--ink`, `--yellow`, `--red`, `--smoke`, `--line`). Fonts: Anton (display) + Instrument Sans (body) via Google Fonts.
- **Cover images:** post covers are currently styled placeholder blocks (`.cover` with gradient classes + initials). Replace any cover with a real image: `<a class="cover"><img src="..." style="width:100%;height:100%;object-fit:cover"></a>`.
- **Content:** all posts, headlines, and chart entries are sample copy — replace with real Kumalo content.
- **More pages:** duplicate `post.html` per article, or use it as the theme reference when converting to WordPress/Blogger — the ad-slot pattern (labeled container + JS-filled frame) ports directly into a Blogger HTML/JavaScript gadget or a WordPress widget.

## Extra files included

- `404.html` — shown by GitHub Pages when a URL doesn't exist
- `robots.txt` + `sitemap.xml` — replace `YOUR-DOMAIN-HERE` with your real URL after deploying (helps Google index the site; useful for AdSense review)

## Deploying free

1. Put this folder in a GitHub repo.
2. Netlify / Cloudflare Pages / Vercel → "import repo" → done, you get HTTPS and a URL.
3. Point your custom domain at it, then apply for AdSense.

## Roadmap ideas

- Replace the picsum placeholder photos with real Kumalo photography.
- Split the duplicated CSS/JS into `style.css` + `ads.js` once you deploy (kept inline here so each file previews standalone).
- Sticky mobile anchor ad (AdSense offers this automatically via Auto ads — enable in dashboard, no code needed).
- Simple impression/click counter for custom ads (log to a free Supabase table — you already know that stack).
- Consent banner if you get EU traffic (required for AdSense in EEA/UK).
