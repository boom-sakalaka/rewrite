/*
 * @Author: GZH
 * @Date: 2021-12-17 09:48:38
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 16:17:14
 * @FilePath: \mini-vue\src\index.js
 * @Description:
 */
import { reactive, effect, ref, computed } from './reactivity';

// reactive 测试 ==========================================================
// const objValue = (window.objValue = reactive({
//   a: 1,
//   b: 2,
//   c: {
//     d: 12,
//   },
// }));

// const arrObj = (window.arrObj = reactive([1, 2, 3]));

// effect(() => {
//   effect(() => {
//     console.warn('数组的数据' + arrObj[2]);
//   });

//   console.warn('数组的长度' + arrObj.length);
// });

// effect(() => {
//   console.warn('数组的数据' + arrObj[4]);
// });

// ref 测试 ==================================================================
const refVal = (window.refVal = ref('123'));

const c = (window.c = computed(() => {
  console.warn('测试');
  return refVal.value * 2;
}));

// effect(() => {
//   console.warn(refVal.value);
// });
