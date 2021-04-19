/*
 * @Author: your name
 * @Date: 2021-04-14 14:24:29
 * @LastEditTime: 2021-04-19 09:44:31
 * @LastEditors: Please set LastEditors
 * @Description: js 队列和击鼓传花游戏
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\queueCopy.js
 */
// 队列 先进先出
// 利用数组来实现队列
function Queue() {
  this.item = [];
  // 向队列中添加元素
  Queue.prototype.addEle = function (val) {
    return this.item.push(val);
  };
  // 删除队列中的第一个元素
  Queue.prototype.delQueue = function () {
    return this.item.shift();
  };

  // 队列中是否有数据
  Queue.prototype.isEmpty = function () {
    return !this.item.length === 0;
  };

  //显示队列中的数字
  Queue.prototype.size = function () {
    return this.item.length;
  };

  // 显示队列中的第一个元素
  Queue.prototype.showFirstEle = function () {
    return this.item[0];
  };

  // 显示队列中的所有数据
  Queue.prototype.toString = function () {
    return this.item.join(',');
  };
}

// const queueOne = new Queue();
// queueOne.addEle('1');
// queueOne.addEle('2');
// queueOne.addEle('3');
// queueOne.addEle('4');
// queueOne.addEle('5');
// console.log(queueOne.toString());
// console.log(queueOne.isEmpty());
// console.log(queueOne.delQueue());
// console.log(queueOne.toString());
// console.log(queueOne.showFirstEle());
// console.log(queueOne.size());

// 击鼓传花
//{Array：参加游戏人员的名字} nameList
//{number：数到这个数字的人就淘汰} number
const nameList = ['迪迦', '盖亚', '高斯', '戴拿', '阿古茹', '雷欧', '泰罗'];
function passGame(nameList, num) {
  // 新建队列
  const queueList = new Queue();
  if (nameList && Array.isArray(nameList)) {
    for (const v of nameList) {
      queueList.addEle(v);
    }
  }
  while (queueList.size() > 1) {
    for (let i = 0; i < num; i++) {
      queueList.addEle(queueList.delQueue());
    }
    queueList.delQueue();
  }
  return {
    name: queueList.showFirstEle(),
    num: nameList.indexOf(queueList.showFirstEle()) + 1,
  };
}

console.log(passGame(nameList, 5));
