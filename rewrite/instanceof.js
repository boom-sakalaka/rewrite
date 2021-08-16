/*
 * @Author: GZH
 * @Date: 2021-08-16 17:03:13
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-16 17:09:58
 * @FilePath: \rewrite\rewrite\instanceof.js
 * @Description:
 */

function myInstanceOf(left, right) {
  let left = Object.getPrototypeOf(left);
  let right = right.prototype;

  while (true) {
    if (left === null) return false;
    if (prototype === left) return true;
    left = Object.getPrototypeOf(left);
  }
}
