window.addEventListener("load",(()=>{"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("controllerchange",(()=>{console.info("[SW_Registerer] Service worker changed")})),navigator.serviceWorker.register("/sw.js").then((e=>{console.info("[SW_Registerer] Service worker registered"),e.addEventListener("updatefound",(()=>{console.info("[SW_Registerer] Found new service worker");e.installing.addEventListener("statechange",(e=>{console.log("[SW_Registerer] New worker state",e.currentTarget.state)}))}))})).catch((e=>{console.warn("[SW_Registerer] Error registering service worker:",e)})))}));