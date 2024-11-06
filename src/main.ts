//import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
//import App from './App.vue'
//import HomeView from '@/views/vue-home.vue';
import App from './App.vue';
//import HomeView from './views/AboutView.vue';
import router from './router';

const app = createApp(App);
app.provide("window", window);
app.provide("localStorage", window.localStorage );

app.use(router);

app.mount('#app');

