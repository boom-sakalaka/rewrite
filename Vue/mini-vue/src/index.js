/*
 * @Author: GZH
 * @Date: 2021-12-17 09:48:38
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-18 15:53:03
 * @FilePath: \mini-vue\src\index.js
 * @Description:
 */
// import { reactive, effect, ref, computed } from './reactivity';

import { h, Text, Fragment, render } from './runtime';

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
// const refVal = (window.refVal = ref('123'));

// const c = (window.c = computed(() => {
//   console.warn('测试');
//   return refVal.value * 2;
// }));

// effect(() => {
//   console.warn(refVal.value);
// });

// runTime  测试 ==================================================================

const vnode = h(
  'div',
  {
    class: 'a b',
    style: {
      border: '1px solid',
      fontSize: '14px',
    },
    onClick: () => console.warn('click'),
    id: 'foo',
    checked: '',
    custom: false,
  },
  [
    h('ul', null, [
      h(
        'li',
        {
          style: {
            color: 'red',
          },
        },
        1
      ),
      h('li', null, 2),
      h(
        'li',
        {
          style: {
            color: 'blue',
          },
        },
        3
      ),
      h(Fragment, null, [h('li', null, 4), h('li')]),
      h('li', null, [h(Text, null, 'hello world')]),
    ]),
  ]
);

render(vnode, document.body);
