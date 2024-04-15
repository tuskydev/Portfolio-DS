// Increment "v1" to "v2", "v3", etc., when you update your assets or content
const CACHE_NAME = "v5";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles/index.css",
  "/index.js",
  "/content/4 Image TECH.mp4",
  "/content/ivoryTusksWhite.svg",
  "/content/skillPictures/Icon One.svg",
  "/content/skillPictures/Icon Two.svg",
  "/content/skillPictures/Icon Three.svg",
  "/content/skillPictures/Icon Four.svg",
  "/content/skillPictures/Icon Five.svg",
  "/content/skillPictures/Icon Six.svg",
  "/content/skillPictures/Icon Seven.svg",
  "/content/skillPictures/Icon Eight.svg",
  "/content/skillPictures/Icon Nine.svg",
  "/content/glassWave3D.jpg",
  "/fonts/degarism_studio_-_alliance_no.1_light-webfont.woff",
  "/fonts/degarism_studio_-_alliance_no.1_light-webfont.woff2",
  "/fonts/degarism_studio_-_alliance_no.2_light-webfont.woff",
  "/fonts/degarism_studio_-_alliance_no.2_light-webfont.woff2",
];

// Install event - caches assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Force the waiting service worker to become the active service worker
  );
});

// Activate event - cleans up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Claim clients to enforce immediate control by the active service worker
  );
});

// Fetch event - tries to fetch from the network first, falls back to the cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
      .then((response) => {
        return response || caches.match("/"); // Fallback to the home page if both network and cache fail
      })
  );
});
