/*
 * @Author: GZH
 * @Date: 2021-11-01 14:52:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 13:43:13
 * @FilePath: \vue-admin\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/layout/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
