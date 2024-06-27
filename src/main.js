import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router';
import BoardFindAll from './view/board/BoardFindAll.vue';
import BoardFindOne from './view/board/BoardFindOne.vue';
import BoardUpdate from './view/board/BoardUpdate.vue';
import BoardInsert from './view/board/BoardInsert.vue';
import AboutMe from '@/view/about/AboutMe.vue'

import TheMain from '@/layouts/TheMain.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'TheMain',
    component: TheMain,
  },{
    path: '/boardfindall',
    name: 'BoardFindAll',
    component: BoardFindAll,
  },{
    path: '/boardinsert',
    name: 'BoardInsert',
    component: BoardInsert,
  },{
    path: '/boardfindone',
    name: 'BoardFindOne',
    component: BoardFindOne,
  },{
    path: '/boardupdate',
    name: 'BoardUpdate',
    component: BoardUpdate,
  },{
    path: '/about',
    name: 'AboutMe',
    component: AboutMe,
  }]
});

const app = createApp(App)
app.use(router);
app.provide('msg','msgmsg입니다')
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js';

