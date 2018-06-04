function prepareSlideShow() {
    var div1=document.createElement('div');
    div1.setAttribute('id','slideshow')
    var ahref=document.createElement('img');
    ahref.setAttribute('id','preview');
    ahref.setAttribute('src','./topics.gif');
    div1.appendChild(ahref);
    document.body.appendChild(div1);


    var preview=document.getElementById('preview');
    preview.style.position='absolute';
    preview.style.left='0px';
    preview.style.top='0px';

//    取得链表中所有连接
    var list=document.getElementById('linklist');
    //取得链表里所有标签为a的节点
    var links=list.getElementsByTagName('a');
    links[0].onmouseover=function () {
        moveElement('preview',-100,0,10);
    };
     links[1].onmouseover=function () {
        moveElement('preview',-200,0,10);
    };
     links[2].onmouseover=function () {
        moveElement('preview',-300,0,10);
    };





     //用js创建div 图片节点




}








addLoadEvent(prepareSlideShow);