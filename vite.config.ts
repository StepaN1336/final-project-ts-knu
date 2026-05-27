import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'your-repo-name' to the actual GitHub repo name before deploying
// e.g. base: '/smart-trip-planner/'
export default defineConfig({
  plugins: [react()],
  base: '/smart-trip-planner/',  // ← змінити на назву репозиторію
})
