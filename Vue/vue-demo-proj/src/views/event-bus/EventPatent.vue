<!--
 * @Author: GZH
 * @Date: 2021-07-18 15:42:28
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-18 16:10:44
 * @FilePath: \vue-demo-proj\src\views\event-bus\EventPatent.vue
 * @Description: 
-->
<template>
  <div>
    <Child />
    <Child2 />
  </div>
</template>

<script>
import Child from '../event-bus/child.vue';
import Child2 from '../event-bus/child2.vue';
export default {
  name: 'eventPatent',
  components: { Child, Child2 },
};
</script>

<style lang="scss" scoped></style>
