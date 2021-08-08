/*
 * @Author: GZH
 * @Date: 2021-08-08 15:37:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-08 16:05:17
 * @FilePath: \rewrite\Promise\promise.js
 * @Description:
 */
function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

  // 保存实力对象的 this值
  const self = this;

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
Promise.prototype.then = function (onResolved, onRejected) {};
