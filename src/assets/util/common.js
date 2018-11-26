// 获取后台的分页参数
function getPageConfig(res,params) {
  return {
    pageNo:params.pageNo || 0,
    pageSize:params.pageSize || 10,
    total:res.data.total || 0
  }
}
//写cookies
function setCookie(name,value)
{
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

function delCookie(name)
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

module.exports = {
  setCookie:setCookie,
  getCookie:getCookie,
  delCookie:delCookie
}
