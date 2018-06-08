//加载多个onload
function addLoadEvent(func) {
    let oldonload=window.onload;
    if (typeof window.onload!=="function"){
        window.onload=func;
    } else {
        window.onload=function () {
            oldonload();
            func();
        }
    }
}

//在后面插入  与insertBefore功能相反
function insertAfter(newElement,targetElement) {
    let parent=targetElement.parentNode;
    if (parent.lastChild===targetElement){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

// 为元素添加CSS
function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}


    // 当前页文本高亮
function highlightPage() {
    // if(!document.getElementsByTagName) return false;
    // if(!document.getElementById) return false;

    let headers = document.getElementsByTagName('header');
    if(headers.length===0) return false;
    let navs = headers[0].getElementsByTagName('nav');
    if(navs.length===0) return false;
    let links = navs[0].getElementsByTagName('a');
    let linkurl; // 定义变量linkurl用于存储完整的超链接
    for (let i=0;i<links.length;i++) {
        linkurl = links[i].getAttribute("href");  //获取当前url
        if (window.location.href.indexOf(linkurl) !== -1) {
            links[i].className = "here";
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext); //给当前页面链接添加id
            break;
        }
    }
}





//移动动画
function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    let elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    if (xpos === final_x && ypos === final_y) {
        return true;
    }
    if (xpos < final_x) {
        //每次调用移动总距离的十分之一
        let dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        let dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        let dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        let dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}


//图片滑动
function prepareSlideshow() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('intro')) return false;
    let intro = document.getElementById("intro");
    // 创建滑动区域，并设置id为slideshow 设置属性
    let slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    let frame = document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute("alt", "");
    frame.setAttribute("id", "frame");
    slideshow.appendChild(frame);
    let preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a glimpse of what awaits you");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);

    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            let destination = this.getAttribute("href");
            if (destination.indexOf("index.html") !== -1) {
                moveElement("preview", 0, 0, 5);
            }
            if (destination.indexOf("about.html") !== -1) {
                moveElement("preview", -150, 0, 5);
            }
            if (destination.indexOf("photos.html") !== -1) {
                moveElement("preview", -300, 0, 5);
            }
            if (destination.indexOf("live.html") !== -1) {
                moveElement("preview", -450, 0, 5);
            }
            if (destination.indexOf("contact.html") !== -1) {
                moveElement("preview", -600, 0, 5);
            }
        }
    }
}



function showSection(id) {
    let sections = document.getElementsByTagName('section');
    for(let i = 0; i < sections.length; ++i) {
        if(sections[i].getAttribute('id') !==id) {
            sections[i].style.display = 'none';
        } else {
            sections[i].style.display = 'block';

        }
    }
}

function prepareInternalnav() { 
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    let articles = document.getElementsByTagName('article'); 
    if(articles.length===0) return false;
    let navs = articles[0].getElementsByTagName('nav'); 
    if(navs.length===0) return false;
    let nav = navs[0]; // 取第一个nav元素
    let links = nav.getElementsByTagName('a'); 
    for(let i = 0; i < links.length; ++i) { 
        let sectionId = links[i].getAttribute('href').split('#')[1]; 
        if(!document.getElementById(sectionId)) continue; 
        document.getElementById(sectionId).style.display = 'none'; 
        links[i].destination = sectionId; 
        links[i].onclick = function() { 
            showSection(this.destination);
            return false; // 返回false防止页面跳转
        }
    }
}





function showPic(whichpic) {
    let source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    let text = '';
    if(whichpic.getAttribute('title')) {
        text = whichpic.getAttribute('title');
    }
    let description = document.getElementById('description');
    if(description.firstChild.nodeType===3 ) {
        description.firstChild.nodeValue = text;
    }
}
// 准备图片显示区域
function preparePlaceholder() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
 // 如果没有id为imagegallery的元素则返回false
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'images/placeholder.gif');
    placeholder.setAttribute('alt', 'my image gallery');
    // 创建一个p元素用于描述图片
    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    // 为p元素创建文本子节点
    let desctext = document.createTextNode('Choose an image');
    description.appendChild(desctext);
    let gallery = document.getElementById('imagegallery');
    insertAfter(description, gallery);
    insertAfter(placeholder, description);
}

