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
              path: '/demo2/pages/home',
              component: () => import('./views/demo-2/Home/Home.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/demo3/:views+',
      component: () => import('./views/demo-3/index.vue'),
      children: [
        {
          component: () => import('./views/demo-3/Login/Login.vue'),
          name: 'd3Login',
          path: '/demo3/login',
        },
        {
          component: () => import('./views/demo-3/Login/Login1.vue'),
          name: 'd3Login1',
          path: '/demo3/login1',
        },
        {
          path: '/demo3/pages/:views+',
          component: () => import('./views/demo-3/Layout.vue'),
          children: [
            {
              path: '/demo3/pages/home',
              component: () => import('./views/demo-3/Index/Home.vue'),
            },
            {
              path: '/demo3/pages/applicant',
              component: () => import('./views/demo-3/Index/HomeFrom.vue'),
            },
            {
              path: '/demo3/pages/acce',
              component: () => import('./views/demo-3/index2/Home.vue'),
            },
            {
              path: '/demo3/pages/acce2',
              component: () => import('./views/demo-3/index2/HomeFrom.vue'),
            },
            {
              path: '/demo3/pages/examine',
              component: () => import('./views/demo-3/examine/index.vue'),
            },
            {
              path: '/demo3/pages/addMembers',
              component: () => import('./views/demo-3/addMembers/index.vue'),
            },
          ],
        },
      ],
    },
  ],
});
