<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:34:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:46:44
 * @FilePath: \vue-demo-proj\src\views\form\index.vue
 * @Description: 
-->
<template>
  <div>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名">
        <kinput v-model="model.userName" placeholder="请输入用户名" />
      </KFormItem>
      <KFormItem label="密码">
        <kinput v-model="model.password" placeholder="请输入密码" />
      </KFormItem>
      <!-- 提交按钮 -->
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import Kinput from './Kinput.vue';
import KFormItem from './KFormItem.vue';
import KForm from './KForm.vue';
export default {
  components: { Kinput, KFormItem, KForm },
  name: 'MyKForm',
  data() {
    return {
      model: {
        userName: 'Tom',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          alert('submit');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
