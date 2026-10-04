const C="maarif-v11",A=["./","./index.html","./manifest.webmanifest","./banner.jpg","./icon-192.png","./icon-512.png"];
const PJ="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
const LIB="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all([c.addAll(A),c.add(new Request(LIB,{mode:"no-cors"})).catch(()=>{}),c.add(new Request(PJ+"pdf.min.js",{mode:"no-cors"})).catch(()=>{}),c.add(PJ+"pdf.worker.min.js").catch(()=>{})])));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=="maarif-files").map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque")){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))))});
