// 邮箱后缀List参考
let postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
let ipt=document.querySelector('#email-input');
let Ul=document.querySelector('#email-sug-wrapper');

window.onload=function(){
    ipt.focus();
}

ipt.addEventListener('input',  function(ev) {
  /*  获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
    控制email-sug-wrapper的显示/隐藏状态*/



  Ul.innerHTML='';
  let ipt_val=ipt.value;
  let get_input_val=get_input(ipt_val);
  let post_list=postList(get_input_val);
  addList(post_list);
  emailStatus(get_input_val);

});


ipt.addEventListener('keydown',function (ev) {
    ev=ev || window.event;
    switch (ev.keyCode){
        case 13: //enter
            selectStatus('enter');
            break;
        case 38: //up
            selectStatus('up');
            break;
        case 40: //down
            selectStatus('down');
            break;
        case 27: //esc
            selectStatus('esc');
            break;
        default:
            break;
    }
})
//获取输入
function get_input(data) {
    if (data) {
        return data.trim();
    }
}

//生成提示框
function postList(data) {
    if (data) {
        let result = [];
        let index = data.indexOf('@');
        let tag = 0;
        let end_mail;
        if (index !== -1) {
            end_mail = data.slice(index + 1);
            data = data.slice(0, index);
            for (let i of postfixList) {
                if (i.indexOf(end_mail) === 0) {
                    tag = 1
                }
            }
        }
        for (let i of postfixList) {
            if (tag === 1) {
                if (i.indexOf(end_mail) === 0) {
                    result.push(data + '@' + i);
                }
            } else {
                result.push(data + '@' + i);
            }
        }
        return result;
    }
}

//增加Ul内容
function addList(data) {
    if(data) {
        for (let i of data) {
            let aLi = document.createElement('li');
            aLi.appendChild(document.createTextNode(i));
            Ul.appendChild(aLi);
        }
        document.querySelector('li').className='select';
    }
}

//判断显示/隐藏状态
function emailStatus(data) {
    if (!data) {
        hide();
    } else {
        show();
    }
}
//隐藏
function hide() {
    Ul.style.display='none';
}
//显示
function show() {
    Ul.style.display='block';
}
//点击Li标签选择内容
Ul.addEventListener('click',function (ev) {
        ev=ev || window.event;
    let tar=ev.target || ev.srcElement;
    if (tar.nodeName.toLowerCase()==='li'){
        ipt.value=tar.outerText;
        hide();
        ipt.focus();
    }
})

//切换选择状态
function selectStatus(key) {
    let aLi=document.querySelectorAll('li');
    let fLi=document.querySelector('li');
    let lLi=document.querySelector('li:last-child');
    let sel=document.querySelector('li.select');
    switch (key){
        case 'up':
            if (sel){
                sel.className='';
            }
            if (sel===fLi){
                aLi[aLi.length-1].className='select';
            }else{
                sel.previousElementSibling.className='select';
            }
            break;
        case 'down':
            if (sel){
                sel.className='';
            }
            if (sel===lLi){
                aLi[0].className='select';
            }else{
                sel.nextElementSibling.className='select';
            }
            break;
        case 'enter':
            ipt.value=sel.textContent;
            hide();
            ipt.focus();
            break;
        case 'esc':
            ipt.select();
            break;
        default :
            break;
    }
}
