if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(regist=>{
    }).catch(err=>{
        console.log(err);
    })
    }
    else{
        alert("service worker not working")
    }