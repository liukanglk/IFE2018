/*function getHttpObject() {
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    } else{
        xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
    }

}*/

function getHttpObject() {
    let xml=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTML');
    return xml;
}