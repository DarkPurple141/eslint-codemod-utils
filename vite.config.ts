/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config)
import { defineConfig } from 'vite'

export default defineConfig({
  // @ts-ignore
  test: {
    globals: true,
  },
})
