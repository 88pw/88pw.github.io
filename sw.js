importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/122da2c3403ed59845c4.js",
    "revision": "eb4e576e420e637e8513cbbb2cbcaba1"
  },
  {
    "url": "/_nuxt/690c7b036c3f66656648.js",
    "revision": "aa2190de5eeb245b198403070166eb72"
  },
  {
    "url": "/_nuxt/6a45a9760db97693c944.js",
    "revision": "e2493d7938f1d44a2a604ce0458ce685"
  },
  {
    "url": "/_nuxt/c734788ff7f1012305d5.js",
    "revision": "4fb2ce9241fa1480f7668f5643c03651"
  },
  {
    "url": "/_nuxt/e5c796076eb0280a0f52.js",
    "revision": "4a40b044e56662203016a594a9fe2c7e"
  },
  {
    "url": "/_nuxt/fef2a42d015c8567063f.js",
    "revision": "4cfafebffc0b474cd6232c7d77a4a49a"
  }
], {
  "cacheId": "my-portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
