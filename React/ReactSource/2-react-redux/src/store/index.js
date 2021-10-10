/*
 * @Author: GZH
 * @Date: 2021-10-10 22:14:29
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-10 23:25:56
 * @FilePath: \rewrite\React\ReactSource\2-react-redux\src\store\index.js
 * @Description:
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";
// import {createStore, applyMiddleware} from "../kredux";

import isPromise from 'is-promise';

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  // ! 课后补充： combineReducers用法
  // combineReducers({home: countReducer}),
  applyMiddleware(thunk, logger, promise)
);

export default store;

// 如果是第一个中间件的话，next 就是dispatch
function logger({ getState }) {
  return next => action => {
    console.log('*******************************'); //sy-log

    console.log(action.type + '执行了！'); //sy-log

    let prevState = getState();
    console.log('prev state', prevState); //sy-log

    const returnValue = next(action);
    let nextState = getState();
    console.log('next state', nextState); //sy-log

    console.log('*******************************'); //sy-log
    return returnValue;
  };
}

// !next就是聚合函数

function thunk({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

function promise({ dispatch }) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}
