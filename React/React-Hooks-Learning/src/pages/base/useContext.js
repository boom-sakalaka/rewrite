/*
 * @Author: GZH
 * @Date: 2021-06-30 16:58:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-01 11:34:36
 * 用于 父子组件的传值，也可以适用于全局状态的传递，例如用户的登录信息等
 * @FilePath: \my-app\src\pages\useContext.js
 */
import React, { useReducer, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const initialState = 0;
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 };
    default:
      break;
  }
}

const CounterContext = createContext();
// 第一种获取 CounterContext 方法：不使用 hook
function SubCounter_one() {
  return (
    <CounterContext.Consumer>
      {value => (
        <>
          <p>{value.state.number}</p>
          <button onClick={() => value.dispatch({ type: 'ADD' })}>+</button>
        </>
      )}
    </CounterContext.Consumer>
  );
}
// 第二种获取 CounterContext 方法：使用 hook ，更简洁
function SubCounter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
    </>
  );
}
/* class SubCounter extends React.Component{
    static contextTypes = CounterContext
    this.context =  {state, dispatch}
} */

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, () => ({ number: initialState }));
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <SubCounter />
    </CounterContext.Provider>
  );
}
ReactDOM.render(<Counter />, document.getElementById('root'));
