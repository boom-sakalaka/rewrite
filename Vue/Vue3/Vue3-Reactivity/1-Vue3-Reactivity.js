/*
 * @Author: GZH
 * @Date: 2022-02-11 15:16:20
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-11 15:55:19
 * @FilePath: \rewrite\Vue\Vue3\Vue3- Reactivity\1-Vue3 Reactivity.js
 * @Description:  https://www.bilibili.com/video/BV1SZ4y1x7a9?p=1
 */
const targetMap = new WeakMap();
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
  const depsMap = targetMap.get(target);
  if (!depsMap) return;

  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => {
      effect();
    });
  }
}

const product = { price: 5, quantity: 2 };
let total = 0;
let effect = () => {
  total = product.price * product.quantity;
};

track(product, 'price');
console.log(total);
product.price = 10;
trigger(product, 'price');
console.log(total);
