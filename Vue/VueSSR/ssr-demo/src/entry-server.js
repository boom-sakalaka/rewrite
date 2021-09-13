/*
 * @Author: GZH
 * @Date: 2021-09-13 20:45:57
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-13 20:54:14
 * @FilePath: \VueSSR\ssr-demo\src\entry-server.js
 * @Description:
 */
import { createApp } from './main';
// 首屏渲染
// 将来和渲染器打交道
// 创建vue实例
export default context => {
  const { app, router } = createApp(context);

  return new Promise((resolve, reject) => {
    //跳转首屏地址
    router.push(context.url);

    // 等待路由就绪
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
