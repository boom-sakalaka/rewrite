<!--
 * @Author: GZH
 * @Date: 2021-09-21 10:18:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-21 12:02:02
 * @FilePath: \rewrite\Vue\VueSSR\ssr-demo\src\views\Home.vue
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  asyncData({ store, route }) {
    // 约定预取逻辑编写在预取钩子asyncData中
    // 触发 action 后，返回 Promise 以便确定请求结果
    return store.dispatch('getCount');
  },
};
</script>
