function addLoadEvent(func) {
    let oldOnload=window.onload;
    if(typeof window.onload!=='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldOnload();
            func();
        }
    }
}


