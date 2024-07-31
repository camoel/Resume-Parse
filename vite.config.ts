import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


     
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
// 代理配置
server: {
    proxy: {

      
      '/api/': {
        target: 'http://192.168.1.161:81', // 服务器地址和端口
        changeOrigin: true,
        rewrite: (path) =>{
          const newPath = path.replace(/^\/api/, '') // 可选：重写路径
      console.log(`Rewriting path from ${path} to ${newPath}`)  // 在终端输出日志
          return newPath}
      },
    },
  },
  
})


