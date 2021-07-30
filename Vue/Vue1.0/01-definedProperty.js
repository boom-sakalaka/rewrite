/*
 * @Author:
 * @Date: 2021-07-30 17:03:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-30 17:17:18
 * @FilePath: \rewrite\Vue\Vue1.0\01-definedProperty.js
 * @Description: Vue definedProperty 的  响应式 实现原理
 */

function defineReactive(obj, key, val) {
  observe(val);

  Object.defineProperty(obj, key, {
    get() {
      console.log('get');
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set');
        observe(newVal);
        val = newVal;
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return;
  }

  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]));
}

function set(obj, key, val) {
  defineReactive(obj, key, val);
}

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 } };
observe(obj);
// obj.foo;
// obj.foo = 'foot';
// obj.bar.a;
// obj.baz.a = 111;
set(obj, 'dong', 'dong');
obj.dong;
obj.dong = 'ffff';
