import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import('./views/Login/Login.vue'),
    },
    {
      path: '/pages/:views+',
      component: () => import('./views/Layout.vue'),
      children: [
        {
          path: '/pages/home',
          component: () => import('./views/Home/Home.vue')
        }
      ]
    },
  ],
});
