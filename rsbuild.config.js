const path = require('path');

import {defineConfig} from '@rsbuild/core';
import {pluginVue} from "@rsbuild/plugin-vue";

export default defineConfig({
    plugins: [pluginVue()],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'wang-enum-vue',
        libraryTarget: 'umd',
    },
    source: {
        entry: {
            index: './src/index.js',
        },
    },
    html: {
        // 禁用 HTML 的生成
        disableHtmlFolder: true,
        disableHtmlGeneration: true
    }
});