/*
 * @Author: GZH
 * @Date: 2021-09-12 20:30:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-13 20:44:22
 * @FilePath: \VueSSR\ssr-demo\src\main.js
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';

Vue.config.productionTip = false;

export function createApp(context) {
  const router = createRouter();
  const app = new Vue({
    router,
    context, // 用于和外面renderer交互
    render: h => h(App),
  });

  return { app, router };
}
