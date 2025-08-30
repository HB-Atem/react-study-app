/// <reference types="vitest" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'react-study-app' : './', // GitHub Pages利用の場合はリポジトリ名と揃える
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'json'],
      reportOnFailure: true,
    },
  },
})
