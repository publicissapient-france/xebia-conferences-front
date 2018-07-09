// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
// import store from './store';
import App from './App';

Vue.config.productionTip = false;

// TODO: this can probably be passed at Vue object initialization
Vue.use(Vuetify);
Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App },
});
