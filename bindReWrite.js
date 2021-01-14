// 例子 bind的使用
// var foo = {
//   value: 1
// };

// function bar() {
//   console.log(this.value);
// }

// // 返回了一个函数
// var bindFoo = bar.bind(foo); 

// bindFoo(); // 1

// 实现 第一版本
// Function.prototype.bind2 = function(content){
//   const self = this
//   return function() {
//     return self.apply(content)
//   }
// }

// 第二版 添加 传递的参数
Function.prototype.bind2 = function (content) {
  const self = this
  // 获取到 arguments 
  const asgs = Array.prototype.splice.call(arguments,1)
  return function() {
    let nextAsgs = Array.prototype.splice.call(arguments,0)
    return self.apply(content,asgs.concat(nextAsgs))
  }
}


// 实例
const value = 'global'
const foo = {
  value: 'local'
};

function bar(name,age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

// 返回了一个函数
const bindFoo = bar.bind2(foo);
bindFoo('Tom', 2)