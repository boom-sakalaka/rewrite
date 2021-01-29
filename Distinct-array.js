// 数组去重

//1. 原始实现去重的方法 兼容性好
var array = [1, 1, "1", "1"];
function unique(array) {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    // 如果array[i]是唯一的，那么执行完循环，j等于resLen
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(unique(array)); // [1, "1"]

// 2.使用 indexOf 简化内层循环
var array = [1, 1, "1"];
function unique(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }
  return res;
}
console.log(unique(array));

// 3.使用 filter 简化外层循环
var array = [1, 2, 1, 1, "1"];

function unique(array) {
  var obj = {};
  return array.filter(function (item, index, array) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

console.log(unique(array)); // [1, 2, "1"]

// 4. 使用 set
var unique = (a) => [...new Set(a)];
