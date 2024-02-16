self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
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
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
