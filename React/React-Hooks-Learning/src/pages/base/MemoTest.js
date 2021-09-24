/*
 * @Author: GZH
 * @Date: 2021-06-30 16:13:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 11:31:22
 * @Description: memo useMemo useCallback  的配合使用
 * @FilePath: \my-app\src\pages\MemoTest.js
 */
import React, { useState, memo, useMemo, useCallback } from 'react';
import useFormatList from '../hooks/useFormatList';

/**
 * 两种 memo 的写法
 */
// function SubCounter({onClick,data}){
//     console.log('SubCounter render');
//     return (
//         <button onClick={onClick}>{data.number}</button>
//     )
// }
// SubCounter = memo(SubCounter);

const SubCounter = memo(function ({ onClick, data }) {
  console.log('SubCounter render');
  return <button onClick={onClick}>{data.number}</button>;
});

export default function Counter6() {
  console.log('Counter render');
  const [name, setName] = useState('计数器');
  const [number, setNumber] = useState(0);

  let data = { number };
  data = useMemo(() => ({ number }), [number]);
  const list = ['a', 'b', 'c'];
  const newList = useFormatList(list);

  // const addClick = ()=>{
  //     setNumber(number+1);
  // }; // 直接传 函数 或者对象  就算使用了 memo 也会触发子组件的更新
  const addClick = useCallback(() => setNumber(number + 1), [number]);
  return (
    <>
      <div className='list'>
        {newList.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <SubCounter data={data} onClick={addClick} />
    </>
  );
}
