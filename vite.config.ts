import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? process.env.VITE_BASE_URL || '/csengeesnorbi.hu/'  // Default to repo name for GitHub Pages
    : '/',  // Use root path for development
})
