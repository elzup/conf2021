if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/BSOqSpm3DrQxaekD7TGBU/_buildManifest.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/BSOqSpm3DrQxaekD7TGBU/_ssgManifest.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/126-f2e43a3678f257e19988.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/main-ee376160b314a25ce55e.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-4b6c425ca376a73be43b.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-4bc98c7bc2d7e3b38a82.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-1a02bf049d1d59da8b17.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-5bc0e4d40ec9de944d7d.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/_app-4c997f5f86f6be855c3a.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/pages/index-e3dce791fede66bbaeb3.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/chunks/webpack-12df55bf0a521cfffa9e.js",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/css/14a018fd985faa4a1158.css",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/css/6dcb6159a5bde0fe5d6f.css",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"BSOqSpm3DrQxaekD7TGBU"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/locales/en/common.json",revision:"58e15255c73cabdd1d369ac45d7eab93"},{url:"/conf2021/locales/ja/common.json",revision:"c4757a0b6422120f262e02c5a5c491f1"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
