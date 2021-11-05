/*
 * @Author: GZH
 * @Date: 2021-11-01 14:52:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-05 14:06:20
 * @FilePath: \vue-admin\src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/pages/layout/index.vue'),
        name: 'Home',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    title: '首页',
                    isCache: false, // 是否缓存
                    isNav: true
                }
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/common/404.vue'),
        meta: {
            noCache: true
        }
    },
    {
        path: '/redirect',
        name: 'Redirect',
        component: () => import('@/pages/layout/index.vue'),
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/pages/common/redirect.vue'),
                meta: {
                    noCache: true
                }
            }
        ]
    },
    {
        path: '/pageA',
        name: 'pageA',
        component: () => import('@/pages/layout/index.vue'),
        meta: {
            title: 'pageA'
        },
        // redirect: '/pageA/pageA-1',
        children: [
            {
                path: 'pageA-1',
                name: 'pageA-1',
                component: () => import('@/pages/pageA/pageA1/index.vue'),
                meta: {
                    title: 'pageA-1',
                    isCache: true, // 是否缓存
                    activeMenu: 'pageA-1',
                    isNav: true
                }
            },
            {
                path: 'pageA-2',
                name: 'pageA-2',
                component: () => import('@/pages/pageA/pageA2/index.vue'),
                meta: {
                    title: 'pageA-2',
                    isCache: true, // 是否缓存
                    activeMenu: 'pageA-1',
                    isNav: false
                }
            }
        ]
    },
    {
        path: '/pageB',
        name: 'pageB',
        component: () => import('@/pages/layout/index.vue'),
        meta: {
            title: 'pageB'
        },
        children: [
            {
                path: 'pageB-1',
                name: 'pageB-1',
                component: () => import('@/pages/pageB/pageB1/index.vue'),
                meta: {
                    title: 'pageB-1',
                    isCache: true, // 是否缓存
                    activeMenu: 'pageB-1',
                    isNav: true
                }
            },
            {
                path: 'pageB-2',
                name: 'pageB-2',
                component: () => import('@/pages/pageB/pageB2/index.vue'),
                meta: {
                    title: 'pageB-2',
                    isCache: true, // 是否缓存
                    activeMenu: 'pageB-1',
                    isNav: false
                }
            }
        ]
    },
    {
        path: '/pageC',
        name: 'pageC',
        component: () => import('@/pages/layout/index.vue'),
        meta: {
            title: 'pageC'
        },
        children: [
            {
                path: 'pageC-1',
                name: 'pageC-1',
                component: () => import('@/pages/pageC/pageC1/index.vue'),
                meta: {
                    title: 'pageC-1',
                    isCache: false, // 是否缓存
                    isNav: true
                }
            },
            {
                path: 'pageC-2',
                name: 'pageC-2',
                component: () => import('@/pages/pageC/pageC2/index.vue'),
                meta: {
                    title: 'pageC-2',
                    isCache: true, // 是否缓存
                    isNav: true
                }
            },
            {
                path: 'pageC-3',
                name: 'pageC-3',
                component: () => import('@/pages/pageC/pageC3/index.vue'),
                meta: {
                    title: 'page3-3',
                    isCache: true, // 是否缓存
                    isNav: true
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
