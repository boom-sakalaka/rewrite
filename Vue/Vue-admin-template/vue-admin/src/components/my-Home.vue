<!--
 * @Author: GZH
 * @Date: 2021-11-01 14:54:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-02 17:02:26
 * @FilePath: \vue-admin\src\components\my-Home.vue
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const count = computed(() => store.state.count)
const doubleCount = computed(() => store.state.count * 2)

const initName = () => {
    store.dispatch('todos/initTodoa')
}
</script>

<template>
    <div>home</div>
    <p @click="initName">{{ $store.state.todos?.name }}</p>

    <h1>count</h1>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
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
