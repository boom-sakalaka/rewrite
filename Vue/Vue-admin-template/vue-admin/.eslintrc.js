/*
 * @Author: GZH
 * @Date: 2021-11-01 14:08:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-01 14:39:32
 * @FilePath: \vue-admin\.eslintrc.js
 * @Description:
 */
module.exports = {
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly'
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        // 'plugin:vue/essential',
        'plugin:vue/vue3-essential',
        'airbnb-base',
        'plugin:prettier/recommended' // 添加 prettier 插件
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-multiple-template-root': 'off'
        // quotes: ['error', 'double'] // 引号规则为：“双引号”，否则一律按照 “error” 处理（你也可以改成warn试一下）
    }
}
