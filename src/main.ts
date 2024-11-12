//import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { useUserStore } from './stores/userStore';

//import App from './App.vue'
//import HomeView from '@/views/Home.vue';
import App from './App.vue';
//import HomeView from './views/AboutView.vue';
import router from './router';

const pinia = createPinia()
const app = createApp(App);
app.provide("window", window);
app.provide("localStorage", window.localStorage );
app.use(pinia);
const userStore = useUserStore();
userStore.localStorage = window.localStorage;


app.use(router);

app.mount('#app');

