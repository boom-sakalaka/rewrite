/*
 * @Author: your name
 * @Date: 2021-05-24 21:46:48
 * @LastEditTime: 2021-05-24 21:46:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\react-hook\useEffect.js
 */
const allDeps = [];
let effectCursor = 0;

function useEffect(callback, deps = []) {
  if (!allDeps[effectCursor]) {
    // 初次渲染：赋值 + 调用回调函数
    allDeps[effectCursor] = deps;
    effectCursor += 1;
    callback();
    return;
  }

  const currenEffectCursor = effectCursor;
  const rawDeps = allDeps[currenEffectCursor];
  // 检测依赖项是否发生变化，发生变化需要重新render
  const isChanged = rawDeps.some((dep, index) => dep !== deps[index]);
  // 依赖变化
  if (isChanged) {
    // 执行回调
    callback();
    // 修改新的依赖
    allDeps[effectCursor] = deps;
  }
  // 游标递增
  effectCursor += 1;
}

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
  effectCursor = 0; // 注意将 effectCursor 重置为0
}
