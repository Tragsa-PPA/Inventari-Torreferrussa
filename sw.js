const CACHE_NAME = 'inventari-trf-v10';
const urlsToCache = [
  '/Inventari-Torreferrussa/',
  '/Inventari-Torreferrussa/index.html',
  '/Inventari-Torreferrussa/manifest.json',
  '/Inventari-Torreferrussa/icon-192x192.png',
  '/Inventari-Torreferrussa/icon-512x512.png',
  '/Inventari-Torreferrussa/logo-torreferrussa.jpg',
  '/Inventari-Torreferrussa/benvinguda-tragsa.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
