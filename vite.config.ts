import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ command, mode }) => {
  const plugins = [vue(), svgLoader(), VueDevTools()]
  const env = loadEnv(mode, process.cwd(), '')
  const resolveConfig = {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.ts'],
  }
  if (command === 'serve') {
    return {
      plugins,
      resolve: { ...resolveConfig },
      root: resolve(__dirname, 'src/playground'),
      server: {
        host: env.VITE_HOST,
        port: Number(env.VITE_PORT),
      },
    }
  }
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'walker-ui',
        fileName: (format) => `walker-ui.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
          assetFileNames: (assetInfo) => {
            if (/\.css$/.test(assetInfo.name || '')) {
              return 'styles/[name][extname]'
            }
            return 'assets/[name][extname]'
          },
          chunkFileNames: (chunkInfo) => {
            if (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.endsWith('.svg')) {
              return 'icons/[name]-[hash].js'
            }
            return 'chunks/[name]-[hash].js'
          },
          entryFileNames: 'walker-ui.js',
        },
      },
    },
    plugins,
    resolve: resolveConfig,
  }
})
