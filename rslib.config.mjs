const path = require('path');

import {defineConfig} from '@rslib/core';
import {pluginVue} from "@rsbuild/plugin-vue";

export default defineConfig({
    plugins: [pluginVue()],
    output: {
        target: 'web',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        filenameHash: false,
        libraryTarget: 'umd',
    },
    lib: [
        {
            format: 'umd',
            umdName: 'wang-enum-vue',
        },
    ],
    source: {
        transformImport: [

        ],
        treeShaking: true
    },
    tools: {
        htmlPlugin: false,
        minify: true
    },
});