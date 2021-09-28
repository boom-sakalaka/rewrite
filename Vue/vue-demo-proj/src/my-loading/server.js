/*
 * @Author: GZH
 * @Date: 2021-09-28 15:34:12
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 15:35:15
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\my-loading\server.js
 * @Description:
 */
import Vue from 'vue';
import loadingVue from './loading.vue';

const LoadingConstructor = Vue.extend(loadingVue);
// 定义变量，若使用的是全屏 loading 那就要保证全局的 loading 只有一个
let fullscreenLoading;

// 在调用了 close 之后就会移除该元素并销毁组件
LoadingConstructor.prototype.close = function () {
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
  }, 3000);
};

const Loading = (options = {}) => {
  // 若调用 loading 的时候传入了 fullscreen 并且 fullscreenLoading 不为 falsy
  // fullscreenLoading 只会在下面赋值，并且指向了 loading 实例
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }
  // 这里就不用说了吧，和指令中是一样的
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options,
  });
  let parent = document.body;
  // 直接添加元素
  parent.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
  });
  // 若传入了 fullscreen 参数，则将实例存储
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  // 返回实例，方便之后能够调用原型上的 close() 方法
  return instance;
};
export default Loading;
