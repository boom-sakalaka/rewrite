/*
 * @Author: GZH
 * @Date: 2021-07-01 14:14:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 16:04:57
 * @FilePath: \my-app\src\pages\MousePosition.js
 * @Description: react hook 获取鼠标位置
 */
import React from 'react';
import useMousePisition from '../hooks/useMousePisition';

const MousePosition = () => {
  const { x, y } = useMousePisition();
  return (
    <div>
      <h1>x: {x}</h1>
      <h1>y: {y}</h1>
    </div>
  );
};

export default MousePosition;
