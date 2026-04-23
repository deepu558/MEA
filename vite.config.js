import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Project Pages: set `base` to `'/your-repo-name/'` so assets load correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    // Prebundle heavy Spline packages so the dev server does not error on first import
    include: ['@splinetool/react-spline', '@splinetool/runtime'],
  },
})
