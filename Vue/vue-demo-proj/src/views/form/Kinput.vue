<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:36:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:51:53
 * @FilePath: \vue-demo-proj\src\views\form\Kinput.vue
 * @Description: 
-->
<template>
  <div>
    <!-- 管理数据实现双向绑定 -->
    <input :type="type" :value="value" v-bind="$attrs" @input="onInput" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'kInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      // 通知父级执行校验
      this.$parent.$emit('validate');
    },
  },
};
</script>

<style lang="scss" scoped></style>
