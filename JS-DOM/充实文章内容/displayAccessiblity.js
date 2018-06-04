function displayAccs() {
    var links=document.getElementsByTagName('a');

    var akeys=[]; //创建数组，保存樊文件
    for (var i=0;i<links.length;i++){
            var current_link=links[i];
    //如果没有accesskey 继续循环
        if(!current_link.getAttribute('accesskey')){
            continue;
        }

    //    取得accesskey值
        var keys=current_link.getAttribute('accesskey');
        //取得链接文本
        var text=current_link.lastChild.nodeValue;
        //添加到数组
        akeys[keys]=text;
    }

    //创建列表
    var list=document.createElement('ul');
//    遍历访问键
    for(keys in akeys){
        var text=akeys[keys];

        //创建放到列表下的字符串
        var str=keys+': '+text;


    //创建列表项
    var item=document.createElement('li');
    var item_text=document.createTextNode(str);
    item.appendChild(item_text);

    //将列表项添加到项目
    list.appendChild(item);
    }

    //创建标题
    var header=document.createElement('h3');
    var header_text=document.createTextNode('Accrsskeys');
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccs);
