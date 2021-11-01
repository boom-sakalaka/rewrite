/*
 * @Author: GZH
 * @Date: 2021-11-01 14:52:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 22:05:50
 * @FilePath: \vue-admin\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from 'components/my-Home.vue'
import About from 'components/myAbout.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
