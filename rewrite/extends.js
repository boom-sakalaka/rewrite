/*
 * @Author: GZH
 * @Date: 2021-09-08 09:25:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-08 09:37:41
 * @FilePath: \rewrite\rewrite\extends.js
 * @Description: 组合寄生模式
 */
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

function Chile(...agrs) {
  Parent.call(this, ...args);
  this.say = function () {
    console.log('chile');
  };
}

Chile.prototype = Object.create(Parent.prototype);
Chile.prototype.constructor = Chile;
