// 定义常量
const Constant = {}

/**
 * 初始化安装实例
 * @param {Object} app Vue实例
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
      const constantItem = enumInfo[constantName]
      if (!constantItem) {
        return ''
      }
      const foundItem = Object.values(constantItem).find(item => item.value === value)
      return foundItem ? foundItem.desc || '' : ''
    },

    /**
     * 根据枚举名称获取对应的键值对
     * @param {string} constantName 枚举名称
     * @returns {Array} 返回键值对数组
     */
    getDescValueList: constantName => {
      const constantItem = enumInfo[constantName]
      if (!constantItem) {
        return []
      }
      return Object.values(constantItem).map(item => ({
        value: item.value ?? 0,
        desc: item.desc ?? '',
      }))
    }
  }

  // 全局注入
  app.config.globalProperties.$enum = Enum
  // 提供给组合式API使用
  app.provide('enum', Enum)
}

// 创建组合式API hook
export function useEnum() {
  return inject('enum')
}

export default Constant