importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e4d9a6864da6fc3863c.js",
    "revision": "1c6b43dbb18898370130a2a9b8c4414f"
  },
  {
    "url": "/_nuxt/690c7b036c3f66656648.js",
    "revision": "aa2190de5eeb245b198403070166eb72"
  },
  {
    "url": "/_nuxt/75215135413d8d890e07.js",
    "revision": "a3d7fb95bd2a72b4ae41014842ab27de"
  },
  {
    "url": "/_nuxt/deef067315eeed7ab744.js",
    "revision": "7148ab86c81d042f03bcd91b0d6422fc"
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
