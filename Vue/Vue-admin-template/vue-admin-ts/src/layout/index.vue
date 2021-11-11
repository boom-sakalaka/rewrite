<!--
 * @Author: GZH
 * @Date: 2021-11-09 16:58:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 09:34:34
 * @FilePath: \vue-admin-ts\src\layout\index.vue
 * @Description: 
-->
<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <Aside />
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <el-icon style="margin-right: 15px" class="el-icon-cls"><setting /></el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>View</el-dropdown-item>
                            <el-dropdown-item>Add</el-dropdown-item>
                            <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>Tom</span>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons'
import Aside from './Aside/index.vue'
</script>
<style>
.el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    line-height: 60px;
}

.el-aside {
    color: var(--el-text-color-primary);
}
.el-icon-cls {
    transform: translate(0, 3px);
    box-sizing: border-box;
}
</style>
