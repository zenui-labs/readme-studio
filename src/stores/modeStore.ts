import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useModeStore = defineStore('mode', () => {
    const mode = ref<'profile' | 'project' | null>(null)

    function setMode(newMode) {
        mode.value = newMode
    }

    return {mode, setMode}
})
