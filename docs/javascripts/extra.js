/**
 * [checkLanguage 设置页面语言链接]
 *
 */
function checkLanguage() {
  var reg = /\/cn\//,
      regJp = /\/jp\//,
      oCNs = document.querySelectorAll('.cn'),
      oENs = document.querySelectorAll('.en'),
      oJPs = document.querySelectorAll('.jp'),
      cnApi = 'http://wiki.seeedstudio.com/cn' + location.pathname.replace(/^\/jp/,""),
      jpApi = 'http://wiki.seeedstudio.com/jp' + location.pathname.replace(/^\/cn/,""),
      enApi = 'http://wiki.seeedstudio.com' + location.pathname.replace(/^(\/cn|\/jp)/,"");
  if (reg.test(location.href)) {
    isShow(oCNs, 'none');
    isShow(oJPs, 'block',jpApi);
    isShow(oENs, 'block', enApi);
  }else if(regJp.test(location.href)){
    isShow(oJPs, 'none');
    isShow(oCNs, 'block', cnApi);
    isShow(oENs, 'block', enApi);
  } else {
    isShow(oCNs, 'block', cnApi);
    isShow(oJPs, 'block', jpApi);
    isShow(oENs, 'none');
  }
}

function isShow(obj, style, url) {
  if (!url) {
    obj.forEach(function(item, key) {
      item.style.display = style;
    })
  } else {
    obj.forEach(function(item, key) {
      item.style.display = style;
      item.onclick = function(){
          location.href = url;
      }
    })
  }
}

checkLanguage();

// 邮箱输入 阻止F/S触发搜索聚焦
if(document.getElementById("mce-EMAIL")){
  document.getElementById("mce-EMAIL").addEventListener("keydown",function(e){
  window.event ? window.event.cancelBubble = true : e.stopPropagation();
},false); 
}
 

/* add ACAD View JS Script */
if(!document.getElementById("acac-script")){
  const acadScript = document.createElement("script");
  acadScript.id = "acad-script";
  acadScript.setAttribute("async","async");
  acadScript.setAttribute("type","text/javascript");
  acadScript.setAttribute("src","https://viewer.altium.com/client/static/js/embed.js");
  document.head.appendChild(acadScript);
}
  /* add ACAD View JS Script END*/