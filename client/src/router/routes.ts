import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/Home.vue') },
      { path: '/about', component: () => import('pages/AppPages/About.vue') },
      {
        path: '/about2',
        component: () => import('pages/AppPages/AboutModular.vue'),
      },
      {
        path: '/details',
        component: () => import('pages/AppPages/Details.vue'),
      },      
      {
        path: '/login',
        component: () => import('pages/AppPages/Login.vue'),
      },
      {
        path: '/repos',
        component: () => import('pages/AppPages/Repos.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
