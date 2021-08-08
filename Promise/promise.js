/*
 * @Author: GZH
 * @Date: 2021-08-08 15:37:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-08 21:43:52
 * @FilePath: \rewrite\Promise\promise.js
 * @Description:
 */
function Promise(executor) {
  // 保存实例对象的 this值
  const self = this;

  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

  //resolve 函数
  function resolve(data) {
    // 状态只能改一次
    if (self.PromiseState === 'pending') {
      // 1修改对象的状态
      self.PromiseState = 'fulfilled';
      // 2设置对象结果值
      self.PromiseResult = data;
    }
  }

  // reject 函数
  function reject(data) {
    // 状态只能改一次
    if (self.PromiseState === 'pending') {
      // 1修改对象的状态
      self.PromiseState = 'rejected';
      // 2设置对象结果值
      self.PromiseResult = data;
    }
  }

  try {
    // 同步调用执行器函数
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// 添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  if (this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult);
  }

  if (this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult);
  }
};
