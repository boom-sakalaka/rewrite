/*
 * @Author: GZH
 * @Date: 2021-07-18 15:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 15:49:21
 * @FilePath: \vue-demo-proj\src\main.js
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// 事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
