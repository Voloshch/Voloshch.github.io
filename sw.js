self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/Voloshch.github.io/',
        '/Voloshch.github.io/index.html',
        '/Voloshch.github.io/style/style.css',
        '/Voloshch.github.io/img/icon-128.png',
        '/Voloshch.github.io/1.json',
        '/Voloshch.github.io/js.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v2').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/Voloshch.github.io/img/icon-128.png');
      });
    }
  }));
});
