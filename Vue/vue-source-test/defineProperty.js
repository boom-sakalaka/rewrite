/*
 * @Author: your name
 * @Date: 2021-04-20 20:32:09
 * @LastEditTime: 2021-04-20 20:38:41
 * @LastEditors: Please set LastEditors
 * @Description: Vue 响应式原理 2.x
 * @FilePath: \rewrite\Vue\defineProperty.js
 */

const data = {};
let name = 'zhangsan';

Object.defineProperty(data, 'name', {
  get: function () {
    console.log('get');
    return name;
  },
  set: function (newVal) {
    console.log('set');
    name = newVal;
  },
});

// 测试
console.log(data.name);
data.name = 'list';
console.log(name);
