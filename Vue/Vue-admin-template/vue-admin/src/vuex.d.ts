/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/*
 * @Author: GZH
 * @Date: 2021-11-01 22:43:55
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 22:48:47
 * @FilePath: \vue-admin\src\vuex.d.ts
 * @Description:
 */
// vuex.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from '@/store'

declare module '@vue/runtime-core' {
    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
