/*
 * @Author: GZH
 * @Date: 2021-11-01 10:02:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-09 16:17:13
 * @FilePath: \vue-admin\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
        // Components({
        //     resolvers: [ElementPlusResolver()]
        // })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, 'src/components')
        }
    }
})
