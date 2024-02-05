import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'
import { getBuildOptions } from '../../config'

const __dirname = dirname(fileURLToPath(new URL(import.meta.url)))
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
    UnoCSS(),
    dts({
      entryRoot: __dirname,
      tsconfigPath: './tsconfig.lib.json',
    }),
  ],
  build: getBuildOptions(resolve(__dirname, './index.tsx')),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
