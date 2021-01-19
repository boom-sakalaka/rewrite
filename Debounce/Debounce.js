// 函数防抖的实现

let count = 1;
const container = document.querySelector("#container");
function getUserAction() {
  container.innerHTML = count++;
}

// 不加函数防抖的情况(一)
// container.onmousemove = getUserAction;

//加了函数防抖的情况(二)
// function getUserActionTwo() {
//   let timeOut = "";
//   return function () {
//     clearTimeout(timeOut);
//     timeOut = setTimeout(function () {
//       container.innerHTML = count++;
//     }, 1000);
//   };
// }
// container.onmousemove = getUserActionTwo();

// 封装防抖函数 第一版
// function Debounce(fnc, wait) {
//   let timer = "";
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fnc, wait);
//   };
// }

// 第二版 绑定this
// onmousemove 调用的是 return 的匿名函数
// 那么函数内的this指向为者，setTimeOut延时调用的fnc方法中的this指向为window
// 解决方法为 在返回的匿名函数内 获取this的引用 使用 apply call 改变this的指向
// function Debounce(fnc, wait) {
//   let timer = "";
//   return function () {
//     const content = this;
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fnc.apply(content);
//     }, wait);
//   };
// }

// function getUserAction() {
//   console.log(this);
//   container.innerHTML = count++;
// }

// 第三版 加上 event

// function Debounce(fnc, wait) {
//   let timer = "";
//   return function () {
//     const content = this;
//     const asg = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fnc.apply(content, asg);
//     }, wait);
//   };
// }
// function getUserAction(e) {
//   console.log(e);
//   console.log(this);
//   container.innerHTML = count++;
// }
// container.onmousemove = Debounce(getUserAction, 1000);

// 第四版 先执行一次 之后再开始防抖
// function debounce(func, wait, immediate) {
//   var timeout;

//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }

// 第五版 加上 arguments 参数
// function debounce(func, wait, immediate) {
//   var timeout, result;

//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) result = func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }
//     return result;
//   };
// }

// 第六版 添加 删除防抖的方法 立即执行
function debounce(func, wait, immediate) {
  var timeout, result;

  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
