/*
 * @Author: GZH
 * @Date: 2021-07-02 14:24:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-02 14:35:28
 * @FilePath: \my-app\src\pages\memo\ParentComTwo.js
 * @Description:
 */

import React, { useState, useCallback } from 'react';

// const ChilderCom = () => {
//   return <div></div>;
// };

export default function ParentComTwo() {
  const [num, setNum] = useState(0);

  // 如果限定条件里面没有 num ，那么 console.log 里面就会一直输出 0
  const showNum = useCallback(() => {
    console.log(num);
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        修改数字
      </button>
      <button onClick={showNum}>显示数字</button>
    </div>
  );
}
