import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

const mixinsPath = path
  .resolve('src/styles/tokens/mixins')
  .replace(/\\/g, '/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${mixinsPath}" as *;\n`,
      },
    },
  },
})
