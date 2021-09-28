/*
 * @Author: GZH
 * @Date: 2021-09-28 14:10:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 15:18:00
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\my-loading\directive.js
 * @Description: v-loading 的指令
 */
import Vue from 'vue';
import Loading from './loading.vue';

const Mask = Vue.extend(Loading);

console.warn(Mask);
const loadingDirective = {};

loadingDirective.install = (Vue) => {
  // 显示 消失 loading
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      if (binding.modifiers.fullscreen) {
        insertDom(document.body, el, binding);
      }
    } else {
      el.instance.visible = false;
    }
  };

  const insertDom = (parent, el) => {
    // 将 loading 设为可见
    el.instance.visible = true;

    parent.appendChild(el.mask);
  };

  // 注册 directive 指令
  Vue.directive('loading', {
    // 只会执行一次
    bind: function (el, binding) {
      const mask = new Mask({
        el: document.createElement('div'),
        data: {
          fullscreen: !!binding.modifiers.fullscreen,
        },
      });

      el.instance = mask;
      // 挂载 dom
      el.mask = mask.$el;
      // 若 binding 的值为 truthy 运行 toogleLoading
      binding.value && toggleLoading(el, binding);
    },
    update: function (el, binding) {
      // 若旧不等于新值得时候（一般都是由 true 切换为 false 的时候）
      if (binding.oldValue !== binding.value) {
        // 切换显示或消失
        toggleLoading(el, binding);
      }
    },
    unbind: function (el) {
      // 当组件 unbind 的时候，执行组件销毁
      el.instance && el.instance.$destroy();
    },
  });
};
export default loadingDirective;
