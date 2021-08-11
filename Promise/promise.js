/*
 * @Author: GZH
 * @Date: 2021-08-08 15:37:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-11 21:15:42
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
      setTimeout(() => {
        self.callback.forEach(item => {
          item.onResolved(data);
        });
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
      setTimeout(() => {
        self.callback.forEach(item => {
          item.onRejected(data);
        });
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
  const self = this;
  // 判断回调函数
  if (typeof onRejected !== 'function') {
    onRejected = reson => {
      throw reson;
    };
  }
  //值传递
  if (typeof onResolved !== 'function') {
    onResolved = value => value;
  }
  return new Promise((resolve, reject) => {
    // 封装函数
    function callback(type) {
      try {
        // 获取回调函数的执行结果
        let result = type(self.PromiseResult);
        if (result instanceof Promise) {
          result.then(
            v => {
              resolve(v);
            },
            r => {
              reject(r);
            }
          );
        } else {
          // 结果的返回状态为成功
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }

    //调用回调方法
    if (this.PromiseState === 'fulfilled') {
      setTimeout(() => {
        callback(onResolved);
      });
    }

    if (this.PromiseState === 'rejected') {
      setTimeout(() => {
        callback(onRejected);
      });
    }

    // 判断pending 状态
    if (this.PromiseState === 'pending') {
      // 保存回调函数
      this.callback.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

// 添加patch 方法
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

// 添加 resolve
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        v => {
          resolve(v);
        },
        r => {
          reject(r);
        }
      );
    } else {
      // 状态设置为成功
      resolve(value);
    }
  });
};

// 添加 reject
Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    reject(value);
  });
};

// all 方法
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        v => {
          // 得知对象的状态是成功
          // 每个promise 对象都成功
          count++;
          arr[i] = v;
          if (count === promises.length) {
            resolve(arr);
          }
        },
        r => {
          reject();
        }
      );
    }
  });
};

//race 方法
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        v => {
          // 得知对象的状态是成功
          // 每个promise 对象都成功
          resolve(v);
        },
        r => {
          reject();
        }
      );
    }
  });
};
