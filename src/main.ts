// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;
import '@/assets/js';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
