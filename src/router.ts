import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@pages/home-page.vue";
import GeneratorPage from "@pages/generator-page.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/generate', component: GeneratorPage},
]

export default createRouter({
    history: createWebHistory(),
    routes
})
