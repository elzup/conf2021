if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/PoEZCEO3H7EPFPkcAeyKP/_buildManifest.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/PoEZCEO3H7EPFPkcAeyKP/_ssgManifest.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/126-f2e43a3678f257e19988.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/353-73273a9820cbea1207b2.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/main-ee376160b314a25ce55e.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-e9af6ad8d3870bf040a5.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-96bbf2e60cf692d0ee57.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-d69c14898c3d55b53e97.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-704be9c2421787b4f653.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/_app-f9d2f0233afd1beb18e6.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/pages/index-e3dce791fede66bbaeb3.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerDailyMotion.ad4a863e0183fb38b6ea.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerFacebook.64f8b997ef29780a7c77.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerFilePlayer.cffe25551f8f954f42c9.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerKaltura.db5cf0bd758265a4fa77.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerMixcloud.89c1aa86fb7dc7e5b12e.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerPreview.a7ce0246a2dc0e68d204.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerSoundCloud.744807b0783fa7a5d792.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerStreamable.97744a90bcfc6089c3e0.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerTwitch.f234fa79dedb9f3799b1.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerVidyard.29baa3c126e963cc660a.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerVimeo.3b1cc8f9e5f91bec8384.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerWistia.dc98f0a822a0e8e9e9ef.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/reactPlayerYouTube.8bf1c9b62da623198d55.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/chunks/webpack-f1fe0556f3fb47a3ab78.js",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/css/83be3e347137bef6cd3e.css",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/_next/static/css/c7c9ff60d544a09a450e.css",revision:"PoEZCEO3H7EPFPkcAeyKP"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/icons/yamachu.jpeg",revision:"62c53f4880ca4694e46a0b7995d42530"},{url:"/conf2021/locales/en/common.json",revision:"a2b733471844dab53b2b3751beba0802"},{url:"/conf2021/locales/ja/common.json",revision:"9da98fba09e06d9f05a955c3214f3d4b"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
