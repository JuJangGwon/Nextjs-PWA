if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_document.jsx",revision:"e07e929903a105581816927ca252ee50"},{url:"/_next/app-build-manifest.json",revision:"2577f98f2a74c3c2bc390ffd894196b0"},{url:"/_next/static/chunks/23-b59c7fa5af92ccb7.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/497-467cb8b2eb11a901.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/595-965e9b0f6fa10ed1.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/746-2843e26ee68ec881.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/_not-found/page-1fe41d8df168b155.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/layout-dcb3c5b76c79d550.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/login/page-054e2a68716a99a8.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/main/component/DiaryAnalyze/page-25c02aea2ba3c01b.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/main/component/DiaryStatistics/page-e1622d2b3f6c3ed7.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/main/layout-b7b9a9971a1d7e02.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/main/page-1508b32fcda81049.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/page-66bac9f1647b1aba.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/app/test/page-42a0df43a1906971.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/ca377847-4b6c0e18fc93d32a.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/main-598cd41cab152017.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/main-app-6539d292b3b5d669.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a785c941f80c2152.js",revision:"nrAgUI1ElR7ZPQbNsFKmB"},{url:"/_next/static/css/00d1566904d47e8e.css",revision:"00d1566904d47e8e"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/nacimban.3a6a9b9a.png",revision:"f5fb55df3a96b0d200ca4fa8d2281572"},{url:"/_next/static/nrAgUI1ElR7ZPQbNsFKmB/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/nrAgUI1ElR7ZPQbNsFKmB/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"c39482b654762df0e70099e27cb6d621"},{url:"/icon-256x256.png",revision:"7d99c0703ea103e3ea39962fb5629328"},{url:"/icon-384x384.png",revision:"29033e82a283ebad798473a5248e2583"},{url:"/icon-512x512.png",revision:"deee092304191b90d4b6c386c6c601da"},{url:"/manifest.json",revision:"2dd402f6aaaf6413645aff5f884fe912"},{url:"/manifest/icon-192x192.png",revision:"c39482b654762df0e70099e27cb6d621"},{url:"/manifest/icon-256x256.png",revision:"7d99c0703ea103e3ea39962fb5629328"},{url:"/manifest/icon-384x384.png",revision:"29033e82a283ebad798473a5248e2583"},{url:"/manifest/icon-512x512.png",revision:"deee092304191b90d4b6c386c6c601da"},{url:"/manifest/manifest.webmanifest",revision:"5f5629d7f2dcba74623c2cf1971915ad"},{url:"/nacimban.png",revision:"f5fb55df3a96b0d200ca4fa8d2281572"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
