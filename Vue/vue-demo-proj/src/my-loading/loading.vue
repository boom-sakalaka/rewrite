<!--
 * @Author: GZH
 * @Date: 2021-09-28 13:33:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 14:27:21
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\my-loading\loading.vue
 * @Description: loading 组件 指令命令使用
-->
<template>
  <div class="loadingBox" v-show="visible">
    <h1>loading......</h1>
  </div>
</template>

<script>
export default {
  name: 'myLoading',
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
.loadingBox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e3e3e3;
  margin: 0;
  font-size: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
