import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 备注1：在 ts 模块中加载 node 核心模块需要安装 node 的类型补充模块：pnpm add -D @types/node
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // -------------------------------------------
        // targets to transform
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

        // global imports to register
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router',
          'pinia'
          // 自定义导入的api
        ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          // enabled一开始需要配置成 true，生成了 .eslintrc-auto-import.json 文件就配置成false
          enabled: false,
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: './auto-imports.d.ts'
        // -------------------------------------------
      })
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        '^/api/.*': {
          target: 'http://kg.zhaodashen.cn/mt/admin/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
