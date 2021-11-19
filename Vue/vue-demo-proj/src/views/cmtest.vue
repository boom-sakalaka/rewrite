<!--
 * @Author: GZH
 * @Date: 2021-07-19 08:36:00
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-19 14:09:30
 * @FilePath: \vue-demo-proj\src\views\cmtest.vue
 * @Description: 
-->
<template>
  <div>
    test

    <button @click="startRecognize">123</button>
    <button @click="hShow">横屏</button>
    <button @click="lShow">竖屏</button>
  </div>
  <!-- <div>111</div> -->
</template>

<script>
/* eslint-disable no-undef */
let scan = null;
export default {
  name: 'cmtest',

  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    if (window.plus) {
      this.startRecognize();
    } else {
      document.addEventListener('plusready', this.startRecognize, false);
    }
  },
  methods: {
    startRecognize() {
      console.warn(window.plus);
      let that = this;
      if (!window.plus) return;
      // scan = new plus.barcode.create('bcid');
      scan = plus.barcode.create('bcid', [plus.barcode.QR], {
        top: '60px',
        left: '0px',
        width: '100%',
        height: '100%',
        position: 'static',
      });
      plus.webview.currentWebview().append(scan);
      console.log('创建扫描控件---------', scan);
      // 开始扫描
      console.log('开始扫描');
      that.startScan();
      scan.onmarked = onmarked;
      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = 'QR';
            break;
          case plus.barcode.EAN13:
            type = 'EAN13';
            break;
          case plus.barcode.EAN8:
            type = 'EAN8';
            break;
          default:
            type = '其它' + type;
            break;
        }
        console.log('扫描数据', type, result, file);
        result = result.replace(/\n/g, '');
        alert(result);
        //关闭
        that.msg = result;
        scan.close();
      }
    },
    //开始扫描
    startScan() {
      console.warn(1);
      if (!window.plus) return;

      scan.start();
    },
    //关闭扫描
    cancelScan() {
      if (!window.plus) return;
      scan.cancel();
    },
    //关闭条码识别控件
    closeScan() {
      if (!window.plus) return;
      scan.close();
    },

    hShow() {
      plus.screen.unlockOrientation(); //解除屏幕方向的锁定，但是不一定是竖屏；
      plus.screen.lockOrientation('landscape-primary');
    },
    lShow() {
      plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏
    },
  },
};
</script>

<style scoped></style>
