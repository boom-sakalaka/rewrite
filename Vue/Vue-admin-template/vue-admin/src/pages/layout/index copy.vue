<!--
 * @Author: GZH
 * @Date: 2021-11-03 11:13:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-09 15:57:12
 * @FilePath: \vue-admin\src\pages\layout\index.vue
 * @Description: 
-->
<!-- <script setup lang="ts">
import { useUserStore } from '@/piniaStore/user'

const store = useUserStore()
</script>

<template>
    <div>layout</div>
    <h1>{{ store.name }}</h1>
    <h1>{{ store.age }}</h1>
    <h1>{{ store.getUserNickName }}</h1>
    <h1>{{ store.getUserNameAndAge }}</h1>
</template>

<style scoped></style> -->

<script setup lang="ts">
import { computed } from 'vue'

import { useRoute, RouteRecordRaw } from 'vue-router'
import { routes } from '@/router' // 导入路由
import Tabs from '@/components/tabs/index.vue'

const currentRout = useRoute()
const viewKey = computed(() => {
    return currentRout.path || Date.now()
})

const menu = computed(() => {
    return routes.filter((item: RouteRecordRaw) => {
        return !['Redirect', '404'].includes(item.name as string)
    })
})

const currentRouteName = computed(() => currentRout.name)
const currentRouteActiveMenu = computed(() => currentRout.meta?.activeMenu || '')
</script>

<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="menu.map((item, index) => index.toString())">
                <el-sub-menu
                    v-for="(item, index) in menu"
                    :key="item.name"
                    :index="index.toString()"
                >
                    <template #title>
                        <el-icon><setting /></el-icon>
                        <span v-if="item.meta">{{ item.meta.title }}</span>
                    </template>
                    <el-menu-item-group v-for="child in item.children || []" :key="child.name">
                        <router-link
                            :class="{
                                active:
                                    child.name === currentRouteName ||
                                    child.name === currentRouteActiveMenu
                            }"
                            v-if="child.meta && child.meta.isNav"
                            :to="{
                                name: child.name
                            }"
                            >{{ child.meta?.title }}</router-link
                        >
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-icon style="margin-right: 15px"><setting /></el-icon>
                    </span>

                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-main>
                <tabs />
                <router-view v-slot="{ Component, route }">
                    <keep-alive>
                        <component
                            v-if="route && route.meta && route.meta.isCache"
                            :is="Component"
                            :key="viewKey"
                        />
                    </keep-alive>
                    <component
                        v-if="route && route.meta && !route.meta.isCache"
                        :is="Component"
                        :key="viewKey"
                    />
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
.el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    line-height: 60px;
}

.el-aside {
    color: var(--el-text-color-primary);
}
a {
    text-decoration: none;
    color: #303133;
    font-size: 14px;
    padding: 10px 0;
    display: block;
    text-align: center;
    &.active {
        background: #409eff;
        color: #fff;
    }
}
:deep(.el-menu-item-group__title) {
    display: none;
}
.el-main {
    padding: 20px 10px;
    :deep(.el-scrollbar) {
        text-align: left;
        padding: 0;
    }
}
</style>
