<!--
 * @Author: GZH
 * @Date: 2021-07-18 18:30:05
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:52:54
 * @FilePath: \vue-demo-proj\src\views\form\KFormItem.vue
 * @Description: 
-->
<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{ label }}</label>
    <!-- 显示内部表达元素 -->
    <slot></slot>

    <!-- 错误提示 -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'KFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: '', // error是空说明校验通过
    };
  },
  mounted() {
    this.$on('validate', () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];

      // 校验描述对象
      const desc = { [this.prop]: rules };
      // 创建Schema实例
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          // 校验通过
          this.error = '';
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
