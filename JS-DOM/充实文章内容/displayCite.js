//blockquote 引用属性
function displayBlockCite() {
    var quotes=document.getElementsByTagName('blockquote');
    if(quotes){

        for(var i=0;i<quotes.length;i++){
           var urls=quotes[i].getAttribute('cite');
           var quoteChildren=quotes[i].getElementsByTagName('*');  //通配符  表示quotes里所有的元素节点
           var elem=quoteChildren[quoteChildren.length-1]; //取得引用中的最后一个元素节点
        //    创建标记
            var link=document.createElement('a');
            var link_text=document.createTextNode('source');
            link.appendChild(link_text);
            link.setAttribute('href',urls);
            var superscritpt=document.createElement('sup');
            superscritpt.appendChild(link);
        //把标记加入到引用的最后一个节点
            elem.appendChild(superscritpt);
        }
    }
}

addLoadEvent(displayBlockCite);