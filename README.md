# Kumalo

Ugandan news site at **kumalo.biz** — content in Sanity, pages rendered on Vercel. No build step.

## How it works

Every page is built on the server, so readers, Google and WhatsApp previews all get the full HTML straight away.
Vercel keeps each page for 5 minutes, so a story you publish in Sanity shows up within about 5 minutes.

```
api/render-home.js      homepage            (/ and /index.html)
api/render-post.js      article             (/post.html?slug=…)
api/render-category.js  category pages      (/category.html?cat=Sports)
api/render-page.js      About and Privacy   (/about.html, /privacy.html)
api/sitemap.js          /sitemap.xml
api/subscribe.js        newsletter signup   (optional, see below)
lib/config.js           ★ settings: categories, homepage sections, analytics ID, cache time
lib/layout.js           shared head, header, footer
lib/cards.js            story card layouts
lib/portable.js         article body (Sanity Portable Text → HTML)
lib/pages.js            wording of the About and Privacy pages
style.css               all styling (one file, sections numbered at the top)
site.js                 copy-link buttons + newsletter form
404.html                page for unknown addresses
vercel.json             URL routing + security headers
```

## Common jobs

- **Turn on analytics:** put your real GA4 ID in `GA_ID` in `lib/config.js`. Until then no analytics script loads.
- **Add or rename a category:** edit `CATEGORIES` (and `SECTIONS` for the homepage) in `lib/config.js`, and the category list in your Sanity schema.
- **Change About / Privacy wording:** `lib/pages.js`.
- **Change colours or fonts:** `:root` at the top of `style.css`. After any change to `style.css` or `site.js`, bump `ASSET_VERSION` in `lib/config.js` and the `?v=` number in `404.html`.

## Ads

Custom and house ad banners are gone. Only the Google AdSense loader remains in `<head>` (for site verification and Auto ads). Remove it by setting `ADSENSE_CLIENT` to `""` in `lib/config.js`. `ads.txt` is unchanged.

## Newsletter (optional)

The signup box appears **only when it can actually save emails**. To turn it on:

1. In Supabase → SQL editor, run:
   ```sql
   create table public.subscribers (
     id bigint generated always as identity primary key,
     email text not null unique,
     created_at timestamptz not null default now()
   );
   alter table public.subscribers enable row level security;
   create policy "anyone can subscribe" on public.subscribers for insert to anon with check (true);
   ```
2. In Vercel → Project → Settings → Environment Variables add `SUPABASE_URL` (your project URL) and `SUPABASE_KEY` (the **anon / publishable** key — never the service-role key). Redeploy.

Emails then appear in the `subscribers` table.

## Domains

Pick one main address (the code assumes `https://www.kumalo.biz`) and make sure the other (`kumalo.biz`) redirects to it in Vercel → Settings → Domains.
