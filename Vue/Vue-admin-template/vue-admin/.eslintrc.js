/*
 * @Author: GZH
 * @Date: 2021-11-01 14:08:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-02 15:44:53
 * @FilePath: \vue-admin\.eslintrc.js
 * @Description:
 */
module.exports = {
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
            }
        }
    },
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
        'vue/no-multiple-template-root': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-unresolved': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'no-plusplus': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'e', // for e.returnvalue
                    'ctx', // for Koa routing
                    'req', // for Express requests
                    'request', // for Express requests
                    'res', // for Express responses
                    'response', // for Express responses
                    'state' // for vuex state
                ]
            }
        ],

        'vue/multi-word-component-names': 'off'

        // quotes: ['error', 'double'] // 引号规则为：“双引号”，否则一律按照 “error” 处理（你也可以改成warn试一下）
    }
}
