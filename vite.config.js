import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://viacep.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        port: process.env.PORT_API || 3000,  // Usa a porta fornecida pelo ambiente ou 3000 como fallback
        host: true,
      },
    },
  },
})
