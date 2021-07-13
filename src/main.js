import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import router from './router/router.js';
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
