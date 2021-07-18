/*
 * @Author: GZH
 * @Date: 2021-07-03 10:15:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-03 10:25:51
 * @FilePath: \rewrite\DesignPattern\SingletonPattern.js
 * @Description: 单例模式-全局只有一个类实例---例如Vuex
 */
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!SingleDog.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      SingleDog.instance = new SingleDog();
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return SingleDog.instance;
  }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

// true
s1 === s2;

// 闭包版本
SingleDog.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instance = null;
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new SingleDog();
    }
    return instance;
  };
})();
