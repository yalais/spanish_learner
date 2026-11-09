// Service Worker: speichert die App auf dem Gerät, damit sie auch ohne Netz startet.
// Seite: zuerst Netz (damit Updates sofort ankommen), ohne Netz die gespeicherte Version.
// Schriften und Icons: zuerst Speicher, sonst Netz.
// Die GitHub API (Lernstand-Sync) läuft immer direkt übers Netz und wird nie gespeichert.
// CACHE-Namen erhöhen, wenn sich Dateien in APP ändern, damit alte Kopien gelöscht werden.
const CACHE = "verbos-v1";
const APP = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.hostname === "api.github.com") return;

  // Seite: Netz zuerst, Kopie aktualisieren, offline aus dem Speicher
  if (req.mode === "navigate") {
    e.respondWith(fetch(req)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }

  // Alles andere (Icons, Google Fonts): Speicher zuerst, sonst holen und merken
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
