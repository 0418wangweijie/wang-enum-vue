# Vue 枚举管理

这个库提供了一个方便的方式来管理和使用枚举数据，适用于 Vue 应用程序。它允许你在 Vue 实例和组合式 API 中轻松地访问和操作枚举信息，包括根据枚举值获取描述和获取枚举的键值对列表。


## 安装

你可以使用 npm 或 yarn 来安装这个库：

```bash
npm install wang-enum-vue
```

或者

```bash
yarn add wang-enum-vue
```


## 使用方法

### 1. 引入并使用插件

首先，在你的 Vue 应用的入口文件（通常是 `main.js` 或 `main.ts`）中引入并使用这个插件：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import Constant from 'wang-enum-vue'

const app = createApp(App)

// 初始化枚举信息，这里可以传入你的枚举信息对象
const enumInfo = {
  // 示例枚举
  Status: [
    { value: 1, desc: 'Active' },
    { value: 2, desc: 'Inactive' },
    { value: 3, desc: 'Pending' }
  ],
  // 可以添加更多的枚举信息
}

// 安装插件
app.use(Constant, { enumInfo })

app.mount('#app')
```


### 2. 在组件中使用枚举方法

#### 2.1 在 Options API 中使用

在 Vue 的 Options API 中，你可以通过 `this.$enum` 来访问枚举方法：

```vue
<template>
  <div>
    <p>枚举描述: {{ getEnumDesc }}</p>
    <p>枚举列表: {{ enumList }}</p>
  </div>
</template>

<script>
export default {
  name: 'YourComponent',
  data() {
    return {
      getEnumDesc: '',
      enumList: []
    }
  },
  mounted() {
    // 获取枚举描述
    this.getEnumDesc = this.$enum.getDescByValue('Status', 2)
    // 获取枚举列表
    this.enumList = this.$enum.getDescValueList('Status')
  }
}
</script>
```


#### 2.2 在组合式 API 中使用

使用 `useEnum` 组合式 API 钩子来访问枚举方法：

```vue
<template>
  <div>
    <p>枚举描述: {{ getEnumDesc }}</p>
    <p>枚举列表: {{ enumList }}</p>
  </div>
</template>

<script>
import { useEnum } from 'wang-enum-vue'
import { inject } from 'vue'

export default {
  name: 'YourComponent',
  setup() {
    const Enum = useEnum() || inject('enum')
    const getEnumDesc = Enum.getDescByValue('Status', 2)
    const enumList = Enum.getDescValueList('Status')

    return {
      getEnumDesc,
      enumList
    }
  }
}
</script>
```


### 功能说明

- **getDescByValue(constantName, value)**：根据枚举名称和枚举值获取相应的描述。

```javascript
const description = Enum.getDescByValue('Status', 2)
// 输出: "Inactive"
```


- **getDescValueList(constantName)**：根据枚举名称获取键值对列表。

```javascript
const enumList = Enum.getDescValueList('Status')
// 输出: [{ value: 1, desc: "Active" }, { value: 2, desc: "Inactive" }, { value: 3, desc: "Pending" }]
```


### 注意事项

- 确保在调用 `getDescByValue` 或 `getDescValueList` 时，传入的枚举名称在 `enumInfo` 中存在，否则会返回空字符串或空数组。
- 在组合式 API 中使用时，如果 `useEnum` 无法正常工作，可以使用 `inject` 作为后备选项，以确保在不同的 Vue 3 应用环境下都能正确使用。


## API 文档

### 1. 插件安装方法

**`Constant.install(app, { enumInfo = {} })`**

- **`app`**：Vue 实例。
- **`enumInfo`**：可选的枚举信息对象，结构为 `{ [enumName]: [{ value, desc }] }`。


### 2. 枚举实例方法

#### `getDescByValue(constantName, value)`

- **`constantName`**：枚举的名称。
- **`value`**：要查找描述的枚举值。
- **返回**：相应的枚举描述，如果未找到则返回空字符串。


#### `getDescValueList(constantName)`

- **`constantName`**：枚举的名称。
- **返回**：包含枚举键值对的数组，如果未找到则返回空数组。


### 3. 组合式 API 钩子

**`useEnum()`**

- **返回**：注入的枚举实例，在组合式 API 中使用。


## 贡献

欢迎大家对这个项目进行贡献，可以通过提交 Pull Request 或在 GitHub 上创建 Issue 来提出问题和建议。


## 许可证

这个库使用 MIT 许可证。


## 作者

伟


## 版本

当前版本：[1.0.0]

```