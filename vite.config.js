import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 3000,
  },
  build: {
    outDir: 'build', // Asegura que Vite cree la build en una carpeta llamada 'build'
},
})
