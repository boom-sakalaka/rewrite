/*
 * @Author: GZH
 * @Date: 2021-07-15 09:38:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-15 10:35:16
 * @FilePath: \my-app\src\pages\state\index.js
 * @Description:
 * 学习笔记
 * https://segmentfault.com/a/1190000039417644
 * https://juejin.cn/book/6945998773818490884/section/6951186955321376775
 *
 *
 * 对比 函数组件的useState 和类组件的setState, 如果子组件没有加上 pureComponent ，那么不管怎样都会更新子组件
 * 函数组件会有一个默认对比的过程
 */
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// 首字母需要大写
export default function StateSource() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log('监听number的变化' + number);
  }, [number]);
  const handerClick = () => {
    // 跳过自动合并的过程
    // /** 高优先级更新 **/
    // ReactDOM.flushSync(() => {
    //   setNumber(2);
    // });
    // /* 批量更新 */
    // setNumber(1);
    // /* 滞后更新 ，批量更新规则被打破 */
    // setTimeout(() => {
    //   setNumber(3);
    // });
    // 会合并 执行最后一个
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };
  console.log(number);
  return (
    <div>
      <span> {number}</span>
      <button onClick={handerClick}>修改button</button>
    </div>
  );
}
