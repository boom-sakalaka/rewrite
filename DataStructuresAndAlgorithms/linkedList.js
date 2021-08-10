/*
 * @Author: gzh
 * @Date: 2021-04-02 14:26:26
 * @LastEditTime: 2021-08-10 15:56:07
 * @LastEditors: GZH
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

  isEmpty() {
    return !this.length;
  }
  size() {
    return this.length;
  }
  // 转换字符串
  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += ` ${current.element}`;
      current = current.next;
    }
    return string;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.toString());
linkedList.append(2);
linkedList.append(6);
linkedList.append(24);
linkedList.append(152);

linkedList.insert(3, 18);
console.log(linkedList.toString());
console.log(linkedList.findIndex(24));

/* ================================================================================ */
/* 链表题目 */

/* 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4 */
function mergetTOWLists(L1, L2) {
  // 创建一个新的链表
  let head = new ListNode();
  // 创建指针
  let cut = head;

  while (L1 && L2) {
    if (L1.val >= L2.val) {
      cut.next = L2;
      L2 = L2.next;
    } else {
      cut.next = L1;
      L1 = L1.next;
    }

    cut = cut.next;
  }

  cut.next = L1.next !== null ? L1 : L2;

  return head.next;
}

/** ==================================================================================================== */
/* 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3 */

const deleteDuplicates = function (head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while (cur != null && cur.next != null) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next;
    } else {
      // 若不重复，继续遍历
      cur = cur.next;
    }
  }
  return head;
};

/** ==================================================================================================== */
/* 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3 */
const deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) {
    return head;
  }
  // dummy 登场
  let dummy = new ListNode();
  // dummy 永远指向头结点
  dummy.next = head;
  // cur 从 dummy 开始遍历
  let cur = dummy;
  // 当 cur 的后面有至少两个结点时
  while (cur.next && cur.next.next) {
    // 对 cur 后面的两个结点进行比较
    if (cur.next.val === cur.next.next.val) {
      // 若值重复，则记下这个值
      let val = cur.next.val;
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (cur.next && cur.next.val === val) {
        // 若有，则删除
        cur.next = cur.next.next;
      }
    } else {
      // 若不重复，则正常遍历
      cur = cur.next;
    }
  }
  // 返回链表的起始结点
  return dummy.next;
};
