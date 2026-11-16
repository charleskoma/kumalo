/* Kumalo — tiny browser script: "Copy link" buttons and the newsletter form. */
document.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-copy]");
  if (!btn || !navigator.clipboard) return;
  navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () {
    var label = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(function () { btn.textContent = label; }, 1800);
  });
});

document.querySelectorAll("form[data-newsletter]").forEach(function (form) {
  var msg = form.querySelector(".form-msg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = form.elements.email.value.trim();
    if (!email) { msg.textContent = "Please enter your email address."; return; }
    var button = form.querySelector("button");
    button.disabled = true;
    msg.textContent = "Subscribing…";
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, website: form.elements.website.value })
    })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (d) {
        if (d.ok) { form.reset(); msg.textContent = "You're in — thank you for subscribing!"; }
        else { msg.textContent = d.error || "Something went wrong. Please try again."; }
      })
      .catch(function () { msg.textContent = "Network problem. Please try again."; })
      .then(function () { button.disabled = false; });
  });
});
