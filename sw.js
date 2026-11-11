const CACHE_NAME = 'inventari-trf-v9';
const urlsToCache = ['/', '/index.html', '/manifest.json', '/icon-192x192.png?v=2', '/icon-512x512.png?v=2', '/apple-touch-icon.png?v=2', '/assets/logo-app.jpg', '/assets/logo-torreferrussa.jpg', '/assets/benvinguda-tragsa.jpg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
