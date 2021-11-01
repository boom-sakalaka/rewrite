/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 16:05:01
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

createApp(App).use(router).mount('#app')
