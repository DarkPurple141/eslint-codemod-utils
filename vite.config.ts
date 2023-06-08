// Configure Vitest (https://vitest.dev/config)
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['__fixtures__'],
    globals: true,
  },
})
