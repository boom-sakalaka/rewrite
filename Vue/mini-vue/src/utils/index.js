/*
 * @Author: GZH
 * @Date: 2021-12-17 10:17:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-18 17:37:29
 * @FilePath: \mini-vue\src\utils\index.js
 * @Description:
 */
export function isObject(target) {
  return typeof target === 'object' && target !== null;
}

export function isArray(target) {
  return Array.isArray(target);
}

export function isString(target) {
  return typeof target === 'string';
}

export function isNumber(target) {
  return typeof target === 'number';
}

export function isBoolean(target) {
  return typeof target === 'boolean';
}

export function isFunction(target) {
  return typeof target === 'function';
}

export function hasChanged(oldValue, value) {
  return oldValue !== value && !(Number.isNaN(oldValue) && Number.isNaN(value));
}

export function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
