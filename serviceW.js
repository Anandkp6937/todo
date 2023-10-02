if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(regist=>{
        console.log("service worker working");
    }).catch(err=>{
        console.log(err);
    })
    }
    else{
        alert("service worker not working")
    }