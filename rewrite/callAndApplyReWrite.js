/*
 * @Author: gzh
 * @Date: 2021-03-15 11:45:49
 * @LastEditTime: 2021-08-16 16:27:29
 * @LastEditors: GZH
 * @Description: call apply 手写
 * @FilePath: \rewrite\rewrite\callAndApplyReWrite.js
 */

// 需要清楚call和apply的用法才能去重写 call apply  函数去调用的，参数的第一个为this的指向，然后立即执行

// 第一版 简单实现
// Function.prototype.call2 = function (content){
//   content.fn = this
//   content.fn ()
//   delete content.fn
// }

// 第二版 获取传递参数
// Function.prototype.call2 = function (content){
//   content.fn = this;
//   // 获取其余参数
//   const args = []
// // 需要注意的是这个的i是从1开始的，因为arguments[0]为 content 也就是外部传入的对象
//   for(let i = 1; i < arguments.length; i++){
//     args.push('arguments['+ i +']')
//   }
// // eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
//   eval('content.fn('+ args +')')
//   delete content.fn
// }

//第三版本 如果传入的对象为null 改成window对象 / 添加返回值
Function.prototype.call2 = function (content) {
  content = content || window;
  content.fn = this;

  // 获取其余参数
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  const result = eval('content.fn(' + args + ')');
  delete content.fn;
  return result;
};

// es6 call
Function.prototype.myCall = function (ctx) {
  ctx = ctx || window; // obj
  let fn = Symbol();
  ctx[fn] = this;
  const arr = [];
  for (let i = 1; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  let result = ctx[fn](...arr);
  delete ctx[fn];
  return result;
};

const obj = {
  a: 1,
};
function fn1(b, c) {
  console.log(this.a);
  console.log(b);
  console.log(c);
}
fn1.myCall(obj, 2, 3);

// apply 的重写
// Function.prototype.apply2 = function (context, arr) {
//   var context = Object(context) || window;
//   context.fn = this;

//   var result;
//   if (!arr) {
//       result = context.fn();
//   }
//   else {
//       var args = [];
//       for (var i = 0, len = arr.length; i < len; i++) {
//           args.push('arr[' + i + ']');
//       }
//       result = eval('context.fn(' + args + ')')
//   }

//   delete context.fn
//   return result;
// }

// 调用 代码
const a = 'global';
const obj = {
  a: 'local',
};

function bar(name, age) {
  return `${this.a} - ${name} - ${age}`;
}

console.log(bar.call2(obj, 'Tom', '2'));

// es6
Function.prototype.myApply = function (ctx) {
  ctx = ctx || window;
  let fn = Symbol();
  ctx[fn] = this;
  let result;
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  delete ctx[fn];
  return result;
};
