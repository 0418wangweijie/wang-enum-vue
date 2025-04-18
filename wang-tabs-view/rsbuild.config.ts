import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSass} from "@rsbuild/plugin-sass";

export default defineConfig({
    plugins: [pluginReact(), pluginSass()],
    tools: {
        postcss: {
          postcssOptions: {
            plugins: [
              require('postcss-pxtorem')({
                rootValue: 28, // 根字体大小，对应 rootFontSize: 28
                unitPrecision: 5, // 转换后的 rem 值保留的小数位数
                propList: ['*'], // 转换所有属性
                selectorBlackList: [], // 不转换的选择器
                replace: true, // 是否直接替换 px 值
                mediaQuery: true, // 是否转换媒体查询中的 px
                minPixelValue: 2, // 最小转换值
              }),
            ],
          },
        }
    }
});
