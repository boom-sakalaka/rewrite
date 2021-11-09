/*
 * @Author: GZH
 * @Date: 2021-09-12 20:35:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-12 20:53:40
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\server\3-erpress.ssr.js
 * @Description:
 */
const express = require('express');
// 1.创建vue 实例
const Vue = require('vue');
// 获取express 实例
const server = express();
//2. 获取渲染器实例
const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer();
// 编写路由
server.get('/', (req, res) => {
  const app = new Vue({
    template: '<div>{{msg}}</div>',
    data() {
      return {
        msg: 'VUE SSR',
      };
    },
  });

  //3.用渲染器渲染Vue实例
  renderer
    .renderToString(app)
    .then(html => {
      res.send(html);
    })
    .catch(err => {
      res.status(500);
      res.send('Internal Server Error ,500!');
    });
});

//监听端口
server.listen(80, () => {
  console.log('server running');
});
