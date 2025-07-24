import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue(), tailwindcss(),],
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        },
    },
    resolve: {
        alias: {
            '@': '/src',
            '@pages': '/src/pages',
            '@components': '/src/components',
            '@stores': '/src/stores',
            '@utils': '/src/utils',
        }
    }
})
