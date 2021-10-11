export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const middlewareChain = middlewares.map(middleware => middleware(midApi));

    // dispatch被加强了
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      //  返回加强之后的dispatch
      dispatch,
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

/* 示例 帮助理解聚合函数 */

// function f1(arg) {
//   console.log('f1', arg);
//   return arg;
// }
// function f2(arg) {
//   console.log('f2', arg);
//   return arg;
// }
// function f3(arg) {
//   console.log('f3', arg);
//   return arg;
// }

// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return args => args;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => {
//     console.log(a, b);
//     return (...args) => a(b(...args));
//   });
// }

// let res = compose(f1, f2, f3)('omg');
