// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Milady-Garces/', // 👈 nombre exacto de tu repo
  plugins: [react()],
})