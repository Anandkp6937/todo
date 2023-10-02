self.addEventListener('install',(e)=>{
    console.log("service worker intialised");
    e.waitUntill(
caches.open("stationary").then(cache=>{
    return cache.addAll(['./index.html',"./todo1.css","./todo2.css","./sixty4.png","./five12.png"]);
})
    )
})
self.addEventListener('install',e=>{
    e.respondWith(
        caches.match(e.request).then(res=>{
            return res || fetch(e.request)
        }).catch(error=>console.log("error"))
    )
})