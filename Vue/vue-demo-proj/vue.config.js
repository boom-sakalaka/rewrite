/*
 * @Author: your name
 * @Date: 2021-05-17 19:05:11
 * @LastEditTime: 2021-11-18 14:56:28
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo-proj\vue.config.js
 */
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/yunapi/': {
        target: `http://yun.mendaow.com/`, // 代理到 目标路径
        changeOrigin: true,
        pathRewrite: {
          // 修改路径数据
          // ['^' + process.env.VUE_APP_BASE_API]: '', // 举例 '^/api:""' 把路径中的/api字符串删除
        },
      },
      '/mapi/': {
        target: `http://3d.mendaow.com/`, // 代理到 目标路径
        changeOrigin: true,
        pathRewrite: {
          // 修改路径数据
          // ['^' + process.env.VUE_APP_BASE_API]: '', // 举例 '^/api:""' 把路径中的/api字符串删除
        },
      },
    },
  },
  productionSourceMap: false,
};
