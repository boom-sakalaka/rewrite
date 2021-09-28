/*
 * @Author: GZH
 * @Date: 2021-07-18 15:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 15:49:57
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\main.js
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
// import router from './krouter'; // 自定义 Vue-router
import router from './router';
import store from './store';
import myloading from './my-loading';

// 注册自己的v-on 指令
Vue.use(myloading.directive);
// 注册 $loading
Vue.prototype.$loading = myloading.server;

Vue.config.productionTip = false;
// 事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
