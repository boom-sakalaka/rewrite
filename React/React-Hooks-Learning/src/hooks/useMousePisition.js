/*
 * @Author: GZH
 * @Date: 2021-07-01 14:15:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 14:29:39
 * @FilePath: \my-app\src\hooks\useMousePisition.js
 * @Description: 获取鼠标的 自定义hook
 */

import React, { useEffect, useState } from 'react';

const useMousePisition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const upDataMousePosition = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', upDataMousePosition);
    return () => {
      document.removeEventListener('mousemove', upDataMousePosition);
    };
  }, []);

  return position;
};

export default useMousePisition;
