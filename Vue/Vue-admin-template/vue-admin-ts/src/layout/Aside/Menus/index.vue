<!--
 * @Author: GZH
 * @Date: 2021-11-10 15:09:45
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-11 09:46:23
 * @FilePath: \vue-admin-ts\src\layout\Aside\Menus\index.vue
 * @Description: 
-->
<template>
    <el-menu router>
        <menus-item :routerList="routerList"></menus-item>
    </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import MenusItem from '@/layout/Aside/MenusItem/MenusItem.vue'

// 获取路由信息
const router = useRouter()
const routerList = computed(() => router.options.routes)

// 菜单的配置参数
// const isCollapse = ref(false)
</script>
<style lang="scss" scoped></style>
