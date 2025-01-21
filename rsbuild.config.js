const path = require('path');

import {defineConfig} from '@rsbuild/core';
import {pluginVue} from "@rsbuild/plugin-vue";

export default defineConfig({
    plugins: [pluginVue()],
    output:{
        target: 'web',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'wang-enum-vue',
        libraryTarget: 'umd',
        distPath: {
            js: '',
            css: '',
        },
        filenameHash: false,
        // 明确只输出 js 文件
        assetModuleFilename: 'js/[name].[hash].[ext]',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    source: {
        entry: {
            index: './src/index.js',
        },
    },
    tools:{
     htmlPlugin:false
    },
    html: {
        // 禁用 HTML 的生成
        removeHtmlFolder: true,
        removeHtmlOutput: true,
        template: false,
        inlineLimit: 0,
        disableHtmlFolder: true,
        disableHtmlGeneration: true
    }
});