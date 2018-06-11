const wxParse = require('/wxParse.js').wxParse; //解析HTML及markdown
const formatTime = (date,fmt) => { //时间格式化
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
  }
  let o = {
    'M+':date.getMonth()+1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
  };
  for(var k in o){
    
  }

}
