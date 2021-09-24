/*
 * @Author: GZH
 * @Date: 2021-06-30 17:03:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-24 15:24:25
 * 执行时机不同，useLayoutEffect 是修改数据后，组件未发生渲染的时候
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\base\UseLayoutEffect.js
 */
import { useLayoutEffect, useEffect, useState, useRef } from 'react';
export default function LayoutEffect() {
  const [color, setColor] = useState('red');

  const refVal = useRef();

  useEffect(() => {
    refVal.current = color;
    console.log('color', color);
  }, [color]);
  return (
    <>
      <div id='myDiv' style={{ background: color }}>
        颜色: {refVal.current}
      </div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  );
}
