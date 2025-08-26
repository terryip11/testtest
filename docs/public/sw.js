// public/sw.js
self.addEventListener('install', (event) => {
  console.log('Service Worker 安裝中');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker 激活');
});

self.addEventListener('fetch', (event) => {
  // 自定义缓存策略
});