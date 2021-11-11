/*
 * @Author: GZH
 * @Date: 2021-11-09 16:29:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-10 15:12:48
 * @FilePath: \vue-admin-ts\vite.config.ts
 * @Description:
 */
/* eslint-disable global-require */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, 'src/components')
        }
    },
    css: {
        postcss: {
            plugins: [
                // 前缀追加
                require('autoprefixer')({
                    overrideBrowserslist: [
                        'Android 4.1',
                        'iOS 7.1',
                        'Chrome > 31',
                        'ff > 31',
                        'ie >= 8',
                        '> 1%'
                    ],
                    grid: true
                }),
                require('postcss-flexbugs-fixes')
            ]
        }
    }
})
