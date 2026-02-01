import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'repository-name' with your actual specific GitHub repository name
  // Example: if your repo is https://github.com/john/my-site, use '/my-site/'
  base: '/Kittuu/',
})
