/*
 * @Author: gzh
 * @Date: 2021-03-30 23:20:13
 * @LastEditTime: 2021-03-30 23:33:53
 * @LastEditors:gzh
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\stack.js
 */
// 封装栈
function Stack() {
  // 栈中属性
  this.items = [];

  // 栈中的相关的操作
  // 把数据压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };

  // 从栈中取数据
  Stack.prototype.pop = function () {
    return this.items.pop();
  };

  //查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  // 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length;
  };

  // 获取栈中的元素
  Stack.prototype.toSting = function () {
    return this.items.join('  ');
  };
}

var s = new Stack();
s.push(20);
s.push(1);
s.push(19);
console.log(s.toSting());

// s.pop()
// console.log(s.toSting())
console.log(s.peek());
console.log(s.isEmpty());
