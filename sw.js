// Service worker minimal — nécessaire pour que le navigateur propose
// "Ajouter à l'écran d'accueil" / "Installer l'application".
// Ne met rien en cache de critique : les commandes doivent toujours venir
// du réseau en direct (Firestore), on ne veut surtout pas de données périmées.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Laisse simplement passer toutes les requêtes vers le réseau normalement.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
