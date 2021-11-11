/*
 * @Author: GZH
 * @Date: 2021-11-10 10:44:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-10 15:33:30
 * @FilePath: \vue-admin-ts\.eslintrc.js
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
    env: {
        browser: true,
        es2021: true
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        withDefaults: 'readonly'
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
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
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
        'import/prefer-default-export': 'off',
        'vue/multi-word-component-names': 'off'
    }
}
