/* eslint-disable symbol-description */
/*
 * @Author: GZH
 * @Date: 2021-11-01 22:03:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 23:20:56
 * @FilePath: \vue-admin\src\store\index.ts
 * @Description:
 */
// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import todos, { TodoState } from './modules/todos'

export interface State {
    count: number
    todos?: TodoState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    modules: {
        todos
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}
