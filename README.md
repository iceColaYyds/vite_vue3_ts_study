# 配置1:别名
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' 
// 备注1：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：pnpm add -D @types/node
// 如果继有红色波浪线请重新打开vscode

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/a/b/',
  resolve: {
    alias: { 
      '@': resolve(__dirname, 'src')
    }
  }
})
```

