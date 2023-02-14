import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import betterDefine from '@vue-macros/better-define/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    betterDefine({ isProduction: false }),
    vue(),
  ],
})
