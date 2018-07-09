import Vue from 'vue';
import Router from 'vue-router';
import Conferences from '@/components/Conferences';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Conferences',
      component: Conferences,
    },
  ],
});
