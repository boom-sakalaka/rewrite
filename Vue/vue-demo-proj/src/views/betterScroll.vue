<!--
 * @Author: GZH
 * @Date: 2021-11-08 10:09:16
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-08 13:45:44
 * @FilePath: \vue-demo-proj\src\views\betterScroll.vue
 * @Description: 
-->
<template>
  <my-scroll @pullDownFn="toRequestData" ref="scrollDom">
    <div class="pullup-content">
      <ul class="pullup-list">
        <li v-for="i of data" :key="i" class="pullup-list-item">
          {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} ` }}
        </li>
      </ul>
      <div class="pullup-tips">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt">Pull up and load more</span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">Loading...</span>
        </div>
      </div>
    </div>
  </my-scroll>
</template>

<script>
import MyScroll from '../components/Scroll.vue';

export default {
  name: 'betterScrollDemo',
  data() {
    return {
      isPullUpLoad: false,
      data: 30,
    };
  },
  components: {
    MyScroll,
  },
  methods: {
    toRequestData() {
      this.isPullUpLoad = true;
      this.ajaxGet().then((res) => {
        console.log(res);
        this.isPullUpLoad = false;
        this.data += res;
        this.$refs.scrollDom.refreDom();
      });
    },
    ajaxGet(/* url */) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(20);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pullup-list {
  padding: 0;
}
.pullup-list-item {
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
.pullup-tips {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>
