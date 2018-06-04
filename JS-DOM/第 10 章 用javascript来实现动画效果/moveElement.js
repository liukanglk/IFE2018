function moveElement(elementID,finalX,finalY,interval) {
    var elem=document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist=0;
    if(xpos==finalX && ypos==finalY){
        return true;
    }
    if(xpos<finalX){
        // xpos++; 这样如果初始位置距离终点太远的话 速度就太慢 于是换一种策略 每次移动1/10
        dist=Math.ceil((finalX-xpos)/10);  //ceil为不下雨dist的值得一个整数  如ceil(0.5)=1;
        xpos=xpos+dist;
    }
    if(xpos>finalX){
        dist=Math.ceil((xpos-finalX)/10);  //ceil为不下雨dist的值得一个整数  如ceil(0.5)=1;
        xpos=xpos-dist;
        // xpos--;
    }
    if (ypos<finalY){
        dist=Math.ceil((finalY-ypos)/10);
        ypos=ypos+dist;
        // ypos++;
    }
    if (ypos>finalY){
        dist=Math.ceil((ypos-finalY)/10);
        ypos=ypos-dist;
        // ypos--;
    }
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';

    var repeat="moveElement('"+elementID+"',"+finalX+","+finalY+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}