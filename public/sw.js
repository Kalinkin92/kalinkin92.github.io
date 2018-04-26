'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html","static/css/main.c17080f1.css"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});