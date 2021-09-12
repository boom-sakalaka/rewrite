/*
 * @Author: GZH
 * @Date: 2021-09-12 20:35:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-12 20:40:45
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\server\1-erpress.test.js
 * @Description:
 */
const express = require('express');

// 获取express 实例
const server = express();

// 编写路由
server.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

//监听端口
server.listen(80, () => {
  console.log('server running');
});
