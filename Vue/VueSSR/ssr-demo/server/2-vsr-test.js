/*
 * @Author: GZH
 * @Date: 2021-09-12 20:44:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-12 20:48:20
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\server\2-vsr-test.js
 * @Description:
 */

// 1.创建vue 实例
const Vue = require('vue');
const app = new Vue({
  template: '<div>hello world!</div>',
});
//2. 获取渲染器实例
const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer();

//3.用渲染器渲染Vue实例
renderer
  .renderToString(app)
  .then(html => {
    console.log(html);
  })
  .catch(err => {
    console.log(err);
  });
