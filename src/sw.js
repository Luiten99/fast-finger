const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if(request.method !== 'GET'){
        return;
    }

    event.respondWith(cacheResponse(request));

    event.waitUntil(updateCache(request));
});

async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        './index.html',
        './styles/index.css',
        './index.ts',
        './plugins/parseWords.ts',
        './plugins/time.ts',
        './plugins/validateWords.ts',
        './plugins/languages.ts'
    ])
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}