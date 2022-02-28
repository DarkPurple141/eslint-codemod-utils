module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
}
