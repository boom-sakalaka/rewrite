/*
 * @Author: GZH
 * @Date: 2021-08-08 15:37:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-08 22:46:07
 * @FilePath: \rewrite\Promise\promise.js
 * @Description:
 */
function Promise(executor) {
  // 保存实例对象的 this值
  const self = this;

  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  // 保存回调
  this.callback = [];

  //resolve 函数
  function resolve(data) {
    // 状态只能改一次
    if (self.PromiseState === 'pending') {
      // 1修改对象的状态
      self.PromiseState = 'fulfilled';
      // 2设置对象结果值
      self.PromiseResult = data;
      // 调用成功的回调函数

      // if (self.callback.onResolved) {
      //   self.callback.onResolved(self.PromiseResult);
      // }
      self.callback.forEach(item => {
        item.onResolved(data);
      });
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

      // 调用失败的回调函数
      self.callback.forEach(item => {
        item.onRejected(data);
      });
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
  //调用回调方法
  if (this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult);
  }

  if (this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult);
  }

  // 判断pending 状态
  if (this.PromiseState === 'pending') {
    // 保存回调函数
    this.callback.push({
      onResolved,
      onRejected,
    });
  }
};
