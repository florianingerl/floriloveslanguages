import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
//app.config.globalProperties.window = window;
app.provide("window", window);

app.use(router)

app.mount('#app')
