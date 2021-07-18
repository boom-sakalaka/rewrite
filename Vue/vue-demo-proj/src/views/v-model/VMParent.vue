<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:56:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:03:41
 * @FilePath: \vue-demo-proj\src\views\v-model\VMParent.vue
 * @Description: 
-->
<template>
  <div>
    <h1>{{ pdata }}</h1>
    <VMChild :num.sync="pdata" />
  </div>
</template>

<script>
import VMChild from './VMChild.vue';
export default {
  components: { VMChild },
  data() {
    return {
      pdata: 1,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
