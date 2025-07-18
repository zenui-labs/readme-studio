import {createRouter, createWebHistory} from 'vue-router'
import ProfileForm from './components/ProfileForm.vue'
import ProjectForm from './components/ProjectForm.vue'
import ResultPage from './components/ResultPage.vue'
import {useModeStore} from './stores/modeStore'
import HomePage from "@pages/home-page.vue";

const routes = [
    {path: '/', component: HomePage},
    {
        path: '/generate', component: () => {
            const modeStore = useModeStore()
            return modeStore.mode === 'profile' ? ProfileForm : ProjectForm
        }
    },
    {path: '/result', component: ResultPage}
]

export default createRouter({
    history: createWebHistory(),
    routes
})
