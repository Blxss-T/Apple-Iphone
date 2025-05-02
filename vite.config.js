import { sentryVitePlugin } from '@sentry/vite-plugin'; // Named import
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Basic setup with org and project
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'jsm-x9',       // Your Sentry organization
      project: 'javascript-react', // Your Sentry project
    })
  ],

  build: {
    sourcemap: true  // Enable sourcemaps for error tracking
  }
})
