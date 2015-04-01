/**
 * Created by YCXJ-wanglihui on 2015/4/1.
 */
'use strict';

/**
 * 拼接字符串
 *
 * 1. %s 字符串，%d 整数, %f 浮点型
 *  ep. format("%s是我的好朋友", ["wlh"])
 * 2. :placeholder :text,:username args = {text: "hello world", username: "wlh"}
 *  ep. format(":text,:username", {text: "hello world", username: "wlh"});
 *
 * @param str 字符原串
 * @param args 要替换成的字符串
 */
function format(str, args) {
  if (!args) {
    throw new Error("args empty!");
  }
  //判断是否是数组
  if (args.constructor == Array) {
    var l = args.length;
    var reg = /(%[sdf])/;
    for(var i= 0; i<l; i++) {
      str = str.replace(reg, args[i]);
    }
  } else if (typeof args == 'object') {
    for(var key in args) {
      var reg = new RegExp(":"+key);
      str = str.replace(reg, args[key]);
    }
  }
  return str;
}

module.exports = format;