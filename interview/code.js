/*
 * @Author: your name
 * @Date: 2021-05-13 15:34:56
 * @LastEditTime: 2021-05-13 16:48:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\interview\code.js
 */

// trim 实现
String.prototype.trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '');
};

// deepClone 深拷贝
function deepClone(arr) {
  if (typeof arr !== 'object' || !arr) {
    return arr;
  }
  let result;
  if (arr instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in arr) {
    result[key] = deepClone(arr[key]);
  }
  return result;
}

const a = [1, 2, 3, 4, [1, 2], { name: 'zhangsan' }];
const b = deepClone(a);

b[0] = 10;
b[4] = [3, 4];
b[5].name = 'lisi';
console.log(a);
console.log(b);

// 实现 add(1)(2)(3) 函数柯里化
const add = x => y => z => x + y + z;
console.log(add(1)(2)(3));

// 第二种实现方法
const curry = (fnc, ...args) =>
  args.length >= fnc.length ? fnc(...args) : (..._args) => curry(fnc, ...args, ..._args);

function add(a, b, c) {
  return a + b + c;
}

const curryAdd = curry(add);

console.log(curryAdd(1)(2)(3));

console.log(curryAdd(1, 2)(3));
console.log(curryAdd(1, 2, 3));

// 拍平数组
const arr = [1, 2, [3, 4, [5, 6]]];
function flatten(arr) {
  if (arr instanceof Array) {
    let result = [];
    arr.forEach(item => {
      result = result.concat(flatten(item));
    });

    return result;
  } else {
    return arr;
  }
}
console.log(flatten(arr));
