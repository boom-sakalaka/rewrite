//判断是否是数字 添加去除空格 "2 "解决这种情况
function isNumber(val) {
  var newVal = val.toString().replace(/\s*/g, '');
  var regPos = /^(\-|\+)?\d+(\.\d+)?$/; //判断是否是数字。
  if (regPos.test(newVal)) {
    return Number(newVal);
  } else {
    return 0;
  }
}

//判断是否是数字 添加去除空格 "2 "解决这种情况
function isNumberTwo(val) {
  if (val && !isNaN(val)) {
    return Number(val);
  }
  return 0;
}
console.log(isNumberTwo('111'));
// 字母数字混合排序
var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
  var aA = a.goods_sn.replace(reA, '');
  var bA = b.goods_sn.replace(reA, '');
  if (aA === bA) {
    var aN = parseInt(a.goods_sn.replace(reN, ''), 10);
    var bN = parseInt(b.goods_sn.replace(reN, ''), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
  } else {
    return aA > bA ? 1 : -1;
  }
}
//printDataList.sort(sortAlphaNum);

// 浮点数 加法
function floatAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //return (arg1 * m + arg2 * m) / m;
  return ($Core.Utility.calculate.floatMul(arg1, m) + $Core.Utility.calculate.floatMul(arg2, m)) / m;
}

// 浮点数 减法
function floatSub(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
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
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}

// 浮点数 除法
function floatDiv(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

// 中文数字 大写
function number_chinese(str) {
  var num = parseFloat(str);
  var strOutput = '',
    strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += '00';
  var intPos = num.indexOf('.');
  if (intPos >= 0) {
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (var i = 0; i < num.length; i++) {
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
  }
  return strOutput
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元');
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
  return key.join('_');
}

// 数字不足补零
function PrefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

// 去除 http域名
function dleHttp(str) {
  if (str) {
    return '/' + str.split('/').slice(3).join('/');
  }
  return '';
}

// 随机ID 生成
const a = Math.random().toString(36).substring(2);
console.log(a);
// 72pklaoe38u

// 生成范围内的随机数
max = 20;
min = 10;
var a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a);
// 17

// 随机排列数组 洗牌
var arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr.slice().sort(() => Math.random() - 0.5));
//['C', 'B', 'A', 'D', 'E'];

// 获取随机布尔值
const randomBoolean = () => Math.random() >= 0.5;
console.log(randomBoolean());
//false

// 反转字符串
const reverse = str => str.split('').reverse().join('');
console.log(reverse('javascript'));
//tpircsavaj

// 计算两个给定日期之间的天数
const days = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / 86400000);
result = days(newDate('2020-04-15'), newDate('2021-01-15'));
console.log(result);
//275

// 滚动到页面底部
const goToTop = () => window.scrollTo(0, 0);
goToTop();

// 将文字复制到粘贴板
const copyTextToClipboard = async text => {
  await navigator.clipboard.writeText(text);
};

// 检查右点击
window.oncontextmenu = () => {
  console.log('right click');
};

// 时间格式化
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};

// 获取到 对象中的属性(除开原型)
Object.prototype.test = '111';
const obj = {
  name: '1',
  age: 19,
};
Object.keys(obj).forEach(itme => {
  console.log(itme);
});
