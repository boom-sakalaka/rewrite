/*
 * @Author: your name
 * @Date: 2021-03-30 23:20:13
 * @LastEditTime: 2021-08-16 17:01:02
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\rewrite\bindReWrite.js
 */
// bind 的使用  返回一个函数  区别于call 和applye ，bind只是修改了函数里面this的值，并返回了这个函数，执行这个函数仍然需要自己去手动调用
// 例子 bind的使用
// var foo = {
//   value: 1
// };

// function bar() {
//   console.log(this.value);
// }

// // 返回了一个函数
// var bindFoo = bar.bind(foo);

// bindFoo(); // 1

// 实现 第一版本
// Function.prototype.bind2 = function(content){
//   const self = this
//   return function() {
//     return self.apply(content)
//   }
// }

// 第二版 添加 传递的参数
Function.prototype.bind2 = function (content) {
  const self = this;
  // 获取到 arguments
  const asgs = Array.prototype.splice.call(arguments, 1);
  return function () {
    let nextAsgs = Array.prototype.splice.call(arguments, 0);
    return self.apply(content, asgs.concat(nextAsgs));
  };
};

// 实例
const value = 'global';
const foo = {
  value: 'local',
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

// 返回了一个函数
const bindFoo = bar.bind2(foo);
bindFoo('Tom', 2);
