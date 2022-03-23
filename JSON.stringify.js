/*
 * @Date: 2022-03-23 09:15:21
 * @LastEditTime: 2022-03-23 10:17:43
 * @FilePath: \rewrite\JSON.stringify.js
 * @Description:  https://juejin.cn/post/7072122968087724046
 *  JSON.stringify 的作用
 */

/* ************************************************************************************************** */
// repalcer 接受两个参数 key value
// key value 分别为对象的每个键值对
// 因此我们可以根据键或者值的类型进行简单筛选

// function replacer(key, value) {
//   if (typeof value === 'string') {
//     return undefined;
//   }
//   return value;
// }
// // function 可自己测试
// function replacerFunc(key, value) {
//   if (typeof value === 'string') {
//     return () => {};
//   }
//   return value;
// }
// const foo = {
//   foundation: 'Mozilla',
//   model: 'box',
//   week: 45,
//   transport: 'car',
//   month: 7,
//   deep: {
//     a: 1,
//     b: 'test',
//   },
// };
// const jsonString = JSON.stringify(foo, replacer);

/* ************************************************************************************************** */
/* 会递归 */
// const list = [1, '22', 3, [1, '2', 3, [1, 3, '4']]];
// const jsonString = JSON.stringify(list, replacer);
// console.warn(jsonString);

/* ************************************************************************************************** */

/* JSON.stringify 的特性 */

// 1. 对象属性值中存在这三种值会被忽略

// const obj = {
//   name: 'zc',
//   age: 18,
//   // 函数会被忽略
//   sayHello() {
//     console.log('hello world');
//   },
//   // undefined会被忽略
//   wife: undefined,
//   // Symbol值会被忽略
//   id: Symbol(111),
//   [Symbol('zc')]: 'zc',
//   test: null,
// };
// // 输出结果: {"name":"zc","age":18}
// console.log(JSON.stringify(obj));

// console.warn('*******************************');

// // 2. 数组中这三种值会被转化为 null
// const list = [
//   'zc',
//   18,
//   // 函数转化为 null
//   function sayHello() {
//     console.log('hello world');
//   },
//   // undefined 转换为 null
//   undefined,
//   // Symbol 转换为 null
//   Symbol(111),
// ];

// // ["zc",18,null,null,null]
// console.log(JSON.stringify(list));
// console.warn('*******************************');
// // 3. 这三种值单独转化将会返回 undefined

// console.log(JSON.stringify(undefined)); // undefined
// console.log(JSON.stringify(Symbol(111))); // undefined
// console.log(
//   JSON.stringify(function sayHello() {
//     console.log('hello world');
//   })
// ); // undefined

/* ************************************************************************************************** */
// const ObjectMap = (obj, fn) => {
//   if (typeof fn !== 'function') {
//     throw new TypeError(`${fn} is not a function !`);
//   }
//   // 先调用 JSON.stringify(obj, replacer) 实现 map 功能
//   // 然后调用 JSON.parse 重新转化成对象
//   return JSON.parse(JSON.stringify(obj, fn));
// };

// // 例如下面给 obj 对象的属性值乘以2

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(
//   ObjectMap(obj, (key, val) => {
//     console.warn(val);
//     if (typeof val === 'number') {
//       return val * 2;
//     }
//     return val;
//   })
// );

/* ************************************************************************************************** */
function unique(arr) {
  const keySet = new Set();
  const unique = {};
  // 提取所有的键
  arr.forEach(item => {
    Object.keys(item).forEach(key => keySet.add(key));
  });

  const replacer = [...keySet];
  arr.forEach(item => {
    // 所有的对象按照规定键值 replacer 过滤
    unique[JSON.stringify(item, replacer)] = item;
  });

  return Object.keys(unique).map(u => JSON.parse(u));
}

// 测试一下
unique([{}, {}, { x: 1 }, { x: 1 }, { a: 1 }, { x: 1, a: 1 }, { x: 1, a: 1 }, { x: 1, a: 1, b: 1 }])[
  // 返回结果
  ({}, { x: 1 }, { a: 1 }, { x: 1, a: 1 }, { x: 1, a: 1, b: 1 })
];
