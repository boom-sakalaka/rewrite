/*
 * @Author: GZH
 * @Date: 2021-11-09 16:29:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-09 17:09:45
 * @FilePath: \vue-admin-ts\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
