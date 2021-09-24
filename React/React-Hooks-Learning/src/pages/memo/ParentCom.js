/*
 * @Author: GZH
 * @Date: 2021-07-02 13:51:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-04 17:56:09
 * @FilePath: \my-app\src\pages\memo\ParentCom.js
 * @Description:
 */

import React, { memo, useState, useCallback, useMemo } from 'react';

const Children = memo(function Children({ name, changeAge }) {
  console.log('childRender');
  return (
    <div>
      {name} <br />
      <button
        onClick={() => {
          changeAge();
        }}
      >
        修改名字
      </button>
    </div>
  );
});

export default function ParentCom() {
  const [name, setName] = useState('张三');
  const [age, setAge] = useState(18);
  const [personObj, setPersonObj] = useState({
    name: 'Tom',
    age: 3,
    address: {
      street: 12,
    },
  });
  const handleChangeAge = useCallback(() => {
    setName('李四' + Math.random());
  }, []);

  // const childName = useMemo(
  //   () => ({
  //     name,
  //   }),
  //   [name]
  // );
  const handlechange = () => {
    const newPer = { ...personObj };
    newPer.address.street = 'rrrr';
    setPersonObj(newPer);
  };
  return (
    <div>
      <h1>{age}</h1> <br />
      <h1>{personObj.address.street}</h1>
      <br />
      <Children name={name} changeAge={handleChangeAge} preson={personObj} />
      <br />
      <button onClick={() => setAge(age + 1)}>修改年龄</button>
      <br />
      <button onClick={handlechange}>修改对象</button>
    </div>
  );
}
