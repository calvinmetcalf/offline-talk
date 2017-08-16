self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-talk-v1').then(function(cache) {
      return cache.addAll([
        'https://calvinmetcalf.github.io/offline-talk/',
        'https://calvinmetcalf.github.io/offline-talk/big.js',
        'https://calvinmetcalf.github.io/offline-talk/big.css',
        'https://calvinmetcalf.github.io/offline-talk/cb1.jpg',
        'https://calvinmetcalf.github.io/offline-talk/c.jpg',
        'https://calvinmetcalf.github.io/offline-talk/dd.jpg',
        'https://calvinmetcalf.github.io/favicon.ico'
      ])
    })
  )
});
