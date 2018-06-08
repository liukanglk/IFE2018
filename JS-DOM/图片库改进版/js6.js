function showPic(whichpic) {
    //把路径存入变量source
    var source=whichpic.getAttribute("href");
    //获取占位符图片
    var placehoder=document.getElementById("placehoder");

    //刷新placehoder属性
    placehoder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    //nodeValue:用来得到（和设置）一个节点的值
    // alert(description.nodeValue); 返回为NULL
    // alert(description.childNodes[0].nodeValue); //返回为所需要的值

    //node.childNodes[0]和firstChild等价
    //node.childNodes[node.childNodes.length-1]和lastChild等级

    //利用nodeValue属性来刷新这段描述
    description.firstChild.nodeValue=text;
    /*以上三个语句的意思是
    * （1）当图片库某个图片链接呗点击时，这个链接的title属性值被提取并保存到text变量中
    * （2）得到id为description的<p>元素，并把它保存在变量description中
    * （3）把description对象的第一个子节点的nodeValue属性值设置为text值
    * */

}

//查看body子元素个数
//childNode():可以获取任何一个元素的所有子元素
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}


//nodeValue:用来得到（和设置）一个节点的值


function prepareGallery() {
    var gallery=document.getElementById('imagegallery');
    var links=gallery.getElementsByTagName('a');  //ul里所有的a
    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
        //  给链接添加点击事件
           return showPic(this)?true:false;

        }
        links[i].keypress=function () {
            return showPic(this)? false:true;
        }
    }
}

//为了让prepareGallery在页面加载后运行，必须加载个onload
/*window.onload=prepareGallery;  //但是如果由两个函数要加载 就会出现问题 所以可以用下面两种办法

window.onload=function () {
    prepareGallery();
    //别的加载的函数：
}*/
// 或者
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

addLoadEvent(prepareGallery);
// addLoadEvent(others);


function insertAfter(newElement,targetElement) {
    let parent=targetElement.parentNode;
    if (parent.lastChild===targetElement){
        parent.appendChild(newElement);
    } else{
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}