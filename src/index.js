import { inject } from 'vue';

const Constant = {};

// 定义一个枚举上下文
const EnumContext = Symbol('EnumContext');

/**
 * 初始化安装实例
 * @param {Object} app Vue 实例
 * @param {Object} options 枚举集合
 * @param {Object} options.enumInfo 枚举信息
 */
Constant.install = (app, { enumInfo = {} } = {}) => {
  // 枚举实例方法
  const Enum = {
    /**
     * 根据枚举值获取描述
     * @param {string} constantName 枚举名称
     * @param {any} value 枚举值
     * @returns {string} 枚举描述
     */
    getDescByValue: (constantName, value) => {
      const constantItem = enumInfo[constantName];
      if (!constantItem) {
        return '';
      }
      const foundItem = Object.values(constantItem).find(item => item.value === value);
      return foundItem? foundItem.desc || '' : '';
    },
    /**
     * 根据枚举名称获取对应的键值对
     * @param {string} constantName 枚举名称
     * @returns {Array} 返回键值对数组
     */
    getDescValueList: (constantName) => {
      const constantItem = enumInfo[constantName];
      if (!constantItem) {
        return [];
      }
      return Object.values(constantItem).map(item => ({
        value: item.value?? 0,
        desc: item.desc?? '',
      }));
    },
  };

  // 注入枚举到 Vue 实例
  app.provide(EnumContext, Enum);
};


// 创建组合式 API hook
const useEnum = () => {
  return inject(EnumContext);
}


export default Constant;
export { EnumContext, useEnum };