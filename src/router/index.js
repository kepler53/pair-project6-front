import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import QnaPage from '@/views/QnaPage.vue';

import BoardList from '@/components/BoardList.vue';
import BoardDetail from '@/components/BoardDetail.vue';
import BoardWrite from '@/components/BoardWrite.vue';
import BoardUpdate from '@/components/BoardUpdate.vue';
import Map from '@/components/Map.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/qna',
    name: 'Qna',
    component: QnaPage,
    redirect: '/qna/list',
    children: [
      {
        path: 'list',
        name: 'List',
        component: BoardList,
      },
      {
        path: 'read/:boardId',
        name: 'Read',
        component: BoardDetail,
      },
      {
        path: 'write',
        name: 'Write',
        component: BoardWrite,
      },
      {
        path: 'update/:boardId',
        name: 'Update',
        component: BoardUpdate,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
