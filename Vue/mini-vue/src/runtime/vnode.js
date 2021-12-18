/*
 * @Author: GZH
 * @Date: 2021-12-18 14:32:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-18 15:12:11
 * @FilePath: \mini-vue\src\runtime\vnode.js
 * @Description: 虚拟dom,vue h函数的作用就是生成，它接受3个参数， type ： 类型 props： 属性 ，children： 嵌套的内容
 */

import { isArray, isNumber, isString } from '../utils';
// import { isReactive } from '../reactivity';

export const ShapeFlags = {
  ELEMENT: 1, // 00000001
  TEXT: 1 << 1, // 00000010
  FRAGMENT: 1 << 2, // 00000100
  COMPONENT: 1 << 3, // 00001000
  TEXT_CHILDREN: 1 << 4, // 00010000
  ARRAY_CHILDREN: 1 << 5, // 00100000
  CHILDREN: (1 << 4) | (1 << 5), //00110000
};

export const Text = Symbol('Text');
export const Fragment = Symbol('Fragment');

/**
 *
 * @param {string | Object | Text | Fragment} type
 * @param {Object | null} props
 * @param {string | number | Array | null} children
 * @returns VNode
 */
export function h(type, props, children) {
  let shapeFlag = 0;

  if (isString(type)) {
    shapeFlag = ShapeFlags.ELEMENT;
  } else if (type === Text) {
    shapeFlag = ShapeFlags.TEXT;
  } else if (type === Fragment) {
    shapeFlag = ShapeFlags.FRAGMENT;
  } else {
    shapeFlag = ShapeFlags.COMPONENT;
  }

  if (isString(children) || isNumber(children)) {
    shapeFlag |= ShapeFlags.TEXT_CHILDREN;
    children = children.toString();
  } else if (isArray(children)) {
    shapeFlag |= ShapeFlags.ARRAY_CHILDREN;
  }

  return {
    type,
    props,
    children,
    shapeFlag,
  };
}
