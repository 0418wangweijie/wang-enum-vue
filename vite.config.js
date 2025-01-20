import { fileURLToPath, URL } from 'node:url'
const path = require('path');

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        minify: true,
        lib: {
            entry: ['src/index.js'],
            name: 'index',
            formats: ['es'],
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
});