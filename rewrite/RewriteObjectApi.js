/*
 * @Author: GZH
 * @Date: 2021-10-12 16:03:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-12 16:31:59
 * @FilePath: \rewrite\rewrite\RewriteObjectApi.js
 * @Description:  手写 object 对象的api
 */
const obj = {
  name: '梦比优斯',
  age: 111,
  gender: '男',
};
/*========================================================================================  */
/* entries */
Object.prototype.sx_entries = function (obj) {
  const res = [];

  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]]);
  }
  return res;
};
console.log(Object.sx_entries(obj));

/*========================================================================================  */
/* fromEntries */
Object.prototype.sx_fromEntries = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
};

console.log(
  Object.sx_fromEntries([
    ['name', '梦比优斯'],
    ['age', 111],
    ['gender', '男'],
  ])
);

/*========================================================================================  */
/* keys */
Object.prototype.sx_keys = function (obj) {
  const keys = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && res.push(key);
  }
  return keys;
};

console.log(Object.keys(obj));

/*========================================================================================  */
/* values */
Object.prototype.sx_values = function (obj) {
  const values = [];
  for (let key in obj) {
    obj.hasOwnProperty(key) && values.push(obj[key]);
  }
  return values;
};

console.log(Object.sx_values(obj));

/*========================================================================================  */
/* instanceOf */
Object.prototype.sx_instanceOf = function (father, child) {
  const fp = father.prototype;
  let cp = child.__proto__;
  while (cp) {
    if (fp === cp) {
      return true;
    }

    cp = cp.__proto__;
  }
  return false;
};
