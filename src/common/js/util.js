/*
 * 获取url中参数值
 *
 * */
export function getUrlParam(name) {
  let rst
  let re = new RegExp('[?&]' + name + '=([^&]+)', 'g')
  let matcher = re.exec(window.location.href)
  if (matcher) {
    rst = matcher[1]
    rst = rst.split('#')[0]
  }
  return rst
}
/**
 * 返回上一页
 * 如果没有上一页跳转到给定的url,如果没有传参数就跳转到首页
 */
export function goBack(url) {
  url = url || '/?pcode=' + getUrlParam('pcode')
  let ua = navigator.userAgent
  let len = window.history.length

  if ((ua.indexOf('MSIE') >= 0) && (ua.indexOf('Opera') < 0)) { // IE
    if (len > 0) {
      window.history.go(-1)
    } else {
      window.location.href = url
    }
  } else { // 非IE浏览器
    if (ua.indexOf('Firefox') >= 0 ||
      ua.indexOf('Opera') >= 0 ||
      ua.indexOf('Safari') >= 0 ||
      ua.indexOf('Chrome') >= 0 ||
      ua.indexOf('WebKit') >= 0) {
      if (len >= 2) {
        window.history.go(-1)
      } else {
        window.location.href = url
      }
    } else { // 未知的浏览器
      window.history.go(-1)
    }
  }
}
/*
 * 处理时间
 * date  Object  时间
 * fmt   String  日期格式列如(yyyy-MM-dd hh:mm:ss)
 * */
export function formDate(date, fmt) {
  let year = date.getFullYear() + ''
  let regExp = /(y+)/.test(fmt)
  if (regExp) {
    fmt = fmt.replace(RegExp.$1, year)
  }
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (var key in obj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let val = obj[key] + ''
      fmt = fmt.replace(RegExp.$1, addZero(val))
    }
  }

  function addZero(num) {
    return ('00' + num).substr(num.length)
  }

  return fmt
}
