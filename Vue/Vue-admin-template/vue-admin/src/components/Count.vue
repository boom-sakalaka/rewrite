<!--
 * @Author: GZH
 * @Date: 2021-11-02 15:37:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 13:44:39
 * @FilePath: \vue-admin\src\components\Count.vue
 * @Description: 
-->

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { stateNum } from '@/components/type'

// ref ts 类型定义
const count = ref<stateNum>(0)

// reactive ts 类型定义
type TodoItem = {
    todo: string[]
}
const itemTodo = reactive<TodoItem>({
    todo: ['vue', 'react', 'TypeScript']
})

// computed ts 类型定义
const doubleCount = computed(() => count.value * 2)

// props ts 类型定义
type Props = {
    msg: string
}
defineProps<Props>()

// 函数的ts 类型定义
const addItem = (msg: string): void => {
    itemTodo.todo.push(msg)
}
</script>

<template>
    <div>{{ count }}</div>
    <div>双倍:{{ doubleCount }}</div>
    <div>信息:{{ msg }}</div>

    <br />
    <br />
    <br />
    <div v-for="(item, index) in itemTodo.todo" :key="index">
        {{ item }}
    </div>

    <button @click="addItem('msgclick')">添加</button>
</template>

<style scoped></style>
