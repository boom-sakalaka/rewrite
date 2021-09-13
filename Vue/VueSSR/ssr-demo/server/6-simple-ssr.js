/*
 * @Author: GZH
 * @Date: 2021-09-13 20:04:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-13 20:18:13
 * @FilePath: \VueSSR\ssr-demo\server\6-simple-ssr.js
 * @Description:
 */
// 创建express实例
const express = require('express');

const app = express();

// 导入Vue
const Vue = require('vue');

// 创建渲染器
const { createRenderer } = require('vue-server-renderer');

const renderer = createRenderer();

// 路由 现在还由express 管理
app.get('/', async (req, res) => {
  // 构建渲染页面的内容
  // 问题1： 没法交互
  // 问题3： 同构开发问题
  const vm = new Vue({
    data() {
      return {
        name: 'Tom',
      };
    },
    template: '<div>{{name}}</div>',
  });

  try {
    // 渲染： 得到html字符串
    const Html = await renderer.renderToString(vm);
    res.send(Html);
  } catch (error) {
    res.status(500).send('服务器内部错误');
  }
});

app.listen(3000);
