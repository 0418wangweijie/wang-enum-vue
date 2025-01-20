import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    // 配置插件，@vitejs/plugin-vue 是 Vite 用于支持 Vue 3 的插件
    plugins: [vue()],
    build: {
        // 构建的输出目录，所有构建结果将放在这个目录下
        outDir: 'dist',
        // 是否对代码进行最小化处理，设置为 true 会进行代码压缩
        minify: true,
        // 库模式配置
        lib: {
            // 库的入口文件
            entry: ['src/index.js'],
            // 库的全局变量名称，在使用 UMD 等格式时可能会用到
            name: 'index',
            // 构建的格式，可以是 es 模块或 umd 模块等
            formats: ['es', 'umd'],
        },
    },
});