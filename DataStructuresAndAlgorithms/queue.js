/*
 * @Author: your name
 * @Date: 2021-03-30 23:20:13
 * @LastEditTime: 2021-03-30 23:29:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\queue.js
 */
//普通队列;
function Queue() {
  let items = []; // 初始化用来存储队列元素的数组
  this.enqueue = function (element) {
    items.push(element); // 向队列底部添加元素
  };
  this.dequeue = function () {
    return items.shift(); // 移除队列顶部的第一个元素并返回
  };
  this.front = function () {
    return itmes[0]; // 仅返回顶部的第一个元素
  };
  this.isEmpty = function () {
    return itmes.length === 0; // 判断队列是否为空
  };
  this.size = function () {
    return items.length; // 返回队列的长度
  };
  this.toString = function () {
    return items.join(',');
  };
}

let queue = new Queue();

queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(queue.toString());

// 击鼓传花
//{Array：参加游戏人员的名字} nameList
//{number：数到这个数字的人就淘汰} number

function passGame(nameList, number) {
  //    创建一个队列
  const queue = new Queue();

  //    将所有人放入到队列中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  //    当只有一个人的时候终止游戏
  while (queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      //    把队列的第一个人放入到队尾
      queue.enqueue(queue.dequeue());
    }
    // 直接从队列中删除number对应的这个人，
    queue.dequeue();
  }

  return {
    name: queue.front(), //    最终获胜的人
    num: nameList.indexOf(queue.front()) + 1, //    最终获胜人在原来队伍中的第几个
  };
}
