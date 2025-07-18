import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useResultStore = defineStore('result', () => {
    const readme = ref('')

    function setReadme(text) {
        readme.value = text
    }

    return {readme, setReadme}
})
