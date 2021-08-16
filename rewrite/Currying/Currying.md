#### 函数柯里化的定义

- 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
- 例如 VUE 源码中的 渲染真实 Dom 的 path 函数，就是使用了函数柯里化的技巧，在调用 createPatchFunction 方法的时候就抹除了平台差异性，这样就节省了很多 if else 的判断，因为这些判断已经在调用 createPatchFunction 的时候处理过了，return 回来的 patch 方法就可以直接调用了。

```
function add(a, b) {
    return a + b;
}
// 执行 add 函数，一次传入两个参数即可
add(1, 2) // 3
// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2) // 3
```

- 参数复用 本质上是降低通用性，提高适用性

```
// 示意而已
function ajax(type, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.send(data);
}

// 虽然 ajax 这个函数非常通用，但在重复调用的时候参数冗余
ajax('POST', 'www.test.com', "name=kevin")
ajax('POST', 'www.test2.com', "name=kevin")
ajax('POST', 'www.test3.com', "name=kevin")


// 利用 curry
var ajaxCurry = curry(ajax);

// 以 POST 类型请求数据
var post = ajaxCurry('POST');
post('www.test.com', "name=kevin");

// 以 POST 类型请求来自于 www.test.com 的数据
var postFromTest = post('www.test.com');
postFromTest("name=kevin");
```

#### 柯里化之后的函数传给 map 等，提高易用性，减少代码量 函数语意更明确

```
var person = [{name: 'kevin'，age: 11}, {name: 'daisy',age:12}]
// 取对象中的name
var name = person.map(function (item) {
    return item.name;
})
```

#### 使用柯里化函数处理

- 这里使用柯里化函数获取值的好处就是 提高了代码的复用率和明确语意
- 如果我们没有使用柯里化函数，那么我们下次想获取对象中的 age，是不是又要再写一次 map 中的回调呢，如果使用了柯里化后的函数，就可以修改 key 的值，直接获取到 age，这样就达到了提高代码复用率的作用。
- 同时 map 回调中的 'name'直接就表明了我要获取的是 name 的值，这样代码的意思也就一目了然了。

```
var prop = curry(function (key, obj) {
    return obj[key]
});

var name = person.map(prop('name'))
```

#### 模拟实现 柯里化函数

```
// 第一版
var curry = function (fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

var addFnc = function (a, b) {
  return a + b;
};

var addCurry = curry(add, 1, 2);
addCurry(); // 3
//或者
var addCurry = curry(add, 1);
addCurry(2); // 3
//或者
var addCurry = curry(add);
addCurry(1, 2); // 3
```

- 实际还未达到要求
