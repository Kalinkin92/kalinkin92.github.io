'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html","/pwa-ex/static/css/main.938406eb.css"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});