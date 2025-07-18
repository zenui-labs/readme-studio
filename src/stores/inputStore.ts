import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useInputStore = defineStore('input', () => {
    const username = ref('')
    const repoUrl = ref('')
    return {username, repoUrl}
})
