<!--
 * @Author: GZH
 * @Date: 2021-07-18 15:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 18:56:12
 * @FilePath: \vue-demo-proj\src\views\Home.vue
 * @Description: 
-->
<template>
  <div class="home">
    <!-- vue 组件通信中event-bus的使用 -->
    <!-- <event-patent /> -->

    <!-- 使用 $attrs 和 $listeners 来传递消息 -->
    <attr-parent />

    <!-- v-model 的使用 .sync 的使用 Vue3 后修改了 v-model 的用法-->
    <!-- <VMParent /> -->

    <!-- <k-form /> -->
  </div>
</template>

<script>
// import VMParent from './v-model/VMParent.vue';
import AttrParent from './attrsAndListeners/attrParent.vue';
// import EventPatent from './event-bus/EventPatent.vue';
// @ is an alias to /src

// import kForm from './form/index.vue';

export default {
  name: 'Home',
  components: {
    // VMParent,
    AttrParent,
    // EventPatent
    // kForm,
  },
};
</script>
