/*
 * @Author: gzh
 * @Date: 2021-04-06 09:23:05
 * @LastEditTime: 2021-04-06 09:50:38
 * @LastEditors: Please set LastEditors
 * @Description: 重写new https://github.com/mqyqingfeng/Blog/issues/13 笔记
 * @FilePath: \rewrite\newRewrite.js
 */

// new 代码示例

// Otaku 御宅族，简称宅
// function Otaku(name, age) {
//   this.name = name;
//   this.age = age;
//   this.habit = 'Games';
// }

// Otaku.prototype.sayYourName = function () {
//   console.log('I am' + this.name);
// };
// // 因为缺乏锻炼的缘故，身体强度让人担忧
// Otaku.prototype.strength = 60;

// var otakuOne = new Otaku('源治', 18);

// console.log(otakuOne.name);
// console.log(otakuOne.age);
// console.log(otakuOne.strength);
// otakuOne.sayYourName();

// new 实现 本质上就是修改了对象的原型指向 和执行构造方法时候改变this的指向

// 第一版
function ObjectCreate() {
  var obj = new Object();
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  return obj;
}

// 第二版的代码 判断返回值
function objectFactory() {
  var obj = new Object(),
    Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}
