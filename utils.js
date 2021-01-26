//判断是否是数字
function isNumber(val) {
  var regPos = /^(\-|\+)?\d+(\.\d+)?$/; //判断是否是数字。
  if (regPos.test(val)) {
    return parseFloat(val);
  } else {
    return 0;
  }
}

// 字母数字混合排序
var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
  var aA = a.goods_sn.replace(reA, "");
  var bA = b.goods_sn.replace(reA, "");
  if (aA === bA) {
    var aN = parseInt(a.goods_sn.replace(reN, ""), 10);
    var bN = parseInt(b.goods_sn.replace(reN, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } else {
    return aA > bA ? 1 : -1;
  }
}
printDataList.sort(sortAlphaNum);

// 浮点数 加法
function floatAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //return (arg1 * m + arg2 * m) / m;
  return (
    ($Core.Utility.calculate.floatMul(arg1, m) +
      $Core.Utility.calculate.floatMul(arg2, m)) /
    m
  );
}
// 浮点数 减法
function floatSub(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
// 浮点数 乘法
function floatMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
// 浮点数 除法
function floatDiv(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

// 中文数字 大写
function number_chinese(str) {
  var num = parseFloat(str);
  var strOutput = "",
    strUnit = "仟佰拾亿仟佰拾万仟佰拾元角分";
  num += "00";
  var intPos = num.indexOf(".");
  if (intPos >= 0) {
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (var i = 0; i < num.length; i++) {
    strOutput +=
      "零壹贰叁肆伍陆柒捌玖".substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
  }
  return strOutput
    .replace(/零角零分$/, "整")
    .replace(/零[仟佰拾]/g, "零")
    .replace(/零{2,}/g, "零")
    .replace(/零([亿|万])/g, "$1")
    .replace(/零+元/, "元")
    .replace(/亿零{0,3}万/, "亿")
    .replace(/^元/, "零元");
}

// 多个条件 分组汇总数据
function GrounByMoneCode(data, arr) {
  var obj = {};
  try {
    data.forEach(function (item, index) {
      var dataKey = createUniKey(item, arr);
      if (obj[dataKey]) {
        obj[dataKey].push(item);
      } else {
        obj[dataKey] = [];
        obj[dataKey].push(item);
      }
    });
  } catch (e) {}
  return obj;
}

// 生成唯一key
function createUniKey(data, arr) {
  var key = [];
  if (Array.isArray(arr) && arr.length) {
    arr.forEach(function (item, index) {
      key.push(data[item]);
    });
  }
  return key.join("_");
}

// 数字不足补零
function PrefixInteger(num, length) {
  return (Array(length).join("0") + num).slice(-length);
}
