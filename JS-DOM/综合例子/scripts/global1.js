//代码重构 写出较好的方案

//addLoad
function addLoadEvent(func) {
    let oldonload=window.onload;
    if (typeof window.onload!=='function'){
        window.onload=func;
    } else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}


//insertAfter 相对于insertBefore
function insertAfter(newElement,targetElement) {
    let parent=targetElement.parentNode;
    if (parent.lastChild===targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//addClass
function addClass(element,value) {

    if (!elemment.className){
        element.className=value;
    } else{
     newClassName=element.className;
     newClassName+=' ';
     newClassName+=value;
     element.className=newClassName;
    }
}



//当前网页高亮
function highlightPage() {
    let alink=document.querySelectorAll('a');
    let url=window.location.href;
    for (let i of alink){
        let ahref=i.getAttribute('href').toLowerCase();
        if (url.indexOf(ahref)!==-1){
            alink.addClass('here');
            let linktext = alinks[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext); //给当前页面链接添加id
        }
    }
}


//移动动画
function moveElement(elementID,finX,finY,interval) {
    let elem=document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    let x=parseInt(elem.style.left);
    let y=parseInt(elem.style.top);
    if (!elem.style.left){
        elem.style.left='0px';
    }
    if (!elem.style.top){
        elem.style.top='0px';
    }
    if (x === finX && y === finY) {
        return true;
    }
    if (x<finX){
        let dt=Math.ceil((finX-x)/10);
        x+=dt;
    }
    if (x>finX){
        let dt=Math.ceil((x-finX)/10);
        x-=dt;
    }
    if (y<finY){
        let dt=Math.ceil((finY-y)/10);
        y+=dt;
    }
    if (y>finY){
        let dt=Math.ceil((y-finY)/10);
        y-=dt;
    }

    elem.style.left=x+'px';
    elem.style.top=y+'px';

    let repeat="moveElement('"+elementID+"',"+finX+","+finY+","+interval+")";
    elem.movement = setTimeout(repeat,interval);

}


//图片滑动
function prepareSlideshow() {
    if(!document.getElementById('intro')) return false;
    let intro=document.getElementById('intro');
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    let frame = document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute('id','frame');
    slideshow.appendChild(frame);
    document.body.appendChild(slideshow);
    let preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);
    let alink=document.querySelectorAll('a');
    for(let i=0;i<alink.length;i++){
        alink[i].onmouseover=function () {
            let ahref=alink[i].getAttribute('href').toLowerCase();
            if (ahref==='index.html'){
                moveElement("preview", 0, 0, 5);
            }
            if (ahref==='about.html'){
                moveElement("preview", -150, 0, 5);
            }
            if (ahref==='photos.html'){
                moveElement("preview", -300, 0, 5);
            }
            if (ahref==='live.html'){
                moveElement("preview", -450, 0, 5);
            }
            if (ahref==='contact.html'){
                moveElement("preview", -600, 0, 5);
            }
        }
    }

}


//展示内容
function showSection(id) {
    let ali=document.querySelectorAll('li');
    for (let i=0;i<ali.length;i++) {
        let ahref=ali[i].getAttribute('href');
        if (ahref.indexOf(id)!==-1){

        if (elem.style.display === 'none') {
            elem.onclick = function () {
                elem.style.display = 'block';
            }
        }
    }
    }
}




