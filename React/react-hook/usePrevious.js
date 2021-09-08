/*
 * @Author: GZH
 * @Date: 2021-09-08 13:36:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-08 13:43:02
 * @FilePath: \rewrite\React\react-hook\usePrevious.js
 * @Description:
 */

// 保存上一次修改的值 关键的点在于 useEffect 渲染的时机，dom渲染完后才会给ref.current赋值，这时候dom已经渲染完成，ref.current的值虽然是最新的
// 不过再次修改是触发不了组件render的了。
// useEffect 和 useLayoutEffect 的区别--- 执行时机
const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
