/*
 * @Author: GZH
 * @Date: 2021-10-12 16:35:47
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-12 16:50:35
 * @FilePath: \rewrite\rewrite\RewriteStringApi.js
 * @Description: 手写String 的api
 */
/*========================================================================================  */
/* slice */
String.prototype.sx_slice = function (start = 0, end) {
  start = start < 0 ? this.length + start : start;
  end = !end && end != 0 ? this.length : end;

  if (start >= end) return '';
  let str = '';
  for (let i = start; i < end; i++) {
    str += this[i];
  }

  return str;
};

const str = 'RewriteObjectApi';
console.log(str.sx_slice(1, 2)); // e
console.log(str.sx_slice(-10)); // eObjectApi
console.log(str.sx_slice(11, 2)); // ''

/*========================================================================================  */
/* substr */
String.prototype.sx_substr = function (start = 0, length) {
  if (length < 0) return '';

  start = start < 0 ? this.length + start : start;
  length = (!length && length !== 0) || length > this.length - start ? this.length : start + length;

  let str = '';
  for (let i = start; i < length; i++) {
    str += this[i];
  }
  return str;
};

console.log(str.sx_substr(3)); // riteObjectApi
console.log(str.sx_substr(3, 3)); // rit
console.log(str.sx_substr(5, 300)); // teObjectApi

/*========================================================================================  */
/* substring */
String.prototype.sx_substring = function (start = 0, end) {
  start = start < 0 ? this.length + start : start;
  end = !end && end !== 0 ? this.length : end;

  if (start >= end) [start, end] = [end, start];
  let str = '';
  for (let i = start; i < end; i++) {
    str += this[i];
  }

  return str;
};

console.log(str.sx_substring(2)); //
console.log(str.sx_substring(-2)); //
console.log(str.sx_substring(-9, 10)); //
console.log(str.sx_substring(5, 1)); //
