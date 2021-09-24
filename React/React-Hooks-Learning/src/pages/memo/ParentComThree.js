/*
 * @Author: GZH
 * @Date: 2021-07-02 14:24:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-02 14:44:48
 * @FilePath: \my-app\src\pages\memo\ParentComThree.js
 * @Description:
 */

import React, { useState, useCallback, memo } from 'react';

const ChilderCom = memo(({ obj }) => {
  console.log('childRender');
  return <div>{obj?.name}</div>;
});

// export default function ParentComThree() {
//   // 如果是 state 里面的状态，那么如果没有修改，就不会触发子组件的修改
//   const [obj, setObj] = useState({ name: '张三' });
//   const [num, setNum] = useState(0);
//   const newObj = { ...obj };
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => setNum(num + 1)}>修改数字</button>
//       <ChilderCom obj={newObj} />
//     </div>
//   );
// }

export default function ParentComThree() {
  const [obj, setObj] = useState({ name: '张三' });
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <h1>{obj?.name}</h1>
      <button onClick={() => setNum(num + 1)}>修改数字</button>
      <button onClick={() => setObj({ name: '李四' })}>修改名字</button>
      <ChilderCom obj={obj} />
    </div>
  );
}
