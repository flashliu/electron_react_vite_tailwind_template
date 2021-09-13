import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src/render/'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist/render')
  },
  base: "./",
  plugins: [reactRefresh()]
})
