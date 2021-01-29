// 函数节流

// 第一版 使用时间戳实现
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
