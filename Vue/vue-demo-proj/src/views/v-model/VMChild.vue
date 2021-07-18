<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:56:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:05:13
 * @FilePath: \vue-demo-proj\src\views\v-model\VMChild.vue
 * @Description: 
-->
<template>
  <div>
    <h1>children:{{ num }}</h1>
    <button @click="changePData">修改pdata</button>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    changePData() {
      this.$emit('update:num', 10);
    },
  },
};
</script>

<style lang="scss" scoped></style>
