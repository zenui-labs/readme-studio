// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import "./style.css";
var app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
