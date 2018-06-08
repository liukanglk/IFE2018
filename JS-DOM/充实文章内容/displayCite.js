//blockquote 引用属性
function displayBlockCite() {
    let quotes=document.getElementsByTagName('blockquote');
    if(quotes){

        for(let i=0;i<quotes.length;i++){
           let urls=quotes[i].getAttribute('cite');
           let quoteChildren=quotes[i].getElementsByTagName('*');  //通配符  表示quotes里所有的元素节点
           let elem=quoteChildren[quoteChildren.length-1]; //取得引用中的最后一个元素节点
        //    创建标记
            let link=document.createElement('a');
            let link_text=document.createTextNode('source');
            link.appendChild(link_text);
            link.setAttribute('href',urls);
            let superscritpt=document.createElement('sup');
            superscritpt.appendChild(link);
        //把标记加入到引用的最后一个节点
            elem.appendChild(superscritpt);
        }
    }
}

addLoadEvent(displayBlockCite);