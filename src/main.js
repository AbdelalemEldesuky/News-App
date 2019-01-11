// http://eslint.org/docs/user-guide/configuring
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable */ 
new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');