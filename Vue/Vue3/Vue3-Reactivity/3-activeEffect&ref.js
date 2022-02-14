/*
 * @Author: GZH
 * @Date: 2022-02-11 17:33:39
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-11 18:00:05
 * @FilePath: \rewrite\Vue\Vue3\Vue3-Reactivity\3-activeEffect&ref.js
 * @Description:
 */
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }

    dep.add(activeEffect);
  }
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

function reactive(target) {
  const hanlder = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (result && oldValue != value) {
        trigger(target, key); // If this reactive property (target) has effects to rerun on SET, trigger them.
      }
      return result;
    },
  };

  return new Proxy(target, hanlder);
}

function ref(raw) {
  const r = {
    get value() {
      track(r, 'value');
      return raw;
    },
    set value(newVal) {
      raw = newVal;
      trigger(r, 'value');
    },
  };
  return r;
}

function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

let product = reactive({ price: 5, quantity: 2 });
let salePrice = ref(0);
let total = 0;

effect(() => {
  salePrice.value = product.price * 0.9;
});

effect(() => {
  total = salePrice.value * product.quantity;
});

console.log(`Before updated quantity total (should be 9) = ${total} salePrice (should be 4.5) = ${salePrice.value}`);
product.quantity = 3;
console.log(`After updated quantity total (should be 13.5) = ${total} salePrice (should be 4.5) = ${salePrice.value}`);
product.price = 10;
console.log(`After updated price total (should be 27) = ${total} salePrice (should be 9) = ${salePrice.value}`);
