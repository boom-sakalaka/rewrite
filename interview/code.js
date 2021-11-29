/*
 * @Author: your name
 * @Date: 2021-05-13 15:34:56
 * @LastEditTime: 2021-11-29 11:01:26
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\interview\code.js
 */

var name = 'World';
(function () {
  if (typeof name === 'undefined') {
    var name = 'jack';
    console.log('GoodBye' + name);
  } else {
    console.log('Hello' + name);
  }
})();

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
// 只到取到第一层,如果需要 再继续拍平，需要再括号内加入 数字, 例如 arr.flat(Infinity) Infinity 是无穷大，不管嵌套多少层都给你拉平
// 介绍 链接 https://juejin.cn/post/6995334897065787422?share_token=1138e1e2-98cd-462d-9e69-fed483c410f3#heading-30
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // [1,2,3,4,[5,6]]
console.log(arr.flat(2)); // [1,2,3,4,5,6]

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

// 使用reduce 实现
const arr = [1, 2, [3, 4, [5, 6]]];
function flatten2(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
  }, []);
}
console.log(flatten2(arr));
/***================================================================================================= */

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

/***================================================================================================= */

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

/***================================================================================================= */
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
const s = new Student();
console.log(s.getInfo().getName()); // jerry
/***================================================================================================= */

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
console.log(s.getInfo().getName()); // Tom

/***================================================================================================= */

// 函数的参数 引用
function changeObjProperty(o) {
  o.siteUrl = 'http://a.com';
  o = new Object();
  o.siteUrl = 'http://b.com';
  console.log('fnc', o.siteUrl); // http://b.com
}

let s = new Object();
changeObjProperty(s);
console.log(s.siteUrl); // http://a.com

/***================================================================================================= */

// 数7
function getSevenNum(num) {
  const sevArr = [];
  for (let i = 0; i <= num; i++) {
    if ((i % 7 === 0) | i.toString().includes('7')) {
      sevArr.push(i);
    }
  }
  console.log(sevArr);
  return sevArr;
}
getSevenNum(100);

/***================================================================================================= */

// 手写 判断括号字符串是否有效
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 示例 1：

// 输入：s = "()"
// 输出：true

// 示例 2：

// 输入：s = "()[]{}"
// 输出：true

// 示例 3：

// 输入：s = "(]"
// 输出：false
const isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const regObj = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      const cur = stack.pop();
      if (s[i] !== regObj[cur]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

/***================================================================================================= */
/* 编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。 */

const longestCommonPrefix = function (strs) {
  const str = strs[0];
  let index = 0;
  while (index < str.length) {
    const strCur = str.slice(0, index + 1);
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i] || !strs[i].startsWith(strCur)) {
        return str.slice(0, index);
      }
    }
    index++;
  }
  return str;
};

/***================================================================================================= */
/* 快速排序 */
var quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  let pointIndex = Math.floor(arr.length / 2);

  let pointVal = arr.splice(pointIndex, 1)[0];

  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pointVal) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return quickSort(leftArr).concat([pointVal], quickSort(rightArr));
};

/***================================================================================================= */
/* 冒泡排序 */
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
/***================================================================================================= */
/* 冒泡排序 ---优化*/

const bubbleSortY = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    // 如果一次优化没有发生交换，那么代表优化已经提前完成，直接跳出循环
    if (flag) break;
  }
  return arr;
};

/***================================================================================================= */
/* 实现千分位分隔符 */
var str = '100000000000',
  reg = /(?=(\B\d{3})+$)/g;
str.replace(reg, ',');

/***================================================================================================= */
/* 把一个JSON对象的key从下划线形式（Pascal）转换到小驼峰形式（Camel） */
function getCamelCase(str) {
  let arr = str.split('_');
  return arr
    .map((item, index) => {
      if (index === 0) {
        return item;
      } else {
        return item.charAt(0).toUpperCase() + item.slice(1);
      }
    })
    .join('');
}
