/*
 * @Author: GZH
 * @Date: 2021-07-07 12:28:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-07 13:47:12
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\array-code.js
 * @Description: 数组相关的算法题
 */

/**
 *  给定一个数组，数组中哪两个数字相加得到target的值，求数组的下标
 */
// 第一种解法，比较粗暴，空间复杂度较高 O(n^2)
const arr = [1, 2, 3, 5, 4, 3, 2, 8];
function getArrIndex(arr, target) {
  // target == 9
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(getArrIndex(arr, 9));

// 第二种解法，通过把求和的问题变为求差的问题
const arr = [1, 2, 3, 5, 8];
function getArrIndexTow(arr, target) {
  const diffs = {};
  for (let i = 0; i < arr.length; i++) {
    if (diffs[target - arr[i]] !== undefined) {
      return [diffs[target - arr[i]], i];
    } else {
      diffs[arr[i]] = i;
    }
  }
}
console.log(getArrIndexTow(arr, 9));
