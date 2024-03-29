/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-09 16:12:47
 * @FilePath: \vue-admin\src\main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import { store, key } from '@/store'
// import '@/assets/scss/index.scss'
import 'element-plus/dist/index.css'
import createPinia from '@/piniaStore/index'
import { ElComponent } from './elementPlusCom'
import ElementPlus from 'element-plus'
// .use(store, key)

const app = createApp(App)

app.use(router).use(createPinia)

// ElComponent.forEach((item) => {
//     app.component(item.name, item)
// })
app.use(ElementPlus)

app.mount('#app')
