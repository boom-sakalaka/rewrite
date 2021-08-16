/*
 * @Author: your name
 * @Date: 2021-05-05 10:25:11
 * @LastEditTime: 2021-05-12 18:45:29
 * @LastEditors: Please set LastEditors
 * @Description: 深拷贝
 * @FilePath: \rewrite\deepClone.js
 */

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

function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
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
