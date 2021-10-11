/*
 * @Author: GZH
 * @Date: 2021-10-11 17:39:02
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-11 18:02:22
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

/*========================================================================================  */
/* map */
Array.prototype.sx_map = function (callBack) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i], i, this));
  }
  return result;
};

const newArrs = players.sx_map((item, index) => `${item.name}-${item.num}`);
console.warn('1', newArrs);
