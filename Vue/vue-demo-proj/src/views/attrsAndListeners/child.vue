<!--
 * @Author: GZH
 * @Date: 2021-07-18 10:53:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 19:07:54
 * @FilePath: \vue-demo-proj\src\views\attrsAndListeners\child.vue
 * @Description: 
-->
<template>
  <div class="chiled">
    <label>
      <!-- <span v-bind="$attrs" v-on="$listeners">test</span> -->
      <span v-bind="$attrs" @click="toClick">test</span>
      <child-son v-on="$listeners" />
    </label>
  </div>
</template>

<script>
import ChildSon from './childSon.vue';
export default {
  inheritAttrs: false,
  components: {
    ChildSon,
  },
  name: 'child',
  methods: {
    toClick() {
      this.$emit('ChildrenClick', 1);
      this.$emit('ChildrenClickTwo', 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
