/*
 * @Author: gzh
 * @Date: 2021-04-06 09:23:05
 * @LastEditTime: 2021-09-07 11:39:00
 * @LastEditors: GZH
 * @Description: 重写new https://juejin.cn/post/7004638318843412493#heading-23
 * @FilePath: \rewrite\rewrite\newRewrite.js
 */

// new 代码示例
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res;
  }
  return obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.age);
};
let p1 = myNew(Person, 'lihua', 18);
console.log(p1.name);
console.log(p1);
p1.say();
