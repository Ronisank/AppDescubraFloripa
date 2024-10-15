import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://m3p-backend-squad3-3vsm.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        port: 3000,  // Usa a porta fornecida pelo ambiente ou 3000 como fallback
        host: 'https://m3p-backend-squad3-3vsm.onrender.com',
      },
    },
  },
})
