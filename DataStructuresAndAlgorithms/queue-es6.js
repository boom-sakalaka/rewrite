// 优先队列
let Queue = (function () {
  const items = new WeekMap();
  class Queue2 {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let t = q.shift();
      return t;
    }
    front() {
      let q = items.get(this);
      return q[0];
    }
    isEmpty() {
      let q = items.get(this);
      return q.length === 0;
    }
    size() {
      let q = items.get(this);
      return q.length;
    }
  }
  return Queue2;
})();
