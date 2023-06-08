// Configure Vitest (https://vitest.dev/config)
import { defaultExclude, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...defaultExclude, '__fixtures__'],
    globals: true,
  },
})
