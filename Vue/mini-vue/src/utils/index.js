/*
 * @Author: GZH
 * @Date: 2021-12-17 10:17:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 16:18:27
 * @FilePath: \mini-vue\src\utils\index.js
 * @Description: 公用的方法
 */
export function isObject(value) {
  return typeof value === 'object' && value !== null;
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
}

const camelizeRE = /-(\w)/g;
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
