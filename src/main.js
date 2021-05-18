import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import naver from 'vue-naver-maps';
import '@/fontawesome/fontawesome.js';

Vue.use(naver, {
  clientID: 'f624qx5iiw',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
