/*
 * @Author: GZH
 * @Date: 2021-09-12 20:30:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-21 12:03:47
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\src\main.js
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false;

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options;
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
});

export function createApp(context) {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    context, // 用于和外面renderer交互
    render: h => h(App),
  });

  return { app, router, store };
}
