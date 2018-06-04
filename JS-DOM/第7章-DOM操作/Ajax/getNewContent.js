function getNewContent() {
    var request;
    if(window.XMLHttpRequest){
        request=new XMLHttpRequest();
    }else{
        request=new ActiveXObject('Microsoft.XMLHTTP');
    }

    if(request){
        request.open('GET','example.txt',true);
        request.onreadystatechange=function () {
            if( request.readyState==4){
                var par=document.createElement('p');
                var txt=document.createTextNode(request.responseText);   //responseText:获取字符串形式的响应数据  responseXML：获取XML形式的响应数据
                par.appendChild(txt);  //把数据插入到P
                document.getElementById('new').appendChild(par); // 把p插入到div中

            }
        }
        request.send(null);
    }else{
        alert('Sorry,your browser does\'t support XMLHTTPRequest');

    }
}
window.onload=getNewContent;