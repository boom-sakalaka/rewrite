/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 10:47:35
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import { store, key } from '@/store'
import '@/assets/scss/index.scss'
import 'element-plus/dist/index.css'
import createPinia from '@/piniaStore/index'

// .use(store, key)

createApp(App).use(router).use(createPinia).mount('#app')
