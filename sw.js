
const CACHE_NAME = 'justice-portal-v2';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // التنشيط الفوري
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim()); // السيطرة الفورية على الصفحة
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
