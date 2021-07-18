/*
 * @Author: GZH
 * @Date: 2021-07-18 15:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 17:25:34
 * @FilePath: \vue-demo-proj\.eslintrc.js
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [1, 'single'],
  },
};
