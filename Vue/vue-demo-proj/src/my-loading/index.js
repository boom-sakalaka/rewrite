/*
 * @Author: GZH
 * @Date: 2021-09-28 14:09:04
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 15:43:24
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\my-loading\index.js
 * @Description:
 */

import directive from './directive';
import server from './server';

export default {
  // 下列使用的是 统一挂载和单独挂载的区别
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = server;
  },
  directive,
  server,
};
