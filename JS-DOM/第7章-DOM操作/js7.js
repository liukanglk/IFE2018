function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild===targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//onload 事件
function addLoadEvent(func) {
    var oldOnload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldOnload();
            func();
        }
    }
}


function preparPlaceHolder() {
    var placeholder=document.createElement('img');
    //设置节点属性 每次只能设置一个
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','../第四章-JS图片库/My%20image%20gallery.jpg');
    placeholder.setAttribute('alt','my image gallery');
    var description=document.createElement('p');
    description.setAttribute('id','description');
    var destext=document.createTextNode('choose an image');
    description.appendChild(destext);



    var gallery=document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);

}



function prepareGallery() {
    var gallery=document.getElementById('imagegallery');
    var links=gallery.getElementsByTagName('a');  //ul里所有的a
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
        //  给链接添加点击事件
          return showPic(this);

        }
        links[i].onkeypress=links[i].onclick;

    }
}




function showPic(whichpic) {

    var source=whichpic.getAttribute("href");

    var placehoder=document.getElementById("placeholder");  //获取占位符图片

    //刷新placehoder属性
    placehoder.setAttribute("src",source);
    if (!document) 
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;
    /*以上三个语句的意思是
    * （1）当图片库某个图片链接呗点击时，这个链接的title属性值被提取并保存到text变量中
    * （2）得到id为description的<p>元素，并把它保存在变量description中
    * （3）把description对象的第一个子节点的nodeValue属性值设置为text值
    * */
  return false;
}

//为了让prepareGallery在页面加载后运行，必须加载个onload
/*window.onload=prepareGallery;  //但是如果由两个函数要加载 就会出现问题 所以可以用下面两种办法

window.onload=function () {
    prepareGallery();
    //别的加载的函数：
}*/
// 或者
/*function addLoadEvent(func) {
    var oldOnload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldOnload();
            func();
        }
    }
}*/

addLoadEvent(prepareGallery);
addLoadEvent(preparPlaceHolder);
// addLoadEvent(others);




