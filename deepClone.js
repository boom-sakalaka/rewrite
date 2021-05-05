/*
 * @Author: your name
 * @Date: 2021-05-05 10:25:11
 * @LastEditTime: 2021-05-05 10:48:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rewrite\deepClone.js
 */
// /*
//  * @Author: your name
//  * @Date: 2021-05-05 10:25:11
//  * @LastEditTime: 2021-05-05 10:39:47
//  * @LastEditors: Please set LastEditors
//  * @Description: 深拷贝
//  * @FilePath: \rewrite\deepClone.js
//  */

const obj = {
  name: '张三',
  age: 20,
  color: ['红色', '蓝色', '黑色'],
  friend: {
    name: 'tom',
  },
};
// const newObj = obj;
// newObj.name = '李四';
// console.log(obj.name);

function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // for in for of 介绍 https://www.zhangxinxu.com/wordpress/2018/08/for-in-es6-for-of/
  for (let key in obj) {
    // 只递归复制对象本身的属性，不包括原型的属性(优化性能)
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}

const newObj = deepClone(obj);
newObj.color.push('绿色');
newObj.friend.name = 'jon';
console.log(obj);
console.log(newObj);
