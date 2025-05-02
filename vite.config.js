import { sentryVitePlugin } from '@sentry/vite-plugin'; // Named import
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Basic setup with org and project
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'jsm-x9',
      project: 'javascript-react',
      authToken: process.env.SENTRY_AUTH_TOKEN,
      release: process.env.VITE_SENTRY_RELEASE || 'apple-landing-v1',
      include: './dist',
    })
  ],

  build: {
    sourcemap: true  // Enable sourcemaps for error tracking
  }
})
