import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router';
import BoardFindAll from './view/board/BoardFindAll.vue';
import BoardFindOne from './view/board/BoardFindOne.vue';
import BoardUpdate from './view/board/BoardUpdate.vue';
import BoardInsert from './view/board/BoardInsert.vue';

import AlcoholFindAll from './view/alcohol/AlcoholFindAll.vue';
import AlcoholFindOne from './view/alcohol/AlcoholFindOne.vue';
import AlcoholUpdate from './view/alcohol/AlcoholUpdate.vue';
import AlcoholInsert from './view/alcohol/AlcoholInsert.vue';

import AboutMe from '@/view/about/AboutMe.vue'

import TheMain from '@/view/main/TheMain.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

const alcoholroute = [{
  path: '/alcoholfindall',
  name: 'AlcoholFindAll',
  component: AlcoholFindAll,
},{
  path: '/alcoholinsert',
  name: 'AlcoholInsert',
  component: AlcoholInsert,
},{
  path: '/alcoholfindone/:code',
  name: 'AlcoholFindOne',
  component: AlcoholFindOne,
},{
  path: '/alcoholupdate/:code',
  name: 'AlcoholUpdate',
  component: AlcoholUpdate,
}];

const router = createRouter({
  history: createWebHistory(),
  routes: [...alcoholroute,{
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
    path: '/boardfindone/:id',
    name: 'BoardFindOne',
    component: BoardFindOne,
  },{
    path: '/boardupdate/:id',
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

