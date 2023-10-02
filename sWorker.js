self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            console.log("install")
            return cache.addAll(["./","todo2.css","./sixty4.png","./five12.png"])
        }).catch(err=>{
            console.log(err);
        })
    )
})
self.addEventListener("fetch",event=>{
    event.respondWith(
        caches.match(event.request).then(response=>{
            return response || fetch(event.request);
        })
    )
})