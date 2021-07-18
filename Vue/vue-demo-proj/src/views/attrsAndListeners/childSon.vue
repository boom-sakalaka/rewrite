<!--
 * @Author: GZH
 * @Date: 2021-07-18 19:05:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 19:08:09
 * @FilePath: \vue-demo-proj\src\views\attrsAndListeners\childSon.vue
 * @Description: 
-->
<template>
  <div>
    <button @click="clickOne">one</button>
    <button @click="clickTwo">two</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickOne() {
      this.$emit('ChildrenClick', 1);
    },
    clickTwo() {
      this.$emit('ChildrenClickTwo', 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
