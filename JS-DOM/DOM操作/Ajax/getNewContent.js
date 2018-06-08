function getNewContent(){
    let request=getHttpObject();
    if (request){
        request.open('get','example.txt',true);
        request.onreadystatechange=function () {
            if (request.readyState===4){
                let para=document.createElement('p');
                let text=document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send();
    }
}
window.onload=getNewContent;