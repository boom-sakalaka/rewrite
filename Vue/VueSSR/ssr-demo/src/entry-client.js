const { createApp } = require('./main');

//激活
const { app, router } = createApp();

router.onReady(() => {
  app.$mount('#app');
});
