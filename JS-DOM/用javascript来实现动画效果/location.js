function positionMessage() {
    var para=document.getElementById('message');
    para.style.position='absolute';
    para.style.top='100px';
    para.style.left='50px';
    moveElement('message',125,25,20);


    var elem=document.getElementById('message2');
    elem.style.position='absolute';
    elem.style.top='50px';
    elem.style.left='50px';
    moveElement('message2',125,125,20);
}
/*
function movePosition(){
    var para=document.getElementById('message');
    //获取元素的当前位置 因为位置是字符串，下面要对数值进行操作，所以转换为数值；
    var xpos=parseInt(para.style.left);
    var ypos=parseInt(para.style.top);
    if(xpos==200 & ypos==100){  //判断是否在墓地位置
        return true;
    }

    //如果没在具体位置，判断位置进行下面的操作
    if (xpos<200){
        xpos++;
    }
    if (xpos>200){
        xpos--;
    }
    if (ypos<100){
        ypos++;
    }
    if (ypos>100){
        ypos--;
    }

    // 接下来把上面的属性赋值给left和top
    para.style.left=xpos+'px';
    para.style.top=ypos+'px';
    movement=setTimeout('movePosition()',10);

}
*/



//给出接口，动态的移动动画
function moveElement(elementId,finalX,finalY,interval){
if(!document.getElementById){return false;}
if (!document.getElementById(elementId)){return false;}
var elem=document.getElementById(elementId);
var xpos=parseInt(elem.style.left);
var ypos=parseInt(elem.style.top);

if(xpos==finalX && ypos==finalY){
    return true;
}
if(xpos<finalX){
    xpos++;
}
if(xpos>finalX){
    xpos--;
}
if (ypos<finalY){
    ypos++;
}
if (ypos>finalY){
    ypos--;
}

elem.style.left=xpos+'px';
elem.style.top=ypos+'px';

var repeat="moveElement('"+elementId+"',"+finalX+","+finalY+","+interval+")";
moveElem=setTimeout(repeat,interval);


}

addLoadEvent(positionMessage);
addLoadEvent(moveElement);
