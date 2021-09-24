/*
 * @Author: GZH
 * @Date: 2021-07-15 10:38:13
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-15 11:06:18
 * @FilePath: \my-app\src\pages\props\index.js
 * @Description:https://zhuanlan.zhihu.com/p/115407249 props的高级应用 Render Props
 * Render Props的核心思想是：通过一个函数将class组件的state作为props传递给纯函数组件,有点类似于 Vue 组件的slot
 */

import React from 'react';

export default function PorpsSource(props) {
  // 如果组件没有接收别的值，那么props就是空对象，如果组件嵌套了子组件，就会有childer 属性,里面是 React Element 对象
  console.log(props);
  return <div>props</div>;
}
