/*
 * @Author: GZH
 * @Date: 2021-11-04 10:36:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-04 11:00:42
 * @FilePath: \vue-admin\src\piniaStore\user.ts
 * @Description:
 */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia'

interface IUserState {
    name: string
    age: number
}

// 另外一个pinia 实例
export const useStore = defineStore({
    id: 'otherState',
    state: () => ({
        count: 5
    })
})

// 另外一个pinia 实例
export const useUserStore = defineStore({
    id: 'user',
    state: (): IUserState => ({
        name: 'zhansan',
        age: 12
    }),
    getters: {
        getUserNickName(state) {
            return `${state.name}nickName`
        },
        getUserNameAndAge(state) {
            const store = useStore()
            return `name: ${state.name}-----age: ${state.age}----count: ${store.count}`
        }
    },
    actions: {}
})
