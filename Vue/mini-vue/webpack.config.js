/*
 * @Author: GZH
 * @Date: 2021-12-17 09:58:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-17 09:58:51
 * @FilePath: \mini-vue\webpack.config.js
 * @Description:
 */
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  // devtool: 'inline-cheap-source-map',
  entry: './src/index.js',
  output: {
    filename: 'mini-vue.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // library: 'MiniVue',
    // libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './src/examples',
    publicPath: '/dist',
    watchContentBase: true,
  },
};
