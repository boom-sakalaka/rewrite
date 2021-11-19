<!--
 * @Author: GZH
 * @Date: 2021-07-18 15:39:19
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-18 15:02:08
 * @FilePath: \vue-demo-proj\src\views\Home.vue
 * @Description: 
-->
<template>
  <div class="home">
    <!-- vue 组件通信中event-bus的使用 -->
    <!-- <event-patent /> -->

    <!-- 使用 $attrs 和 $listeners 来传递消息 -->
    <!-- <attr-parent /> -->

    <!-- v-model 的使用 .sync 的使用 Vue3 后修改了 v-model 的用法-->
    <!-- <VMParent /> -->
    1
    <!-- <k-form /> -->
    <button @clikc="startRecognize">点击扫码</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import VMParent from './v-model/VMParent.vue';
// import AttrParent from './attrsAndListeners/attrParent.vue';
// import EventPatent from './event-bus/EventPatent.vue';
// @ is an alias to /src

// import kForm from './form/index.vue';
/* eslint-disable no-undef */
export default {
  name: 'Home',
  async created() {
    // const result = await this.getData(3);
    // console.warn(result);
  },
  data() {
    return {
      msg: '',
    };
  },
  components: {
    // VMParent,
    // AttrParent,
    // EventPatent
    // kForm,
  },
  methods: {
    getData(data) {
      return new Promise((resolve, reject) => {
        if (data === 1) {
          setTimeout(() => {
            resolve('getdata success');
          }, 1000);
        } else {
          setTimeout(() => {
            reject('getdata error');
          }, 1000);
        }
      });
    },
    startRecognize() {
      console.warn(1);
      // let that = this;
      // if (!window.plus) return;
      // // scan = new plus.barcode.create('bcid');
      // let scan = plus.barcode.create('bcid', [plus.barcode.QR], {
      //   top: '60px',
      //   left: '0px',
      //   width: '100%',
      //   height: '100%',
      //   position: 'static',
      // });
      // plus.webview.currentWebview().append(scan);
      // console.log('创建扫描控件---------', scan);
      // // 开始扫描
      // console.log('开始扫描');
      // that.startScan();
      // scan.onmarked = onmarked;
      // function onmarked(type, result, file) {
      //   switch (type) {
      //     case plus.barcode.QR:
      //       type = 'QR';
      //       break;
      //     case plus.barcode.EAN13:
      //       type = 'EAN13';
      //       break;
      //     case plus.barcode.EAN8:
      //       type = 'EAN8';
      //       break;
      //     default:
      //       type = '其它' + type;
      //       break;
      //   }
      //   console.log('扫描数据', type, result, file);
      //   result = result.replace(/\n/g, '');
      //   alert(result);
      //   //关闭
      //   that.msg = result;
      //   scan.close();
      // }
    },
  },
};
</script>
