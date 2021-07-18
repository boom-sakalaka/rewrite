<!--
 * @Author: GZH
 * @Date: 2021-07-18 17:27:43
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 19:05:01
 * @FilePath: \vue-demo-proj\src\views\attrsAndListeners\attrParent.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <Child name="testName" :aData="a" @click="onFnc" /> -->
    <Child
      name="testName"
      :aData="a"
      @ChildrenClick="onFnc"
      @ChildrenClickTwo="onFncTwo"
    />
  </div>
</template>

<script>
import Child from '@/views/attrsAndListeners/child.vue';
export default {
  name: 'attrParent',
  data() {
    return {
      a: 1,
    };
  },
  components: {
    Child,
  },
  methods: {
    onFnc(val) {
      console.log('parent on click', val);
    },
    onFncTwo(val) {
      console.log('parent on click Tow', val);
    },
  },
};
</script>
