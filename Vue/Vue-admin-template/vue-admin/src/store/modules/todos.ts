/*
 * @Author: GZH
 * @Date: 2021-11-01 23:03:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 23:24:49
 * @FilePath: \vue-admin\src\store\modules\todos.ts
 * @Description:
 */
import { Module } from 'vuex'
import { State } from '@/store'

export type TodoState = {
    name: string
}

export default {
    namespaced: true,
    state: {
        name: 'test'
    },
    mutations: {
        initTodo(state, payload) {
            state.name = payload
        }
    },
    actions: {
        initTodoa({ commit }) {
            setTimeout(() => {
                commit('initTodo', 'gzh')
            })
        }
    }
} as Module<TodoState, State>
