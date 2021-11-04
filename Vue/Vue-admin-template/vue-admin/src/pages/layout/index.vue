<!--
 * @Author: GZH
 * @Date: 2021-11-03 11:13:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 11:01:48
 * @FilePath: \vue-admin\src\pages\layout\index.vue
 * @Description: 
-->
<script setup lang="ts">
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

<style scoped></style>
