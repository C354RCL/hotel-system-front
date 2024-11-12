import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 5173,
  },
  base: './', // Asegura que las rutas sean relativas
  build: {
    outDir: 'dist', // Cambia a `dist` para hacerla compatible con Electron
  },
})
