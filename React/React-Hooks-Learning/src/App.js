/*
 * @Author: GZH
 * @Date: 2021-06-30 15:54:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-08 15:20:28
 * @FilePath: \rewrite\React\React-Hooks-Learning\src\App.js
 *  学习链接  https://juejin.cn/book/6945998773818490884/section/6959910136202657823
 */
import './App.css';
// import Counter from './pages/Counter';
// import MemoTest from './pages/MemoTest';
// import UseReducerTest from './pages/UseReducerTest'
// import UseLayoutEffect from './pages/base/UseLayoutEffect';
// import MousePosition from './pages/MousePosition';
// import ParentCom from './pages/memo/ParentCom';
// import ParentComTwo from './pages/memo/ParentComTwo';
// import ParentComThree from './pages/memo/ParentComThree';
// import JsxSource from './pages/jsxSource/index';
// import StateSouce from './pages/state/index';
// import PropsSource from './pages/props/index';
import Rform from './pages/Rform';
// import BigData from './pages/bigData';

// import ReactRouterTest from './pages/mini-router/index.js';
// import FormData from './pages/FormData/index';

import TabDemo from './pages/Tabs/Tab-Demo';

function App() {
  return (
    <div className='App'>
      {/* <Counter number={3}/> */}
      {/* memo useMemo useCallback 的使用  加上了useFomatList的使用，配合useMemo useCallBack 提高性能*/}
      {/* <MemoTest /> */}
      {/* UseReducer 的使用 类似于redux */}
      {/* <UseReducerTest /> */}
      {/* <UseLayoutEffect /> */}
      {/* <MousePosition /> */}
      {/* <ParentCom /> */}
      {/* <ParentComThree /> */}

      {/* jsx 解析原理 */}
      {/* <JsxSource /> */}

      {/* state 原理相关 -- 合并更新和如何打破合并更新,(同步异步的玄学问题)*/}
      {/* <StateSouce /> */}

      {/* porps的原理相关 */}
      {/* <PropsSource>
        <div>123</div>
      </PropsSource> */}

      {/* react 表单 */}
      <Rform />

      {/* 大数据时间分片 */}
      {/* <BigData /> */}

      {/* 实现react的  mini-router */}
      {/* <ReactRouterTest /> */}

      {/* 自定义表格组件 */}
      {/* <FormData /> */}

      {/*  自己封装的Tabs 组件 */}
      {/* <TabDemo /> */}
    </div>
  );
}

export default App;
