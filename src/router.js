import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import('./views/demo-2/Login/Login.vue'),
    },
    {
      path: '/pages/:views+',
      component: () => import('./views/demo-2/Layout.vue'),
      children: [
        {
          path: '/pages/home',
          component: () => import('./views/demo-2/Home/Home.vue'),
        },
      ],
    },
  ],
});
