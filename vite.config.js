import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Project Pages: set `base` to `'/your-repo-name/'` so assets load correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
