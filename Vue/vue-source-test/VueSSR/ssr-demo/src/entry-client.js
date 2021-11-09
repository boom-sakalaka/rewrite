/*
 * @Author: GZH
 * @Date: 2021-09-21 10:18:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-21 12:10:55
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\src\entry-client.js
 * @Description:
 */
import { createApp } from './main';

// 激活
const { app, router, store } = createApp();

// 还原store.state
// renderer会把它放到window.__INITIAL_STATE__
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
