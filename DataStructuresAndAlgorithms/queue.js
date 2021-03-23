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
