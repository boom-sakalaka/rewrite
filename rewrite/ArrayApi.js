/*
 * @Author: GZH
 * @Date: 2021-10-11 17:39:02
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-12 15:50:48
 * @FilePath: \rewrite\rewrite\ArrayApi.js
 * @Description: https://juejin.cn/post/7002248038529892383 原文地址
 */

const players = [
  { name: '盖亚', num: 24 },
  { name: '阿古茹', num: 23 },
  { name: '泰罗', num: 3 },
  { name: '迪迦', num: 33 },
  { name: '戴拿', num: 35 },
  { name: '雷欧', num: 12 },
  { name: '高斯', num: 1 },
];

/*========================================================================================  */
/* forEach */
Array.prototype.sx_forEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};
players.sx_forEach((item, index) => {
  console.log(index, item);
});

Array.prototype.sx_map = function (callBack) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i], i, this));
  }
  return result;
};

const newArrs = players.sx_map((item, index) => `${item.name}-${item.num}`);
console.warn('1', newArrs);

/*========================================================================================  */
/* filter */

Array.prototype.sx_filter = function (callBack) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this) && result.push(this[i]);
  }

  return result;
};

console.log(players.sx_filter(item => item.num >= 23));

/*========================================================================================  */
/* every */
Array.prototype.sx_every = function (callBack) {
  let flag = true;
  for (let i = 0; i < this.length; i++) {
    flag = callBack(this[i], i, this);
    if (!flag) break;
  }

  return flag;
};
console.log(players.sx_every(item => item.num >= 1));

/*========================================================================================  */
/* some */
Array.prototype.sx_some = function (callback) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    flag = callback(this[i], i, this);
    if (flag) break;
  }

  return flag;
};

/*========================================================================================  */
/* reduce */
Array.prototype.sx_reduce = function (callback, initValue) {
  let start = 0;
  let pre = null;
  if (initValue) {
    pre = initValue;
  } else {
    pre = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }

  return pre;
};
const playersNum = [1, 2, 3, 4, 5, 6, 7];
const sum = playersNum.sx_reduce((pre, next) => {
  return pre + next;
});
console.log(JSON.stringify(sum));

/*========================================================================================  */
/* findIndex */
Array.prototype.sx_findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
console.log(players.sx_findIndex(item => item.name === '奥特之王')); // -1
console.log(players.sx_findIndex(item => item.name === '迪迦')); // 3

/*========================================================================================  */
/* find */
Array.prototype.sx_find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};
console.log(players.sx_find(item => item.name === '迪迦')); // { name: '迪迦', num: 33 }
console.log(players.sx_find(item => item.name === '奥特之王')); // undefined

/*========================================================================================  */
/* fill */
Array.prototype.sx_fill = function (fillValue, start = 0, end) {
  end = end || this.length;
  for (let i = start; i < end; i++) {
    this[i] = fillValue;
  }

  return this;
};
// console.log(players.sx_fill(123, 1));

/*========================================================================================  */
/* includes */
Array.prototype.sx_includes = function (value, start = 0) {
  if (start < 0) start = this.length + start;
  const isNaN = Number.isNaN(value);
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || Number.isNaN(this[i]) === isNaN) {
      return true;
    }
  }
  return false;
};

console.log([1, 2, 3].sx_includes(2)); // true
console.log([1, 2, 3, NaN].sx_includes(NaN)); // true
console.log([1, 2, 3].sx_includes(1, 1)); // false

/*========================================================================================  */
/* join */
Array.prototype.sx_join = function (s = ',') {
  let str = '';
  for (let i = 0; i < this.length; i++) {
    str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`;
  }
  return str;
};

console.log([1, 2, 3].sx_join()); // 1,2,3
console.log([1, 2, 3].sx_join('*')); // 1*2*3
