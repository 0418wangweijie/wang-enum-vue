const path = require('path');

import {defineConfig} from '@rsbuild/core';
import {pluginVue} from "@rsbuild/plugin-vue";

export default defineConfig({
    plugins: [pluginVue()],
    output:{
        target: 'node',
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'wang-enum-vue',
        libraryTarget: 'umd',
        // 明确只输出 js 文件
        assetModuleFilename: 'js/[name].[hash].[ext]',
        chunkFilename: 'js/[name].[chunkhash].js'
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