import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/': {
      target: 'https://slgp-qrcode-backend.herokuapp.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    },
  }
})
