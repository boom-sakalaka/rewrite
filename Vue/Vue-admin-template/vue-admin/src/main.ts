/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 10:14:56
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from '@/store'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store, key).mount('#app')
