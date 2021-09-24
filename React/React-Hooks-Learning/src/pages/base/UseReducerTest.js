/*
 * @Author: GZH
 * @Date: 2021-06-30 16:37:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 11:31:51
 * 类似于redux
 * @FilePath: \my-app\src\pages\useReducerTest.js
 */
import { useReducer } from 'react';

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { number: state.number + 1 };
    case 'decrement':
      return { number: state.number - 1 };
    default:
      throw new Error();
  }
}
function init(initialState) {
  return { number: initialState };
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      Count: {state.number}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
