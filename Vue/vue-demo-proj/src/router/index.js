/*
 * @Author: GZH
 * @Date: 2021-07-19 08:36:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-18 15:04:55
 * @FilePath: \vue-demo-proj\src\router\index.js
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Cmtest from '../views/cmtest';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'Home',
    component: Cmtest,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/betterScroll',
    name: 'BetterScroll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "betterScroll" */ '../views/betterScroll.vue'
      ),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
