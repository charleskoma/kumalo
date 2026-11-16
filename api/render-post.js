"use strict";
const C = require("../lib/config");
const { query, imageUrl, photo } = require("../lib/sanity");
const { esc, formatDate, postUrl, catUrl, jsonLd } = require("../lib/util");
const { page, send, notFound, unavailable, newsletter } = require("../lib/layout");
const { renderBody } = require("../lib/portable");
const cards = require("../lib/cards");

// The article and its three "read next" stories in a single request.
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title, "slug": slug.current, category, excerpt, coverImage, author, publishedAt, _updatedAt, readTime, body, tags,
  "related": *[_type == "post" && category == ^.category && slug.current != ^.slug.current && defined(slug.current)] | order(publishedAt desc)[0...3]{
    title, "slug": slug.current, category, excerpt, coverImage, publishedAt, readTime
  }
}`;

module.exports = async (req, res) => {
  const slug = String(req.query.slug || "").trim();
  if (!slug) return notFound(res, "story");

  let post;
  try {
    post = await query(POST_QUERY, { slug });
  } catch (err) {
    console.error("post:", err);
    return unavailable(res);
  }
  if (!post) return notFound(res, "story");

  const path = postUrl(post.slug);
  const url = C.BASE_URL + path;
  const social = imageUrl(post.coverImage, 1200, 1200 / 630);
  const description = post.excerpt || `Read "${post.title}" on Kumalo.`;
  const published = formatDate(post.publishedAt);
  const metaLine = [published, post.readTime ? `${post.readTime} min read` : ""].filter(Boolean).join(" · ");
  const author = post.author || "Kumalo";
  const photoTag = photo(post.coverImage, {
    widths: [640, 960, 1280],
    sizes: "(min-width:780px) 740px, 100vw",
    ratio: 16 / 9,
    alt: (post.coverImage && post.coverImage.alt) || post.title,
    eager: true,
  });

  const share = `<div class="share" aria-label="Share this story">
      <a href="https://wa.me/?text=${encodeURIComponent(post.title + " " + url)}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&amp;url=${encodeURIComponent(url)}" target="_blank" rel="noopener">X</a>
      <button type="button" data-copy="${esc(url)}">Copy link</button>
    </div>`;

  const related = (post.related || []).filter((p) => p && p.slug);

  const main = `<article class="article">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="${catUrl(post.category)}">${esc(post.category)}</a></nav>
  <span class="kicker">${esc(post.category)}</span>
  <h1>${esc(post.title)}</h1>
  ${post.excerpt ? `<p class="standfirst">${esc(post.excerpt)}</p>` : ""}
  <div class="byline">
    <span class="avatar" aria-hidden="true">${esc(author.charAt(0).toUpperCase())}</span>
    <div class="who"><b>${esc(author)}</b><span>${esc(metaLine)}</span></div>
    ${share}
  </div>
  ${photoTag ? `<figure class="feature">${photoTag}</figure>` : ""}
  <div class="article-body">${renderBody(post.body)}</div>
  ${post.tags && post.tags.length ? `<div class="tags" aria-label="Tags">${post.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
</article>
<div class="wrap">
  ${newsletter() ? `<div class="article-news">${newsletter()}</div>` : ""}
  ${related.length ? `<section class="block" aria-labelledby="next-h"><div class="section-head"><h2 id="next-h">Read next</h2></div><div class="grid">${related.map(cards.card).join("")}</div></section>` : ""}
</div>`;

  const jsonld = jsonLd({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description,
    image: social ? [social] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    articleSection: post.category,
    author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: C.SITE_NAME },
    publisher: { "@type": "Organization", name: C.SITE_NAME, url: C.BASE_URL },
    mainEntityOfPage: url,
  });

  send(res, page({ title: `${post.title} — ${C.SITE_NAME}`, description, path, image: social, type: "article", jsonld, active: post.category, main }));
};
