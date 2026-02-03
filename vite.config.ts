import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url' // Required to fix __dirname
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// --- FIX: Manually define __dirname for ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})