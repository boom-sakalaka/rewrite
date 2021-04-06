/*
 * @Author: gzh
 * @Date: 2021-03-15 11:45:49
 * @LastEditTime: 2021-04-06 10:53:02
 * @LastEditors: Please set LastEditors
 * @Description:函数节流的两种实现方法 时间戳/定时器实现
 * @FilePath: \rewrite\Throttle\throttle.js
 */
// 函数节流

// 第一版 使用时间戳实现 利用闭包 保存上一次执行的时间，对比当前时间，如果大于等待时间就执行
function throttle(func, wait) {
  var context, args;
  var previous = 0;

  return function () {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
}

container.onmousemove = throttle(getUserAction, 1000);

// 使用 定时器实现
// 第二版
function throttle(func, wait) {
  var timeout;
  var previous = 0;

  return function () {
    context = this;
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}
