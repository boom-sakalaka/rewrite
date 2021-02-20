// 第一版
var curry = function (fn) {
  // 获取除了第一个以外的参数
  var args = [].slice.call(arguments, 1);
  return function () {
    // 拼接参数
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

var add = function (a, b) {
  return a + b;
};

var addCurry = curry(add, 1, 2);
console.log(addCurry()); // 3
//或者
var addCurry = curry(add, 1);
console.log(addCurry(2)); // 3
//或者
var addCurry = curry(add);
console.log(addCurry(1, 2)); // 3

// 第二版
