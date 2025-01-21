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
    },
    lib: [
        {
            format: 'umd',
            umdName: 'wang-enum-vue',
            output: {
                externals: {
                    vue: 'Vue'
                }
            }
        },
    ],
    source: {
        transformImport: [],
        treeShaking: true
    },
    tools: {
        htmlPlugin: false,
        minify: true
    },
});