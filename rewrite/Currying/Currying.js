// 第一版 只能传递两次参数，没有判断最后一个函数的参数

// var curry = function (fn) {
//   // 获取除了第一个以外的参数
//   var args = [].slice.call(arguments, 1);
//   return function () {
//     // 拼接参数
//     var newArgs = args.concat([].slice.call(arguments));
//     return fn.apply(this, newArgs);
//   };
// };

// var add = function (a, b) {
//   return a + b;
// };

// var addCurry = curry(add, 1, 2);
// console.log(addCurry()); // 3
// //或者
// var addCurry = curry(add, 1);
// console.log(addCurry(2)); // 3
// //或者
// var addCurry = curry(add);
// console.log(addCurry(1, 2)); // 3

// 第二版
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn = curry(function (a, b, c) {
  return [a, b, c];
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn("a")("b")("c"); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]
