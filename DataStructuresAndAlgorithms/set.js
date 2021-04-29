/*
 * @Author: your name
 * @Date: 2021-04-29 14:56:26
 * @LastEditTime: 2021-04-29 14:56:47
 * @LastEditors: Please set LastEditors
 * @Description: set 集合
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\set.js
 */
class Set {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  get size() {
    return Object.keys(this.items).length;
  }

  get values() {
    return Object.keys(this.items);
  }
}
