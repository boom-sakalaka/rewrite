<!--
 * @Author: GZH
 * @Date: 2021-07-19 08:36:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-28 15:50:26
 * @FilePath: \rewrite\Vue\vue-demo-proj\src\views\About.vue
 * @Description: 
-->
<template>
  <div v-loading.fullscreen="visibale">test</div>
  <!-- <div>111</div> -->
</template>

<script>
export default {
  name: 'about',
  mounted() {
    // 1. 指令模式
    setTimeout(() => {
      this.visibale = false;
    }, 3000);

    // 2. 服务模式
    // let loading = this.$loading({ fullscreen: true });
    // setTimeout(() => {
    //   loading.close();
    // }, 1000);
  },
  data() {
    return {
      visibale: true,
    };
  },
};
</script>

<style scoped></style>
