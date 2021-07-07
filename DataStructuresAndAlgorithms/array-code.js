/*
 * @Author: GZH
 * @Date: 2021-07-07 15:37:35
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-07 17:25:46
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\array-code.js
 * @Description:  数组相关的算法题目
 */

/**
 *  给定一个数组，数组中哪两个数字相加得到target的值，求数组的下标
 */
// 第一种解法，比较粗暴，空间复杂度较高 O(n^2)
const arr5 = [1, 2, 3, 5, 4, 3, 2, 8];
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
// 第二种解法
// 大部分求和的都可以转换成为求差
function getArrIndexTwo(arr, target) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]] != undefined) {
      return [obj[target - arr[i]], i];
    }
    obj[arr[i]] = i;
  }
}
console.log(getArrIndexTwo(arr5, 9));
/**
 * 给定两个有序的数组  ，把他们结合成为一个有序的数组
 */

const arr1 = [1, 2, 8, 0, 0, 0, 0];
const arr2 = [2, 4, 5, 6];

// 利用指针算法
function concatArr(arr1, m, arr2, n) {
  let i = m - 1; // 第一个数组的有效位置，也可以说是第一个数组有效长度
  let j = n - 1; // 第二个数组的有效位置，也可以说是第二个数组有效长度
  let k = m + n - 1; // 这里代表合并后的数字中的下标数

  while (i >= 0 && j >= 0) {
    if (arr1[i] >= arr2[j]) {
      arr1[k] = arr1[i];
      i--;
      k--;
    } else {
      arr1[k] = arr2[j];
      k--;
      j--;
    }
  }

  // 第二个数组还有剩下的，直接覆盖
  while (j >= 0) {
    arr1[k] = arr2[j];
    k--;
    j--;
  }
  console.log(arr1);
}

concatArr(arr1, 3, arr2, 4);

/**
 * 有效的数组，可以尝试使用 指针法
 * 双指针法的对撞指针法
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ], 三数之和等于零
 */
const arr3 = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
  //先对数据进行排序
  arr.sort(function (a, b) {
    return a - b;
  });

  const result = [];

  // 获得数组的长度
  const len = arr.length;

  // 循环数组 只需要倒数第二个就行， 因为 左右指针会获取到后两个值
  for (let i = 0; i < len - 2; i++) {
    // 如果
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // 获取左指针
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < 0) {
        j++;
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      } else {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      }
    }
  }
  return result;
}

console.log(threeSum(arr3));
