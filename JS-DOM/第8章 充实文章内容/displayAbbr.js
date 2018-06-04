//展示缩略语信息 属性
function displayAbbr() {
    var abbr=document.getElementsByTagName('abbr');
    if(abbr) {  //确定文档中是否有abbr缩略语
        var defs=[]; //定义数组来保存abbr里元素信息
        for (var i = 0; i < abbr.length; i++) {

            var definition=abbr[i].getAttribute('title');   //getAttribute 获取属性  setAttribute:设置属性
            var key=abbr[i].lastChild.nodeValue;  //获取abbr节点的值
            defs[key]=definition;
        }

        //创建定义列表
        var dlist=document.createElement('dl');
        // 遍历定义
        for(key in defs){
            var definition=defs[key];
            //创建定义标题
            var dtitle=document.createElement('dt');
            var dtitle_text=document.createTextNode(key);
            dtitle.appendChild(dtitle_text);
            //创建定义描述
            var ddesc=document.createElement('dd');
            var ddesc_text=document.createTextNode(definition);
            ddesc.appendChild(ddesc_text);

            //添加到定义列表
            dlist.appendChild(dtitle);
            dlist.appendChild(ddesc);

        }

    //    创建标题
        var header=document.createElement('h2');
        var header_text=document.createTextNode('ABBR');
        header.appendChild(header_text);
    //    把标题加入到主页面
        document.body.appendChild(header);
        //把列表加入到主页面
        document.body.appendChild(dlist);
    }
}

addLoadEvent(displayAbbr);

