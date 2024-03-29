/*
 * @Author: GZH
 * @Date: 2021-09-07 11:49:41
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-07 12:00:34
 * @FilePath: \rewrite\rewrite\EventEmitter.js
 * @Description: 发布订阅模式
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 实现订阅
  on(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }

  // 删除订阅
  off(type, callBack) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(item => item !== callBack);
  }

  // 只执行一次订阅事件
  once(type, callBack) {
    function fn() {
      callBack();
      this.off(type, fn);
    }
    this.on(type, fn);
  }

  // 触发事件
  emit(type, ...rest) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest));
  }
}

// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
