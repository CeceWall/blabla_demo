import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo2/:views+',
      component: () => import('./views/demo-2/index.vue'),
      children: [
        {
          component: () => import('./views/demo-2/Login/Login.vue'),
          name: '登录',
          path: '/demo2/login',
        },
        {
          path: '/demo2/pages/:views+',
          component: () => import('./views/demo-2/Layout.vue'),
          children: [
            {
              path: '/demo2/pages/step1',
              component: () => import('./views/demo-2/Step1/index.vue'),
            },
            {
              path: '/demo2/pages/step2',
              component: () => import('./views/demo-2/Step2/index.vue'),
            },
            {
              path: '/demo2/pages/choose',
              component: () => import('./views/demo-2/Choose/index.vue'),
            },
            {
              path: '/demo2/pages/auth',
              component: () => import('./views/demo-2/Auth/index.vue'),
            },
            {
              path: '/demo2/pages/home',
              component: () => import('./views/demo-2/Home/Home.vue'),
            },
            {
              path: '/demo2/pages/auth-step1',
              component: () => import('./views/demo-2/auth-step1/index.vue'),
            },
            {
              path: '/demo2/pages/auth-step2',
              component: () => import('./views/demo-2/auth-step2/index.vue'),
            }
          ],
        },
      ],
    },
  ],
});
