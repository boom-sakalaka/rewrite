/*
 * @Author: GZH
 * @Date: 2021-10-09 16:13:21
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-09 16:19:40
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\hooks\debounceTest.js
 * @Description:
 */
import React from 'react';
import { useDebounce } from './useDebounce';

export default function DebounceTest() {
  const [value, setValue] = useDebounce('', 1000);

  return (
    <div>
      value的值:---{value}
      <div>
        <input
          onChange={e => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
