import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.provide("window", window);

app.use(router)

app.mount('#app')

