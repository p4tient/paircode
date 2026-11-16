/* Paircode offline support.
   The page and questions.js are fetched fresh when online (so question edits show up right away)
   and fall back to the saved copy when offline. Fonts, icons and the QR library come from the
   saved copy first. Nothing here sends data anywhere. Bump CACHE when the file list changes. */
const CACHE = 'paircode-v1';
const SHELL = [
  './',
  'questions.js',
  'qrcode.js',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'apple-touch-icon.png',
  'fonts/fonts.css',
  'fonts/onest-cyrillic-ext-wght-normal.woff2',
  'fonts/onest-cyrillic-wght-normal.woff2',
  'fonts/onest-latin-ext-wght-normal.woff2',
  'fonts/onest-latin-wght-normal.woff2',
  'fonts/unbounded-cyrillic-ext-wght-normal.woff2',
  'fonts/unbounded-cyrillic-wght-normal.woff2',
  'fonts/unbounded-latin-ext-wght-normal.woff2',
  'fonts/unbounded-latin-wght-normal.woff2',
  'fonts/jetbrains-mono-cyrillic-ext-wght-normal.woff2',
  'fonts/jetbrains-mono-cyrillic-wght-normal.woff2',
  'fonts/jetbrains-mono-latin-ext-wght-normal.woff2',
  'fonts/jetbrains-mono-latin-wght-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function save(request, response) {
  if (response && response.ok) {
    const copy = response.clone();
    caches.open(CACHE).then((c) => c.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const fresh = req.mode === 'navigate' || /\/(index\.html|questions\.js)$/.test(url.pathname);
  if (fresh) {
    event.respondWith(
      fetch(req).then((res) => save(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./')))
    );
  } else {
    event.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => save(req, res))));
  }
});
