import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(),],
    resolve: {
        alias: {
            '@': '/src',
            '@pages': '/src/pages',
            '@components': '/src/components',
            '@stores': '/src/stores',
            '@utils': '/src/utils',
        }
    }
});
