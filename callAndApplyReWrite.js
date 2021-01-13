// 第一版 简单实现
// Function.prototype.call2 = function (content) {
//   content.fn = this
//   content.fn()
//   delete content.fn
// }

Function.prototype.call2 = function (content){
  content.fn = this
  content.fn ()
  delete content.fn
}

// 第二版
// Function.prototype.call2 = function(content){
//   content.fn = this
//   // 获取其余参数
//   var args = [];
//   for(var i = 1,len=arguments.length;i < len; i++){
//     args.push('arguments['+ i +']')
//   }
//   eval('content.fn('+ args +')')
// }


// 调用
const a = 2
const obj = {
  a: 1
}

function bar(){
  console.log(this.a)
}
bar.call2(obj)