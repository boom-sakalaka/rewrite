/*
 * @Author: ghz
 * @Date: 2021-04-07 16:53:11
 * @LastEditTime: 2021-10-11 15:50:47
 * @LastEditors: GZH
 * @Description: 数组扁平化
 * @FilePath: \rewrite\flatten.js
 */

var arr = [1, [2, [3, 4]]];

// 方法 1 利用递归调用
function flatten(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten(arr));

// 使用reduce简化

var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

console.log(flatten(arr));

var a = '1';
function showa() {
  console.log(a);
}

function showb() {
  var a = '2';
  showa();
}
showb();
