/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 13:40:54
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from '@/store'
import '@/assets/scss/index.scss'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store, key).mount('#app')
