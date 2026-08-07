import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      input: {
        // The portfolio itself.
        main: resolve(import.meta.dirname, 'index.html'),
        // A print-ready resume built from the same src/data files.
        resume: resolve(import.meta.dirname, 'resume.html'),
      },
    },
  },
})
