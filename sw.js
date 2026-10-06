// Service worker minimal — nécessaire pour l'installation (PWA).
// Aucune mise en cache : tout vient du réseau. Les pages HTML sont
// revalidées à chaque ouverture pour que les mises à jour s'affichent vite.
// Version : 2026-10-06-1 (changer ce numéro force la mise à jour du SW)

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req, { cache: 'no-cache' }));
  }
});
