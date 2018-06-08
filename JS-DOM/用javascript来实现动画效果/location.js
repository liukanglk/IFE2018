function positionMessage() {
    let para=document.getElementById('message');
    para.style.position='absolute';
    para.style.top='50px';
    para.style.left='50px';
    moveElement('message',200,100,5);


    let para1=document.getElementById('message2');
    para1.style.position='absolute';
    para1.style.top='0px';
    para1.style.left='50px';
    moveElement('message2',125,125,5);
}
addLoadEvent(positionMessage);

function moveElement(elementId,finX,finY,interval) {
    if (!document.getElementById(elementId)) return false;
    let elem=document.getElementById(elementId);

    let x=parseInt(elem.style.left);
    let y=parseInt(elem.style.top);
    if (x===finX && y===finY){
        return true;
    }
    if (x<finX){
        x++;
    }
    if (x>finX){
        x--;
    }
    if (y<finY){
        y++;
    }
    if (y>finY){
        y--;
    }

    elem.style.left=x+'px';
    elem.style.top=y+'px';
    let repeat="moveElement('"+elementId+"',"+finX+","+finY+","+interval+")";
    setTimeout(repeat,interval);
}



