<!--
 * @Author: your name
 * @Date: 2021-04-30 16:09:43
 * @LastEditTime: 2021-04-30 16:14:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\interview\interview.md
-->

##### 谈谈前端性能优化的方法有哪些？

Css: 多个 css 文件合并减少 https 请求、将 css 文件放到页面最上方、移除空的 css 规则、
充分利用 css 的继承属性，减少重复 css 规则（less/sass 的提取公共变量）雪碧图
Js: 函数防抖节流、 图片懒加载、 谈到 回流和重塑、事件委托 前端服务端渲染 SSR 加分
网络： 减少 https 请求 静态资源文件 CDN 托管
webpack 打包优化 包括 TreeShaking 异步组件和加载、分离公共库打包、chunk 相关，js 和 css 文件分开打包 组件按需加载等

1. css 有那些选择器 以及样式的优先级是怎样的?
2. display 有哪些值?
3. Position 有那些值，有什么不同?
4. display: none 和 visibility:hidden 的区别?
5. 请列举 Html 语义化标签。
6. 请列举实现水平垂直居中的方法?
7. 如何清除浮动?
8. 什么是 flex 弹性布局以及如何使用?
9. 简述移动端适配的 rem 原理?
10. 什么是闭包以及闭包的作用?
11. 当有多个异步请求要同时完成之后才执行回调该如何编写代码?多个异步请求只要有一个执行成功就执行回调方法又怎么写？
12. Js 中如何捕获处理异常?
13. Js 中 == 和 === 的区别?
14. Js 中声明变量加 var 和不加的区别?
15. JSON 字符串如何转换成 JSON 对象? 16.如何终止当前 for 循环？如何跳过当次 for 循环？
16. export 和 export default 的区别?
17. Var 和 let/const 定义的变量作用域有何不同,是否挂载在 window 上(浏览器中)？
18. JavaScript 规定了几种语言类型？
19. JavaScript 中 基础类型和引用类型的区别
20. null 和 undefined 的区别 22.什么是事件冒泡？什么是事件捕获？
21. event.preventDefault() 和 event.stopPropagation()方法之间的区别？
22. == 和 === 的区别？ 25.如何判断变量是否是数组?
23. 函数中 this 的指向？箭头函数中的 this 指向？
24. 使用代码或者画图来描述原型链?
25. 简单介绍 git？(本地仓库/远程仓库/提交/推送/ssh)
26. let a = 1; console.log(window.a);输出的是什么?
