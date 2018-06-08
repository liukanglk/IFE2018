//展示缩略语信息 属性
function displayAbbr() {
   let abbr=document.querySelectorAll('abbr');
    let oDl = document.createElement('dl');
   for (let i=0;i<abbr.length;i++) {
       let title = abbr[i].getAttribute('title');
       let oDd = document.createElement('dd');
       let oDt = document.createElement('dt');
       let oDt_text=document.createTextNode(abbr[i].lastChild.nodeValue);
       let oDd_text=document.createTextNode(title);
       oDd.appendChild(oDd_text);
       oDt.appendChild(oDt_text);
       oDl.appendChild(oDt);
       oDl.appendChild(oDd);

   }
   document.body.appendChild(oDl);

}

addLoadEvent(displayAbbr);

