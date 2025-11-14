import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Agrega la línea base correcta
export default defineConfig({
  plugins: [react()],
  base: '/Milady-Garces/',   // <-- nombre exacto de tu repo
})
