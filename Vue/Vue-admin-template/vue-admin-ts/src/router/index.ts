/*
 * @Author: GZH
 * @Date: 2021-11-09 16:55:29
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-12 10:22:58
 * @FilePath: \vue-admin-ts\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        name: 'Home',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        path: '/pageA',
        name: 'pageA',
        component: Layout,
        meta: {
            title: 'pageA'
        },
        // redirect: '/pageA/pageA-1',
        children: [
            {
                path: 'pageA-1',
                name: 'pageA-1',
                component: () => import('../views/pageA/pageA1/index.vue'),
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
                component: () => import('../views/pageA/pageA2/index.vue'),
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
        component: Layout,
        meta: {
            title: 'pageB'
        },
        children: [
            {
                path: 'pageB-1',
                name: 'pageB-1',
                component: () => import('../views/pageB/pageB1/index.vue'),
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
                component: () => import('../views/pageB/pageB2/index.vue'),
                meta: {
                    title: 'pageB-2',
                    isCache: true, // 是否缓存
                    activeMenu: 'pageB-1',
                    isNav: false
                },
                children: [
                    {
                        path: 'pageB-2-1',
                        name: 'pageB-2-1',
                        component: () => import('../views/pageB/pageB2/index.vue'),
                        meta: {
                            title: 'pageB-2-1',
                            isCache: true, // 是否缓存
                            activeMenu: 'pageB-1-1',
                            isNav: false
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/pageC',
        name: 'pageC',
        component: Layout,
        meta: {
            title: 'pageC'
        },
        children: [
            {
                path: 'pageC-1',
                name: 'pageC-1',
                component: () => import('../views/pageC/pageC1/index.vue'),
                meta: {
                    title: 'pageC-1',
                    isCache: false, // 是否缓存
                    isNav: true
                }
            },
            {
                path: 'pageC-2',
                name: 'pageC-2',
                component: () => import('../views/pageC/pageC2/index.vue'),
                meta: {
                    title: 'pageC-2',
                    isCache: true, // 是否缓存
                    isNav: true
                }
            },
            {
                path: 'pageC-3',
                name: 'pageC-3',
                component: () => import('../views/pageC/pageC3/index.vue'),
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
    history: createWebHistory(),
    routes
})

router.beforeEach(() => {
    router.addRoute({
        path: '/about',
        name: 'about',
        component: Layout
    })
})

export default router
