/*
 * @Author: GZH
 * @Date: 2021-06-30 16:03:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-06-30 16:05:14
 * @FilePath: \my-app\src\pages\Counter.js
 */
import { useState } from 'react'

export default  function Counter(props){
  console.log('Counter5 render');
  // 这个函数只在初始渲染时执行一次，后续更新状态重新渲染组件时，该函数就不会再被调用
  function getInitState(){
      return {number:props.number};
  }
  let [counter,setCounter] = useState(getInitState);
  return (
      <>
         <p>{counter.number}</p>
         <button onClick={()=>setCounter({number:counter.number+1})}>+</button>
         <button onClick={()=>setCounter(counter)}>setCounter</button>
      </>
  )
}
