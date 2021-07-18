<!--
 * @Author: GZH
 * @Date: 2021-07-18 16:04:05
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 16:11:35
 * @FilePath: \vue-demo-proj\src\views\event-bus\child2.vue
 * @Description: 
-->
<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    // 监听事件
    this.$bus.$on('event-from-child1', (msg) => {
      console.log(msg);
    });
  },
};
</script>

<style lang="scss" scoped></style>
