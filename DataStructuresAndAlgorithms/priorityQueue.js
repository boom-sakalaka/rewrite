/*
 * @Author:gzh
 * @Date: 2021-04-14 16:22:14
 * @LastEditTime: 2021-04-14 16:42:38
 * @LastEditors: Please set LastEditors
 * @Description: 优先队列
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\priorityQueue.js
 */
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  addEle(element, priority) {
    const queueElment = { element, priority };
    if (this.isEmpty()) {
      this.items.push(queueElment);
    } else {
      const findIndex = this.items.findIndex(it => queueElment.priority < it.priority);
      this.items.splice(findIndex, 0, queueElment);
    }
  }

  delQueue() {
    return this.items.shift();
  }
  showFirstEle() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  isEmpty() {
    return !this.items.length;
  }
  toString() {
    return this.items.toString();
  }
}
