import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署：仓库名 europe-chronicle，构建资源需使用相对路径
  base: './',
})
