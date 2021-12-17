/*
 * @Author: GZH
 * @Date: 2021-12-17 10:16:04
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 14:32:51
 * @FilePath: \mini-vue\src\reactivity\reactive.js
 * @Description: reactive 方法
 */

import { isObject, hasChanged, isArray } from '../utils';
import { track, trigger } from './effect';

// 缓存好当前的 响应式对象,如果一个对象已经生产了响应式对象，直接从缓存内取得返回
const reactiveMap = new WeakMap();

// 关于嵌套，obj.a.b,obj.a 的时候就会触发 getter，把 obj.a.b给变成响应式对象，
//也就是说Vue3的响应式是用到才给劫持的，这比vue2的一次递归到底节省性能
export function reactive(target) {
  // reactive 只处理对象
  if (!isObject(target)) {
    return target;
  }
  // 如果对象已经是响应式对象了，就没必要再处理了 reactive(reactive({a:1}))
  if (isReactive(target)) {
    return target;
  }

  // 取得已经缓存的响应式对象
  if (reactiveMap.has(target)) {
    return reactiveMap.get(target);
  }

  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      // 为了判断这个对象是不是响应式对象
      if (key === '__isReactive') {
        return true;
      }

      // console.warn('触发getter');
      track(target, key);

      // 反射的作用 https://segmentfault.com/a/1190000039365544
      const res = Reflect.get(target, key, receiver);

      // 递归处理响应式对象
      return isObject(res) ? reactive(res) : res;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      // 针对数组的处理
      const oldLenght = target.length;
      // 赋值
      // console.warn('触发setter');
      const res = Reflect.set(target, key, value, receiver);
      // 如果旧数据和新数据不一样才处理收集到的依赖
      if (hasChanged(value, oldValue)) {
        // console.warn('数据变动了');
        trigger(target, key);
        if (isArray(target) && target.length !== oldLenght) {
          // trigger(target, 'length');
          // console.warn('数组长度变了');
          trigger(target, 'length');
        }
      }

      return res;
    },
  });
  reactiveMap.set(target, proxy);
  return proxy;
}

// 确认是否是 响应式数据
export function isReactive(target) {
  return !!(target && target.__isReactive);
}
