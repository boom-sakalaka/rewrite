/*
 * @Author: GZH
 * @Date: 2021-12-17 10:17:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 13:58:09
 * @FilePath: \mini-vue\src\utils\index.js
 * @Description: 公用的方法
 */
export function isObject(value) {
  return typeof value === 'object' && value !== null;
}
export function isArray(value) {
  return Array.isArray(value);
}

export function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
}
