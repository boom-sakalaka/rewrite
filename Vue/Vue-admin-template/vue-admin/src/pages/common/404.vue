<!--
 * @Author: GZH
 * @Date: 2021-11-04 11:52:55
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 11:52:56
 * @FilePath: \vue-admin\src\pages\common\404.vue
 * @Description: 
-->
<template>
    <div>抱歉，你访问的页面不存在~</div>
    <el-button @click="back">返回上一页</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        return {
            back() {
                router.go(-1)
            }
        }
    }
})
</script>
