<!--
 * @Author: GZH
 * @Date: 2021-11-10 15:11:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 11:58:29
 * @FilePath: \vue-admin-ts\src\layout\Aside\MenusItem\MenusItem.vue
 * @Description: 
-->
<template>
    <template v-for="item in routerList" :key="item.path">
        <el-sub-menu
            v-if="item.hasOwnProperty('children') && item.children?.length! > 0"
            :index="item.path"
        >
            <template #title>
                <el-icon><location /></el-icon>
                <span>{{ item.name }}</span>
            </template>
            <menus-item :routerList="item.children"></menus-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
/* eslint-disable import/no-self-import */
/* eslint-disable import/no-extraneous-dependencies */
import { RouteRecordRaw } from 'vue-router'
import MenusItem from '@/layout/Aside/MenusItem/MenusItem.vue'
// 获取props的值
interface IProps {
    routerList: RouteRecordRaw[]
}

withDefaults(defineProps<IProps>(), {
    routerList: () => [] as RouteRecordRaw[]
})
</script>

<script lang="ts">
export default {
    name: 'MenusItem'
}
</script>

<style lang="scss" scoped></style>
