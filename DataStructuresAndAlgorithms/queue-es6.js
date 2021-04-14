/*
 * @Author: your name
 * @Date: 2021-03-23 09:07:33
 * @LastEditTime: 2021-04-14 15:08:43
 * @LastEditors: Please set LastEditors
 * @Description: 队列的es6 版本
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\queue-es6.js
 */
class Queue {
  constructor(items) {
    this.items = items || [];
  }

  addEle(element) {
    this.items.push(element);
  }

  delQueue() {
    return this.items.shift();
  }

  showFirstEle() {
    return this.items[0];
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return !this.items.length;
  }

  toString() {
    return this.items.toString();
  }
}
const queueOne = new Queue();
queueOne.addEle('1');
queueOne.addEle('2');
queueOne.addEle('3');
queueOne.addEle('4');
queueOne.addEle('5');
console.log(queueOne.toString());
console.log(queueOne.isEmpty());
console.log(queueOne.delQueue());
console.log(queueOne.toString());
console.log(queueOne.showFirstEle());
console.log(queueOne.size());
