/*
 * @Author: your name
 * @Date: 2021-04-22 21:22:25
 * @LastEditTime: 2021-04-22 21:27:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\Vue\Vue3\proxy-demo.js
 */
// const data = {
//     name: 'zhangsan',
//     age: 20,
// }
const data = ['a', 'b', 'c'];

const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    // 只处理本身（非原型的）属性
    const ownKeys = Reflect.ownKeys(target);
    if (ownKeys.includes(key)) {
      console.log('get', key); // 监听
    }

    const result = Reflect.get(target, key, receiver);
    return result; // 返回结果
  },
  set(target, key, val, receiver) {
    // 重复的数据，不处理
    if (val === target[key]) {
      return true;
    }

    const result = Reflect.set(target, key, val, receiver);
    console.log('set', key, val);
    // console.log('result', result) // true
    return result; // 是否设置成功
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key);
    console.log('delete property', key);
    // console.log('result', result) // true
    return result; // 是否删除成功
  },
});
