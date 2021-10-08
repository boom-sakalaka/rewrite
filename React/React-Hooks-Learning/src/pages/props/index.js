/*
 * @Author: GZH
 * @Date: 2021-07-15 10:38:13
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-08 15:07:01
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\props\index.js
 * @Description:https://zhuanlan.zhihu.com/p/115407249 props的高级应用 Render Props
 * Render Props的核心思想是：通过一个函数将class组件的state作为props传递给纯函数组件,有点类似于 Vue 组件的slot
 *
 *
 * props类型
 * 1.数据
 * 2. 对象
 * 3.方法
 * 4. 组件
 * 5.渲染函数
 */

import React from 'react';

export default function PorpsSource(props) {
  // 如果组件没有接收别的值，那么props就是空对象，如果组件嵌套了子组件，就会有childer 属性,里面是 React Element 对象
  console.log(props);
  return <div>props</div>;
}
