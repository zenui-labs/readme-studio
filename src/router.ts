import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from "@pages/landing-page.vue";
import GeneratorPage from "@pages/generator-page.vue";
import ChangelogPage from "@pages/changelog-page.vue";
import EditorPage from "@pages/editor-page.vue";
import TemplatesPage from "@pages/templates-page.vue";

const routes = [
    {path: '/', component: LandingPage},
    {path: '/generate', component: GeneratorPage},
    {path: '/changelog', component: ChangelogPage},
    {path: '/editor', component: EditorPage},
    {path: '/templates', component: TemplatesPage},
]

export default createRouter({
    history: createWebHistory(),
    routes
})
