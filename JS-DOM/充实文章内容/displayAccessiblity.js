function displayAccs() {
    let links=document.getElementsByTagName('a');

    let akeys=[]; //创建数组，保存文件
    for (let i=0;i<links.length;i++){
            let current_link=links[i];
    //如果没有accesskey 继续循环
        if(!current_link.getAttribute('accesskey')){
            continue;
        }

    //    取得accesskey值
        let keys=current_link.getAttribute('accesskey');
        //取得链接文本
        let text=current_link.lastChild.nodeValue;
        //添加到数组
        akeys[keys]=text;
    }

    //创建列表
    let list=document.createElement('ul');
//    遍历访问键
    for(keys in akeys){
        let text=akeys[keys];

        //创建放到列表下的字符串
        let str=keys+': '+text;


    //创建列表项
    let item=document.createElement('li');
    let item_text=document.createTextNode(str);
    item.appendChild(item_text);

    //将列表项添加到项目
    list.appendChild(item);
    }

    //创建标题
    let header=document.createElement('h3');
    let header_text=document.createTextNode('Accrsskeys');
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccs);
