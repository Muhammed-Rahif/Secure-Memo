importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");
const clientStorageKey = "SecureMemoStorage";

const staticAssets = [
  "./index.html",
  "./js/main.js",
  "./script.js",
  "./index.html",
  "./contact.html",
  "./about.html",
  "./favicon.jpeg",
];
workbox.precaching.precache(staticAssets);
workbox.routing.registerRoute(
  /.*\.(css)/,
  new workbox.strategies.CacheFirst({
    cacheName: clientStorageKey+"",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(js)/,
  new workbox.strategies.CacheFirst({
    cacheName: clientStorageKey+"Css",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(ttf|woff)/,
  new workbox.strategies.CacheFirst({
    cacheName: clientStorageKey+"Fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(html)/,
  new workbox.strategies.CacheFirst({
    cacheName: clientStorageKey+"Htmls",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(png|jpg|jpeg|gif)/,
  new workbox.strategies.CacheFirst({
    cacheName: clientStorageKey+"Images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  "/",
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp("/"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "cache-news-datas",
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the news content for 30mn
    },
  })
);