<!--
 * @Author: GZH
 * @Date: 2021-11-08 10:41:27
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-08 13:39:35
 * @FilePath: \vue-demo-proj\src\components\Scroll.vue\index.vue
 * @Description:  滑动组件封装
-->
<template>
  <div class="scroll-wrapper" ref="scrollerRef">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import ObserveDOM from '@better-scroll/observe-dom';
BScroll.use(Pullup).use(ObserveDOM);

export default {
  name: 'scroll',
  mounted() {
    this.initBscroll();
  },
  data() {
    return {};
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$refs.scrollerRef, {
        pullUpLoad: true,
        observeDOM: true, // 开启 observe-dom 插件
      });
      this.bscroll.on('pullingUp', this.pullingUpHandler);
    },

    pullingUpHandler() {
      console.warn('下拉开始');
      this.$emit('pullDownFn');
    },

    refreDom() {
      return new Promise((resolve) => {
        this.bscroll.finishPullUp();
        this.bscroll.refresh();
        resolve();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
