/*
 * @Author: your name
 * @Date: 2021-05-13 15:34:56
 * @LastEditTime: 2021-06-05 15:41:59
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
// 第一种方式
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // 只到取到第一层

// 自定义方法实现
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

// 函数防抖
function debounce(fnc, await) {
  let timeout, content, args;
  return function () {
    content = this;
    args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc.apply(content, args);
    }, await);
  };
}

// 函数节流
function throttleI(fnc, await) {
  let previous = 0;
  let content, args;
  return function () {
    content = this;
    args = arguments;
    const nowData = +new Date();
    if (nowData - previous > await) {
      fnc.apply(content, args);
      previous = nowData;
    }
  };
}

// 箭头函数和普通函数的this指向问题

// 修改前
class Student {
  constructor() {
    this.name = 'Tom';
  }
  getInfo() {
    return {
      name: 'jerry',
      getName() {
        return this.name;
      },
    };
  }
}
// 修改后
class Student {
  constructor() {
    this.name = 'Tom';
  }
  getInfo() {
    return {
      name: 'jerry',
      getName: () => {
        return this.name;
      },
    };
  }
}
const s = new Student();
console.log(s.getInfo().getName()); // jerry

// 函数的参数 引用
function changeObjProperty(o) {
  o.siteUrl = 'http://a.com';
  o = new Object();
  o.siteUrl = 'http://b.com';
}

let s = new Object();
changeObjProperty(s);
console.log(s.siteUrl);
