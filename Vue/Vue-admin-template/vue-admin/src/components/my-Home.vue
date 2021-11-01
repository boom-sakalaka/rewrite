<!--
 * @Author: GZH
 * @Date: 2021-11-01 14:54:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 23:22:33
 * @FilePath: \vue-admin\src\components\my-Home.vue
 * @Description: 
-->
<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()

const initName = () => {
    store.dispatch('todos/initTodoa')
}
</script>

<template>
    <div>home</div>
    <p @click="initName">{{ $store.state.todos?.name }}</p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
