/*
 * @Author: GZH
 * @Date: 2021-07-08 08:58:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-15 17:22:55
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\string-code.js
 * @Description: 字符串相关的算法
 */

/**
 * 基本字符串算法
 */
const str = 'AMDYES';

console.log(str.toLocaleLowerCase()); // 字符串转小写
console.log(str.toLocaleUpperCase()); // 字符串转大写
console.log(str); // 不影响原字符串

function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse(str));

/** =============================================================== */

/**
 * 字符串反转的用法-- 判断是否是回文字符串
 */
const str1 = 'yessey';
const str2 = 'yessey1';
function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}
// console.log(isPalindrome(str1));

/**
 * 另外一种判断方法 可以遍历数组的前半部分，如果和后半部分一致，就是回文字符串
 */
function isPalindromeTwo(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] != str1[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindromeTwo(str1));
console.log(isPalindromeTwo(str2));

/** =============================================================== */

/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 审题，只允许删除一个字符串(重点)
 * 可以使用对撞指针的方式去求解
 * 输入: "aba"
 *输出: True
 *示例 2:
 *输入: "abca"
 *输出: True
 *解释: 你可以删除c字符。
 *注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

const validPalindrome = function (s) {
  const len = s.length;

  // 设置左右指针
  let i = 0;
  let j = len - 1;
  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindromeTwo(i + 1, j)) {
    return true;
  }

  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(st, ed) {
    // 这里如果一进来就不走while的判断，那么就代表st ed 是同一个值，直接返回true ，字符串是回文字符串
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

// 另外一种写法
// const validPalindrome = function (s) {
//   let sIndex = 0;
//   let eIndex = s.length - 1;

//   while (sIndex < eIndex && s[sIndex] === s[eIndex]) {
//     sIndex++;
//     eIndex--;
//   }

//   if (isPArr(sIndex + 1, eIndex)) {
//     return false;
//   }

//   if (isPArr(sIndex, eIndex--)) {
//     return false;
//   }

//   function isPArr(sI, eI) {
//     while (sI < eI) {
//       if (s[sI] != s[eI]) {
//         return true;
//       }
//       sI++;
//       eI--;
//     }
//     return false;
//   }

//   return true;
// };

/** ============================================================= */
/**
 * 设计一个支持以下两种操作的数据结构
 * void addWord(word)
 *bool search(word)
 *search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
 *. 可以表示任何一个字母
 *addWord("bad")
 *addWord("dad")
 *addWord("mad")
 *search("pad") -> false
 *search("bad") -> true
 *search(".ad") -> true
 *search("b..") -> true
 */

const WordDictionary = function () {
  this.words = {};
};
WordDictionary.prototype.addWord = function (word) {
  const len = word.length;
  if (this.words[len]) {
    this.words[len].push(word);
  } else {
    this.words[len] = [];
    this.words[len].push(word);
  }
};
WordDictionary.prototype.search = function (word) {
  const len = word.length;
  if (!this.words[len]) {
    return false;
  }
  if (!word.includes('.')) {
    return this.words[len].includes(word);
  }

  const reg = new RegExp(word);
  return this.words[len].some(item => reg.test(reg));
};

const wd = new WordDictionary();
wd.addWord('abc');
wd.addWord('abcd');
wd.addWord('cba');
console.log(wd.search('abc'));
console.log(wd.search('.bc'));
console.log(wd.search('abc.'));
console.log(wd.search('abccc'));

/** ======================================================================= */

/**
 * 在字符串中匹配出数组,利用正则表达式来计算
 */

const str5 = '   -454545fjdlsjfl 909090';
console.log(str5.match(/\s*([-/+]?[0-9]*).*/));
const myAtoi = function (str) {
  // 编写正则表达式
  const reg = /\s*([-\+]?[0-9]*).*/;
  // 得到捕获组
  const groups = str.match(reg);
  // 计算最大值
  const max = Math.pow(2, 31) - 1;
  // 计算最小值
  const min = -max - 1;
  // targetNum 用于存储转化出来的数字
  let targetNum = 0;
  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1];
    // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
    if (isNaN(targetNum)) {
      // 不能进行有效的转换时，请返回 0
      targetNum = 0;
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max;
  } else if (targetNum < min) {
    return min;
  }
  // 返回转换结果
  return targetNum;
};
