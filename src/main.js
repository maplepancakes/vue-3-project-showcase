import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import router from './router/router.js';

const app = createApp(App).use(router);

app.mount('#app');

