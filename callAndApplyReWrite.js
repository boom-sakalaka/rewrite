// 第一版 简单实现
// Function.prototype.call2 = function (content){
//   content.fn = this
//   content.fn ()
//   delete content.fn
// }

// 第二版 获取传递参数 
// Function.prototype.call2 = function (content){
//   content.fn = this;
//   // 获取其余参数
//   const args = []
//   for(let i = 1; i < arguments.length; i++){
//     args.push('arguments['+ i +']')
//   }
//   eval('content.fn('+ args +')')
//   delete content.fn
// }


//第三版本 如果传入的对象为null 改成window对象 / 添加返回值
Function.prototype.call2 = function(content){
  content = content || window
  content.fn = this

  // 获取其余参数
  const args = []
  for(let i = 1; i < arguments.length; i++){
    args.push('arguments['+ i +']')
  }
  const result =  eval('content.fn('+ args +')')
  delete content.fn
  return result
}


// apply 的重写
// Function.prototype.apply2 = function (context, arr) {
//   var context = Object(context) || window;
//   context.fn = this;

//   var result;
//   if (!arr) {
//       result = context.fn();
//   }
//   else {
//       var args = [];
//       for (var i = 0, len = arr.length; i < len; i++) {
//           args.push('arr[' + i + ']');
//       }
//       result = eval('context.fn(' + args + ')')
//   }

//   delete context.fn
//   return result;
// }

// 调用 代码
const a = 'global'
const obj = {
  a: 'local'
}

function bar(name,age){
  return `${this.a} - ${name} - ${age}`
}

console.log(bar.call2(obj,'Tom','2'))