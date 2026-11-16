"use strict";
/* Newsletter signup. Stores the email in a Supabase table called "subscribers".
   Needs two environment variables in Vercel: SUPABASE_URL and SUPABASE_KEY (see README). */

const reply = (res, status, body) => res.status(status).json(body);

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return reply(res, 405, { ok: false });

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  if (!url || !key) return reply(res, 503, { ok: false, error: "Signups aren't open yet." });

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  if (body.website) return reply(res, 200, { ok: true }); // hidden field filled in = bot; pretend it worked

  const email = String(body.email || "").trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return reply(res, 400, { ok: false, error: "Please enter a valid email address." });
  }

  const headers = { apikey: key, "Content-Type": "application/json", Prefer: "return=minimal" };
  if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`; // legacy JWT-style keys only

  try {
    const r = await fetch(`${url.replace(/\/$/, "")}/rest/v1/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email }),
      signal: AbortSignal.timeout(8000),
    });
    if (r.ok || r.status === 409) return reply(res, 200, { ok: true }); // 409 = already subscribed
    console.error("subscribe failed:", r.status, await r.text());
  } catch (err) {
    console.error("subscribe error:", err);
  }
  return reply(res, 502, { ok: false, error: "Something went wrong. Please try again." });
};
