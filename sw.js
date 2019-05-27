importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/93fcf95ef96c692d65e2.js",
    "revision": "c5ade58829ecd4aa62fc42e097f1ab5c"
  },
  {
    "url": "/_nuxt/b0814009044880e370ad.js",
    "revision": "f69ee4eda1e6390e46fce37200f752a4"
  },
  {
    "url": "/_nuxt/ba18fe745c5a4f6cd0f4.js",
    "revision": "1797c6946c93498b62065d3f83404b53"
  },
  {
    "url": "/_nuxt/bb333638c446eab17433.js",
    "revision": "02f7c987178ee973398e3916e3c8b819"
  },
  {
    "url": "/_nuxt/dafc9d37df6b9ec7c924.js",
    "revision": "dbe79b3453e628420e0be125c882ab2e"
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
