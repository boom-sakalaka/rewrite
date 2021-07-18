<!--
 * @Author: GZH
 * @Date: 2021-07-18 15:47:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 16:11:14
 * @FilePath: \vue-demo-proj\src\views\event-bus\child.vue
 * @Description: 
-->
<template>
  <div>
    <button @click="toSendMsg">利用事件总线给兄弟组件发送消息</button>
  </div>
</template>

<script>
export default {
  name: 'child1',
  methods: {
    toSendMsg() {
      this.$bus.$emit('event-from-child1', 'some msg from child1');
    },
  },
};
</script>

<style lang="scss" scoped></style>