function prepareGallery() { // 准备gallery
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    let gallery = document.getElementById('imagegallery');
    let links = gallery.getElementsByTagName('a');
    for(let i = 0; i < links.length; ++i) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }
}



function stripeTables() {
    if(!document.getElementsByTagName) return false;
    let tables = document.getElementsByTagName('table');
    for(let i = 0; i < tables.length; ++i) {
        let rows = tables[i].getElementsByTagName('tr');
        for(let j = 0; j < rows.length; ++j) {
            if(j % 2===1) { // 如果行数为奇数，则为该行的类属性添加odd类
                addClass(rows[j], 'odd');
            }
        }
    }
}


// 高亮表格当前鼠标悬停的行
function highlightRows() {
    if(!document.getElementsByTagName) return false;
    let rows = document.getElementsByTagName('tr');
    for(let i = 0; i < rows.length; ++i) {
        rows[i].oldClassName = rows[i].className; // 为tr元素添加新的属性以保存当前的className
        rows[i].onmouseover = function() {
            addClass(this, 'highlight'); // 为该行添加类highlight
        }
        rows[i].onmouseout = function() {
            this.className = this.oldClassName; // 将className属性设置为高亮之前的值oldClassName
        }
    }
}
// 显示缩写
function displayAbbreviations() {
    let abbreviations = document.getElementsByTagName('abbr');
    if(abbreviations.length < 1) return false;
    let defs = new Array();
    for(let i = 0; i < abbreviations.length; ++i) {
        let current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue; // 如果当前abbr元素没有子元素(通常指没有含缩写文本的文本子节点)，则返回false
        let definition = current_abbr.getAttribute('title'); // 将当前abbr元素的title值赋给变量definition
        let key = current_abbr.lastChild.nodeValue; // 获得缩写文本(通常abbr元素只有一个文本子节点)
        defs[key] = definition; // 存储键值对
    }
    let dlist = document.createElement('dl');
    for(key in defs) {
        let definition = defs[key]; // 将缩写key对应的全称赋给definition
        let dtitle = document.createElement('dt');
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        let ddesc = document.createElement('dd');
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false; // 如果描述列表为空，则返回false
    let header = document.createElement('h3'); // 为描述列表创建一个标题元素h3
    let header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    let articles = document.getElementsByTagName('article');
    if(articles.length===0) return false;
    let container = articles[0];
    // 将header和dlist追加为articles[0]的子节点
    container.appendChild(header);
    container.appendChild(dlist);
}
//为label添加焦点
function focusLabels(){
    let labels=document.querySelectorAll('label');
    for (let i=0;i<labels.length;i++){
        if (!labels[i].getAttribute('for')) continue;
        labels[i].onclick=function () {
            let id=this.getAttribute('for');
            if (!document.getElementById(id)) return fasle;
            let element=document.getElementById(id);
            element.focus();
        }
    }
}




// 表单验证: 获得和失去焦点的处理函数、设置表单占位符
function resetFields(whichForm) {
    if(Modernizr.input.placeholder) return; // 如果input表单支持placeholder属性，则返回
    for(let i = 0; i < whichForm.elments.length; i++) {
        let element = whichForm.elments[i];
        if(element.type === 'submit') continue; // 如果是提交按钮则跳过
        let check = element.placeholder || element.getAttribute('placeholder');
        if(!check) continue; // 如果placeholder属性值为空(无占位符)，则跳过
        element.onfocus = function() {
            let text = this.placeholder || this.getAttribute('placeholder');
            if(this.value === text) {
                this.className = '';
                this.value = '';
            }
        }
        element.onblur = function() { // 为失去焦点添加响应函数
            if(this.value === '') {
                this.className = 'placeholder'; // 将表单的类名设置为placeholder(占位符)
                this.value = this.placeholder || this.getAttribute('placeholder'); // 将表单内容设置为placeholder属性的值(占位符)
            }
        }
        element.onblur(); // 为每个表单元素执行一次onblur方法
    }
}

// 准备表单
function prepareForms() {
    for(let i = 0; i < document.forms.length; ++i) {
        let thisform = document.forms[i];
        resetFields(thisform); // 调用上面的resetFields，HTML5不需要调用此函数
        thisform.onsubmit = function() {
            let article = document.getElementsByTagName('article')[0]; // 获得article元素
            if(submitFormWithAjax(this, article)) return false; // 提交成功返回false防止页面跳转，
            return true; // 否则跳转页面
        }
    }
}

function isFilled(field) { // HTML5不需要此函数
    if(field.value.replace(' ','').length === 0) return false; // 如果去掉所有空格后，内容长度为0则返回false
    let placeholder = field.palceholder || field.getAttribute('placeholder'); // 获得placeholder属性值
    return (field.value !== placeholder); // 如果表已被修改则返回true，否则返回false
}

function isEmail(field) { // HTML5不需要此函数
    return (field.value.indexOf('@') !== -1 && field.value.indexOf('.') !== 1); // 如果串中有@和.符号则返回true,否则返回false(简单但不完全可靠的验证方式)
}

function validateForm(whichform) { // HTML5不需要此函数
    for(let i = 0; i < whichform.elements.length; ++i) {
        let element = whichform.elements[i];
        if(element.required === 'required') {
            if(!isFilled(element)) { // 如果必填表单未填写，则提示用户填写
                alert('Please fill in the ' + element.name + ' field');
                return false;
            }
        }
        if(element.type === 'email') {
            if(!isEmail(element)) { // 如果表单为email，如果格式是不正确，则提示用户修改
                alert('The ' + element.name + ' field must be a valid email address');
                return false;
            }
        }
    }
    return true; // 所有表单内容都符合要求，则返回true
}

//接收一个DOM 然后删除所有子元素
function displayAjaxLoading(element) { // 显示加载动画
    while(element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    let content = document.createElement('img');
    content.setAttribute('src', 'images/loading.gif');
    content.setAttribute('alt', 'Loading...');
    element.appendChild(content);
}

// 使用Ajax提交表单
function submitFormWithAjax(whichform, thetarget) {
    let request = new XMLHttpRequest();
    displayAjaxLoading(thetarget);

    // 对表单元素进行编码
    let dataParts = [];
    let element;
    for(let i = 0; i < whichform.elements.length; ++i) {
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value); // 提取表单数据
    }
    let data = dataParts.join('&'); // 将表单数据用符号&连接起来

    request.open('POST', whichform.getAttribute('action'), true ); // 以POST方式异步发送数据
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // 设置请求头 包含url编码的表单
    request.onreadystatechange = function() { 
        if(request.readyState === 4) { // 响应已完成
            if(request.status === 200 || request.status === 0) { // 如果请求成功或请求未初始化：
                let matches = request.responseText.match(/<article>([\s\S]+)<\/article>/); // 使用正则表达式捕获以<article>开头，以</article>结尾的字符串
                if(matches.length > 0) { // 如果捕获的内容长度大于0，则
                    thetarget.innerHTML = matches[1]; // 将thetarget的内容设置为捕获组1的内容
                } else { 
                    thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>'; // 显示错误信息
                }
            } else { 
                thetarget.innerHTML = '<p>' + request.statusText + '</p>';
            }
        }
    };
    request.send(data); // 发送数据
    console.log('AJAX SUCCRSS');
    return true; // 返回true
}

// function loadEvents() {
//     // home
//     prepareSlideshow();
//     // about
//     prepareInternalnav();
//     // photos
//     preparePlaceholder();
//     prepareGallery();
//     // live
//     stripeTables();
//     highlightRows();
//     displayAbbreviations();
//     // contact
//     focusLabels();
//     prepareForms();
// }

// Load events
// addLoadEvent(highlightPage);
// addLoadEvent(loadEvents);




addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(prepareForms);
addLoadEvent(focusLabels);
addLoadEvent(highlightPage);
