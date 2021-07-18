/*
 * @Author: GZH
 * @Date: 2021-07-03 10:38:30
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-03 11:05:27
 * @FilePath: \rewrite\DesignPattern\SingletonPatternDemo.js
 * @Description: 单例模式例子
 */
/**
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
 */

/**
 * 类实现的版本
 */
// class Storage {
//   static getInstance() {
//     if (!Storage.instance) {
//       Storage.instance = new Storage();
//       return Storage.instance;
//     }
//     return Storage.instance;
//   }

//   getItem(key) {
//     return localStorage.getItem(key);
//   }
//   setItem(key, value) {
//     return localStorage.setItem(key, value);
//   }
// }

// const s1 = Storage.getInstance();
// const s2 = Storage.getInstance();

// console.log(s1 === s2);

/**
 * 闭包实现的版本
 */

function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
};

const Storage = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance;
  };
})();

const s1 = new Storage();
const s2 = new Storage();

console.log(s1 === s2);
