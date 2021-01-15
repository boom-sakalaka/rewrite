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
