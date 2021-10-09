import { useMemo, useState } from 'react';

/*
 * @Author: GZH
 * @Date: 2021-10-09 15:54:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-09 16:13:01
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\pages\hooks\useDebounce.js
 * @Description:
 */
export function debounce(fn, time) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}

export function useDebounce(initValue, time) {
  const [value, setValue] = useState(initValue);

  const changeValueFn = useMemo(() => debounce(setValue, time), [time]);
  return [value, changeValueFn];
}
