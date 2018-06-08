import Vue from 'vue';
import Router from 'vue-router';
import Occupation from '@/components/Occupation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Occupation',
      component: Occupation,
    },
  ],
});
