import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@pages/home-page.vue";
import GeneratorPage from "@pages/generator-page.vue";
import FeaturesPage from "@pages/features-page.vue";
import FaqPage from "@pages/faq-page.vue";
import ChangelogPage from "@pages/changelog-page.vue";
import EditorPage from "@pages/editor-page.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/generate', component: GeneratorPage},
    {path: '/features', component: FeaturesPage},
    {path: '/faqs', component: FaqPage},
    {path: '/changelog', component: ChangelogPage},
    {path: '/editor', component: EditorPage},
]

export default createRouter({
    history: createWebHistory(),
    routes
})
