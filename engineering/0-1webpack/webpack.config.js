/*
 * @Author: GZH
 * @Date: 2022-02-18 10:08:43
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-18 11:03:34
 * @FilePath: \rewrite\engineering\0-1webpack\webpack.config.js
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/main.js',
  },
  output: {
    filename: 'bundle_[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /.css$/, // 正则表达式，表示.css后缀的文件
        use: ['style-loader', 'css-loader'], // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
      },
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: './src',
    },
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出的文件名, 默认为 index.html
      template: './src/index.html', // 需处理的文件, 我们的 index.html
    }),
  ],
};
