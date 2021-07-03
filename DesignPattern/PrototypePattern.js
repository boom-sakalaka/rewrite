/*
 * @Author: GZH
 * @Date: 2021-07-03 11:43:38
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-03 13:40:14
 * @FilePath: \rewrite\DesignPattern\PrototypePattern.js
 * @Description: 原型模式
 */

/**
 *js 中的类
 */

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log('肉骨头真好吃');
  }
}

/**
 * 等价于下列的写法，本质上就是语法糖
 */
function Dog(name, age) {
  this.name = name;
  this.age = age;
}
Dog.prototype.eat = function () {
  console.log('肉骨头真好吃');
};

// 递归的调用
function deepCopy(obj) {
  if ((typeof obj !== 'object') | (obj === null)) {
    return obj;
  }

  let copy = {};
  if (Array.isArray(obj)) {
    copy = [];
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
