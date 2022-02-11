/*
 * @Author: GZH
 * @Date: 2022-02-11 16:09:49
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-11 17:08:43
 * @FilePath: \rewrite\Vue\Vue3\Vue3-Reactivity\2-Proxy-and-Reflect.js
 * @Description: 自动实现依赖收集
 */

// function reactive(target) {
//   const handler = {
//     get(target, key, receiver) {
//       console.log('Get was called with key' + key);
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, value, receiver) {
//       console.log('Set was called with key' + key + 'and value =' + value);
//       return Reflect.set(target, key, value, receiver);
//     },
//   };

//   return new Proxy(target, handler);
// }

// const product = reactive({ price: 5, quantity: 2 });

// console.log(product.price);
// product.price = 10;

let targetMap = new WeakMap();
function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }

  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }

  dep.add(effect);
}

function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) return;
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => {
      effect();
    });
  }
}

function reactive(target) {
  const handlers = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (result && oldValue != value) {
        trigger(target, key);
      }
      return result;
    },
  };

  return new Proxy(target, handlers);
}

let product = reactive({ price: 5, quantity: 2 });
let total = 0;

var effect = () => {
  total = product.price * product.quantity;
};

effect();
product.price = 10;
console.log(total);
