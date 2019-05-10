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
            },
          ],
        },
      ],
    },
    {
      path: '/demo3/:views+',
      component: () => import('./views/demo-3/index.vue'),
      children: [
        // 申请人
        {
          component: () => import('./views/demo-3/Login/Login.vue'),
          name: 'd3Login',
          path: '/demo3/login',
        },
        // 受理人
        {
          component: () => import('./views/demo-3/Login/Login1.vue'),
          name: 'd3Login1',
          path: '/demo3/login1',
        },
        // 审定人
        {
          component: () => import('./views/demo-3/Login/Login2.vue'),
          name: 'd3Login2',
          path: '/demo3/login2',
        },
        {
          path: '/demo3/pages/:views+',
          component: () => import('./views/demo-3/Layout.vue'),
          children: [
            {
              path: '/demo3/pages/home', // 申请人
              component: () => import('./views/demo-3/Index/Home.vue'),
            },
            {
              path: '/demo3/pages/applicant',
              component: () => import('./views/demo-3/Index/HomeFrom.vue'),
            },
            {
              path: '/demo3/pages/acce', // 受理人
              component: () => import('./views/demo-3/index2/Home.vue'),
            },
            {
              path: '/demo3/pages/acce2',
              component: () => import('./views/demo-3/index2/HomeFrom.vue'),
            },
            {
              path: '/demo3/pages/exam', // 审定人
              component: () => import('./views/demo-3/index3/Home.vue'),
            },
            {
              path: '/demo3/pages/exam2',
              component: () => import('./views/demo-3/index3/HomeFrom.vue'),
            },
            {
              path: '/demo3/pages/examine',
              component: () => import('./views/demo-3/examine/index.vue'),
            },
            {
              path: '/demo3/pages/addMembers',
              component: () => import('./views/demo-3/addMembers/index.vue'),
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
