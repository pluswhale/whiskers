import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/whiskers/',
    optimizeDeps: {
        exclude: ['typescript'],
    },
    build: {
        rollupOptions: {
            output: {
                // Ensures the 404.html file is included in the output
                assetFileNames: '[name].[ext]',
            },
        },
    },
});

