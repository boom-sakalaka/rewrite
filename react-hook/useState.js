/*
 * @Author: your name
 * @Date: 2021-05-24 21:27:50
 * @LastEditTime: 2021-05-24 21:28:08
 * @LastEditors: Please set LastEditors
 * @Description: useState 的简单实现
 * @FilePath: \rewrite\react-hook\useState.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

const states = [];
let cursor = 0;

function useState(initialState) {
  const currenCursor = cursor;
  states[currenCursor] = states[currenCursor] || initialState; // 检查是否渲染过

  function setState(newState) {
    states[currenCursor] = newState;
    render();
  }

  cursor += 1; // 更新游标
  return [states[currenCursor], setState];
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div>
      <div>count1: {count1}</div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>add1 1</button>
        <button onClick={() => setCount1(count1 - 1)}>delete1 1</button>
      </div>
      <hr />
      <div>num2: {num2}</div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>add2 1</button>
        <button onClick={() => setCount2(count2 - 1)}>delete2 1</button>
      </div>
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  cursor = 0; // 重置cursor
}

render(); // 首次渲染
