function getHttpObject() {
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    } else{
        xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
    }

}