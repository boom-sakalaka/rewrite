/*
 * @Author: gzh
 * @Date: 2021-04-02 14:26:26
 * @LastEditTime: 2021-04-14 19:01:53
 * @LastEditors: Please set LastEditors
 * @Description: 链表的实现
 * @FilePath: \rewrite\DataStructuresAndAlgorithms\linkedList.js
 */

// 链表节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 追加元素
  append(element) {
    const node = new Node(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  // 任意位置插入元素
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
    }
    return false;
  }

  // 移除指定位置元素
  removeAt(postion) {
    // 检查越界
    if (position > -1 && position < length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position == 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  // 寻找元素下标
  findIndex(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return index + 1;
      }
      index++;
      current = current.next;
    }
  }

  // 删除指定文档
  remove(element) {
    const index = this.findIndex(element);
    this.removeAt(index);
  }

  isEmpty() {}
}
