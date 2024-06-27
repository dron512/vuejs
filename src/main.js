import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)
app.provide('msg','msgmsg입니다')
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js';