/*
 * @Author: GZH
 * @Date: 2021-09-12 20:30:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-13 20:38:55
 * @FilePath: \VueSSR\ssr-demo\src\router\index.js
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// 工厂函数,每次请求返回一个新的实例
export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  });
}
