<!--
 * @Author: GZH
 * @Date: 2021-11-05 09:42:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-05 14:12:31
 * @FilePath: \vue-admin\src\components\tabs\index.vue
 * @Description: 
-->
<script setup lang="ts">
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import { computed, reactive, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElScrollbar } from 'element-plus'
import { useTabsStore, ITabsItem } from '@/piniaStore/tabs'

const route = useRoute()
const router = useRouter()
const store = useTabsStore()
const tabs = computed(() => store.tabs)

// 右键菜单的位置
const positionContext = reactive({
    left: 0,
    top: 0
})

// 监听路由的变化，如果新路由不在当前的tabs中，新增进去
watch(
    () => route.name,
    () => {
        // 获取当前路由的tabs下标
        const index = tabs.value.findIndex((item) => {
            return item.name === route.name
        })
        if (index < 0) store.handleAddRoute(route)
    },
    {
        immediate: true
    }
)

// 当前的路由名字
const currentRouteName = computed(() => {
    return route.name
})

const handleCloseOther = () => {
    // 如果当前的路由与右击的路由不一致，则跳转到右击页签的路由
    if (currentRouteName.value !== tabs.value[currentContextIndex.value].name) {
        router.push({
            name: tabs.value[currentContextIndex.value].name,
            query: tabs.value[currentContextIndex.value].query,
            params: tabs.value[currentContextIndex.value].params
        })
    }
    store.handelCloseOther(currentContextIndex.value)
}

// 关闭全部
const handleCloseAll = () => {
    router.push({
        name: 'Home'
    })
    store.handleCloseAll()
}

const handleClose = (item: ITabsItem, index: number) => {
    store.handleClose(index)
    // 如果关闭的是当前路由，则跳转到tabs的最后一个路由
    const isCurrentRoute = item.name === currentRouteName.value
    isCurrentRoute &&
        router.push({
            name: tabs.value[tabs.value.length - 1].name,
            query: tabs.value[tabs.value.length - 1].query,
            params: tabs.value[tabs.value.length - 1].params
        })
}
const scrollContainer = ref<InstanceType<typeof ElScrollbar> | null>(null)
const handleScroll = (e: any) => {
    const eventDelta = e.wheelDelta || -e.deltaY * 40
    const $scrollWrapper = scrollContainer.value!.wrap as any
    $scrollWrapper.scrollLeft -= eventDelta / 4
}
const contentVisible = ref(false)
const currentContextIndex = ref(0)
const handleOpenContext = (e: any, item: ITabsItem, index: number) => {
    currentContextIndex.value = index
    contentVisible.value = true
    positionContext.left = e.x
    positionContext.top = e.y
}
watch(contentVisible, (val: boolean) => {
    const _fn = () => {
        contentVisible.value = false
    }
    if (val) {
        window.addEventListener('click', _fn)
    } else {
        window.removeEventListener('click', _fn)
    }
})
</script>

<template>
    <el-scrollbar
        id="scrollBar"
        ref="scrollContainer"
        class="margin-top-10 scroll-container"
        @mousewheel.prevent="handleScroll"
    >
        <span
            v-for="(item, index) in tabs"
            :key="item.name"
            :class="{ active: currentRouteName === item.name }"
            @contextmenu.prevent="(e) => handleOpenContext(e, item, index)"
        >
            <router-link
                :to="{
                    name: item.name,
                    params: item.params,
                    query: item.query
                }"
                >{{ item.title }}</router-link
            >
            <i
                class="el-icon-close"
                @click="handleClose(item, index)"
                v-if="item.name !== 'Home'"
            />
        </span>
    </el-scrollbar>
    <ul
        v-if="contentVisible"
        class="context-menu"
        :style="{
            left: `${positionContext.left}px`,
            top: `${positionContext.top}px`
        }"
    >
        <li
            v-if="currentContextIndex !== 0"
            @click="handleClose(tabs[currentContextIndex], currentContextIndex)"
        >
            关闭
        </li>
        <li @click="handleCloseOther">关闭其他</li>
        <li @click="handleCloseAll">关闭所有</li>
    </ul>
</template>
<style lang="scss" scoped>
.context-menu {
    position: fixed;
    width: 100px;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 2;
    text-align: center;
    border: 1px solid #606266;
    border-bottom: none;
    padding: 0;
    li {
        height: 30px;
        cursor: pointer;
        line-height: 30px;
        border-bottom: 1px solid #606266;
        list-style: none;
    }
}
.el-scrollbar {
    padding: 0 10px;
    line-height: 30px;
    height: 40px;
    white-space: nowrap;
    position: relative;
    width: 100%;
    overflow: auto !important;
    :deep(.el-scrollbar__view) {
        white-space: nowrap;
        span {
            display: inline-block;
            width: 160px;
            text-align: center;
            background: #fff;
            border-radius: 8px 8px 0 0;
            border: 1px solid #ccc;
            box-sizing: border-box;
            position: relative;
            color: #606266;
            a {
                color: #606266;
                display: inline-block;
                width: 100%;
                text-decoration: none;
                font-size: 14px;
            }
            &.active {
                // color: #409eff !important;
                border-color: #409eff;
                a {
                    color: #409eff;
                }
            }
            .el-icon-close {
                position: absolute;
                right: 5px;
                top: 9px;
                opacity: 0;
                cursor: pointer;
            }
            &:hover {
                border-color: #409eff;
                .el-icon-close {
                    opacity: 1;
                    transition: all 0.5s;
                }
            }
        }
    }
}
</style>
