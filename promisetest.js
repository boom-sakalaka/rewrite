/*
 * @Author: gzh
 * @Date: 2021-04-12 15:31:01
 * @LastEditTime: 2021-04-12 17:30:34
 * @LastEditors: Please set LastEditors
 * @Description: 学习 手写promise，理解其原理 https://github.com/xieranmaya/blog/issues/3
 * @FilePath: \rewrite\promisetest.js
 */
function Promise(executor) {
  var selt = this;
  selt.status = 'pending'; // Promise当前的状态
  self.data = undefined; // Promise的值
  self.onResolvedCallBack = []; // Promise resolvede的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallBack = []; // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.data = value;
      for (var i = 0; i < self.onResolvedCallBack.length; i++) {
        self.onResolvedCallback[i](value);
      }
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.data = reason;
      for (var i = 0; i < self.onRejectedCallBack.length; i++) {
        self.onRejectedCallBack[i](reason);
      }
    }
  }

  try {
    // 考虑到执行executor的过程中有可能出错，所有需要使用try catch包起来，并且在出错后以catch到的值日reject掉这个Promise
    executor(resolve, reject); // 执行executor
  } catch (e) {
    reject(e);
  }
}

// then 方法接收两个参数 ，onResolved onRejected,分别是Promise成功或者失败后的回调
Promise.prototype.then = function (onResolved, onRejected) {
  var self = this;
  var promise2;
  // 根据标准，如果then的参数不是function ，则我们需要忽略它,所以做如下处理
  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function (value) {
          return value;
        };
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function (reason) {
          throw reason;
        };

  if (self.status === 'resolved') {
    // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    return (promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onResolved(self.data);
        if (x instanceof Promise) {
          // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
          x.then(resolve, reject);
        }
        resolve(x); // 否则，以它的返回值做为promise2的结果
      } catch (e) {
        reject(e); // 如果出错，以捕获到的错误做为promise2的结果
      }
    }));
  }
  // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
  if (self.status === 'rejected') {
    return (promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
      } catch (e) {
        reject(e);
      }
    }));
  }

  if (self.status === 'pending') {
    // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onReject,
    // 只能等到Promise的状态确定后，才能确实如何处理了
    // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处this/self)的回调数组里
    // 逻辑本身 跟第一个if块内的几乎一致

    return (promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallBack.push(function (value) {
        try {
          var x = onResolved(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallBack.push(function (reason) {
        try {
          var x = onRejected(self.data);
          if (x instanceof Promise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};

// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
